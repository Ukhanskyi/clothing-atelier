class CreateDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :details do |t|
      t.string :clothing_name
      t.string :color
      t.string :collar
      t.string :sleeve
      t.string :length
      t.string :size
      t.decimal :price
      t.timestamps
    end
  end
end
