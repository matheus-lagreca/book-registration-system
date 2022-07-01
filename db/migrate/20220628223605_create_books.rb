class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author_name
      t.integer :first_publish_year
      t.string :cover_edition_key

      t.timestamps
    end
  end
end
