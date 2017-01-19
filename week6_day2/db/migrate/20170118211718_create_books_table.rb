class CreateBooksTable < ActiveRecord::Migration[5.0]
  def change
  	create_table :books do |t|
  		t.string :title
  		t.string :author
  		t.integer :year_published
  		t.boolean :read

  		t.timestamps
  	end
  end
end
