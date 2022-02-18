class Api::FavoritesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: Favorite.all
  end

  def show
    favorites = Favorite.find(params[:id])
    render json: favorites, include: :posts
  end

  def create
    favorites = Favorite.create(favorite_params)
    render json: favorites, status: :created
  end
  
  def destroy
    favorite = Favorite.find_by(id: params[:id])
    favorite.destroy
    head :no_content
  end
  
  private

  def favorite_params
    params.permit(:user_id, :post_id)
  end
end
