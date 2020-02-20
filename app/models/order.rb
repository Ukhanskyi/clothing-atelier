# frozen_string_literal: true

class Order < ApplicationRecord
  belongs_to :user
  has_one :detail, dependent: :destroy

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
