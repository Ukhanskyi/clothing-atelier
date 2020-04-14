# frozen_string_literal: true

class Response < ApplicationRecord
  mount_uploader :nested_files, NestedFileUploader

  validates :author_id, presence: true
  validates :name, presence: true, length: { within: 3..25 }
  validates :surname, presence: true, length: { within: 3..50 }
  validates :body, presence: true, length: { maximum: 500 }
end
