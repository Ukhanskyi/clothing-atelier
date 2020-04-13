# frozen_string_literal: true

class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.integer :author_id
      t.string :name
      t.string :surname
      t.text :body
      t.string :nested_files

      t.timestamps
    end
  end
end
