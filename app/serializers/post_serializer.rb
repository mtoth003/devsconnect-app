class PostSerializer < ActiveModel::Serializer
  attributes :id, :header, :description, :image_url, :content_url, :like_count, :created_at, :username, :user_image
  has_one :user
  has_many :favorites
end
