class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :header
      t.string :description
      t.string :image_url
      t.string :content_url
      t.integer :like_count
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
