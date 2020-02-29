# frozen_string_literal: true

FactoryBot.define do
  factory :detail do
    order
    clothing_name { Faker::Internet.user_name(5..20) }
    color { Faker::Color.color_name }
    collar { Faker::Internet.user_name(5..20) }
    sleeve { Faker::Internet.user_name(5..20) }
    length { Faker::Internet.user_name(5..20) }
    size { Faker::Name.initials(1...3) }
    price { Faker::Commerce.price }
  end
end
