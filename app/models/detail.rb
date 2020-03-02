# frozen_string_literal: true

class Detail < ApplicationRecord
  belongs_to :order

  validates :order, presence: true, uniqueness: { scope: :order_id }
  validates :clothing_name, presence: true, length: { within: 3...25 }
  validates :color, presence: true, length: { maximum: 20 }
  validates :collar, length: { maximum: 20 }
  validates :sleeve, length: { maximum: 20 }
  validates :length, length: { maximum: 20 }
  validates :size, presence: true, length: { maximum: 3 }
  validates :price, presence: true, numericality: true
end
