# frozen_string_literal: true

FactoryBot.define do
  factory :order do
    user
    name { Faker::Name.first_name }
    surname { Faker::Name.last_name }
    email { Faker::Internet.email }
    phone { Faker::Number.number(10) }
    address { Faker::Address }
    gender { Faker::Gender.binary_type }
  end
end
