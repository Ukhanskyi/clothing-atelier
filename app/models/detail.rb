# frozen_string_literal: true

class Detail < ApplicationRecord
  belongs_to :order

  validates :order, presence: true, uniqueness: { scope: :order_id }
end
