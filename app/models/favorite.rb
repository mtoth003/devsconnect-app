class Favorite < ApplicationRecord
  belongs_to :post
  belongs_to :user

  def username
    self.user.username
  end
end
