class CreateSongsTable < ActiveRecord::Migration[5.0]
  def change

    create_table :songs do |t|
      t.string :author_name
      t.string :title
      t.integer :year_published 
      t.boolean :listened
      t.string :genre

      t.timestamps
    end
  end
end
