class CreateSongsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :first_name
      t.string :last_name
      t.boolean :admin
      t.integer :song_time

      t.timestamps
    end
  end
end
  
