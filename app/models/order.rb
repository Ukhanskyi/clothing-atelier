class Order < ApplicationRecord
  belongs_to :user
  belongs_to :detail

  accepts_nested_attributes_for :detail
  validates :detail, presence: true, uniqueness: { scope: :detail_id }
end
