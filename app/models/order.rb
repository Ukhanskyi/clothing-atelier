# frozen_string_literal: true

class Order < ApplicationRecord
  belongs_to :user
  has_one :detail, dependent: :destroy

  validates :name, presence: true, length: { within: 3..25 }
  validates :surname, presence: true, length: { within: 3..50 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, presence: { message: 'Write your number in correct form!' },
                    numericality: true,
                    length: { within: 10...15 }
  validates :address, presence: true, length: { maximum: 100 }

  accepts_nested_attributes_for :detail

  include AASM

  aasm column: 'state' do
    state :initialized, initial: true
    state :confirmed

    event :confirm, after: :order_email do
      transitions from: :initialized, to: :confirmed
    end
  end

  private

  def order_email
    UserMailer.order_email(self).deliver_now
  end
end
