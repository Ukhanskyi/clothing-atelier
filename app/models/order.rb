class Order < ApplicationRecord
  belongs_to :user
  has_one :detail, dependent: :destroy

  accepts_nested_attributes_for :detail
end
