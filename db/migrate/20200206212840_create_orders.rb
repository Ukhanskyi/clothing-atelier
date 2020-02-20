# frozen_string_literal: true

class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.string :name
      t.string :surname
      t.string :email
      t.string :phone
      t.string :address
      t.boolean :gender
      t.timestamps
    end
  end
end
