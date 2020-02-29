# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :orders

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, presence: true,
                       confirmation: true,
                       length: { within: 6..40 },
                       on: :create

  validates :password, confirmation: true,
                       length: { within: 6..40 },
                       allow_blank: true,
                       on: :update

  validates :name, presence: true, length: { within: 3..25 }

  validates :surname, presence: true, length: { within: 3..50 }

  validates :phone, presence: { message: 'Write your number in correct form!' },
                    numericality: true,
                    length: { within: 10...15 }
  validates :gender, presence: true
  validates :address, presence: true, length: { maximum: 100 }
end
