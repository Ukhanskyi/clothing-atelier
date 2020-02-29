# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  before(:all) do
    @user1 = create(:user)
  end

  it 'is valid with valid attributes' do
    expect(@user1).to be_valid
  end

  it 'is not valid without a name' do
    @user2 = build(:user, name: nil)
    expect(@user2).to_not be_valid
  end

  it 'is not valid without a surname' do
    @user2 = build(:user, surname: nil)
    expect(@user2).to_not be_valid
  end

  it 'is not valid without a email' do
    @user2 = build(:user, email: nil)
    expect(@user2).to_not be_valid
  end

  it 'is not valid without a password' do
    @user2 = build(:user, password: nil)
    expect(@user2).to_not be_valid
  end

  it 'is not valid without a gender' do
    @user2 = build(:user, gender: nil)
    expect(@user2).to_not be_valid
  end

  it 'is not valid without a phone' do
    @user2 = build(:user, phone: nil)
    expect(@user2).to_not be_valid
  end

  it 'is not valid without a address' do
    @user2 = build(:user, address: nil)
    expect(@user2).to_not be_valid
  end

  it 'is valid without a size_clothing' do
    @user2 = build(:user, size_clothing: nil)
    expect(@user2).to be_valid
  end
end
