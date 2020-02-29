# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { Faker::Name.first_name }
    surname { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { Faker::Internet.password(min_length: 6, max_length: 40) }
    gender { Faker::Gender.binary_type }
    phone { Faker::Number.number(10) }
    address { Faker::Address }
    size_clothing { Faker::Name.initials(1...3) }
  end
end
