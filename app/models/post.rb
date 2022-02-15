class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites

  def username
    self.user.username
  end
end
