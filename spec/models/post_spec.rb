# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:all) do
    @post1 = create(:post)
  end

  it 'is valid with valid attributes' do
    expect(@post1).to be_valid
  end

  it 'is not valid without a title' do
    @post2 = build(:post, title: nil)
    expect(@post2).to_not be_valid
  end

  it 'is not valid without a body' do
    @post2 = build(:post, body: nil)
    expect(@post2).to_not be_valid
  end
end
