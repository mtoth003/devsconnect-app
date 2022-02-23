class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites

  def username
    self.user.username
  end

  def user_image
    self.user.image_url
  end
end
