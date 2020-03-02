# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Order, type: :model do
  before(:all) do
    user = create :user
    @order1 = create(:order, user: user)
  end

  it 'is valid with valid attributes' do
    expect(@order1).to be_valid
  end

  it 'is not valid without a name' do
    @order2 = build(:order, name: nil)
    expect(@order2).to_not be_valid
  end

  it 'is not valid without a surname' do
    @order2 = build(:order, surname: nil)
    expect(@order2).to_not be_valid
  end

  it 'is not valid without a email' do
    @order2 = build(:order, email: nil)
    expect(@order2).to_not be_valid
  end

  it 'is not valid without a gender' do
    @order2 = build(:order, gender: nil)
    expect(@order2).to_not be_valid
  end

  it 'is not valid without a phone' do
    @order2 = build(:order, phone: nil)
    expect(@order2).to_not be_valid
  end

  it 'is not valid without a address' do
    @order2 = build(:order, address: nil)
    expect(@order2).to_not be_valid
  end
end
