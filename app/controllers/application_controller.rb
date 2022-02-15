class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  
  before_action :authorize

  private

  def current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def authorize
    return render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  end

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
