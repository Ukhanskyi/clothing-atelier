# frozen_string_literal: true

class AddFieldsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :users, :surname, :string
    add_column :users, :gender, :string
    add_column :users, :phone, :string, limit: 13
    add_column :users, :address, :string
    add_column :users, :size_clothing, :string
  end
end
