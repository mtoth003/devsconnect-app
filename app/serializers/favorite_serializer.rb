class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :username
  has_one :post
  has_one :user
end
