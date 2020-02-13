class Order < ApplicationRecord
  belongs_to :user
  has_one :detail, dependent: :destroy

  accepts_nested_attributes_for :detail

  after_create :order_email

  private

  def order_email
    UserMailer.order_email(self).deliver_now
  end
end
