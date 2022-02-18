class Api::PostsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:index, :show]

  before_action :is_authorized, only: :destroy

  def user_show
    posts = Post.find_by(user_id:params[:id])
    render json: posts
  end

  def index
    render json: Post.all.order('created_at DESC')
  end

  def show
    post = Post.find(params[:id])
    render json: post, include: :favorites
  end

  def create
    post = @current_user.posts.create(post_params)
    render json: post, status: :created
  end

  def update
    post = Post.find(params[:id])
    if post.user_id = @current_user.id
      post.update(post_params)
      render json: post
    else
      render json: "This post does not belong to you", status: :unauthorized
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

  private

  def post_params
    params.permit(:header, :description, :image_url, :content_url, :like_count, :user_id)
  end
end
