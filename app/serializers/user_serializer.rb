class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :password_digest, :github, :linkedin, :image_url, :bio, :last_active
end
