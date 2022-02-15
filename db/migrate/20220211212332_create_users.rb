class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :github
      t.string :linkedin
      t.string :image_url
      t.text :bio
      t.string :last_active

      t.timestamps
    end
  end
end
