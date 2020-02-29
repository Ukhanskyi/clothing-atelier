# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Detail, type: :model do
  before(:all) do
    order = create :order
    @detail1 = create(:detail, order: order)
  end

  it 'is valid with valid attributes' do
    expect(@detail1).to be_valid
  end

  it 'is not valid without a clothing_name' do
    @detail2 = build(:detail, clothing_name: nil)
    expect(@detail2).to_not be_valid
  end

  it 'is not valid without a color' do
    @detail2 = build(:detail, color: nil)
    expect(@detail2).to_not be_valid
  end

  it 'is valid without a collar' do
    @detail2 = build(:detail, collar: nil)
    expect(@detail2).to be_valid
  end

  it 'is valid without a sleeve' do
    @detail2 = build(:detail, sleeve: nil)
    expect(@detail2).to be_valid
  end

  it 'is valid without a length' do
    @detail2 = build(:detail, length: nil)
    expect(@detail2).to be_valid
  end

  it 'is not valid without a size' do
    @detail2 = build(:detail, size: nil)
    expect(@detail2).to_not be_valid
  end

  it 'is not valid without a price' do
    @detail2 = build(:detail, price: nil)
    expect(@detail2).to_not be_valid
  end
end
