class PostSerializer < ActiveModel::Serializer
  attributes :id, :header, :description, :image_url, :content_url, :like_count, :created_at, :username
  has_one :user
end
