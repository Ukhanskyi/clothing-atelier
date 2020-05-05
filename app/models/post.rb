# frozen_string_literal: true

class Post < ApplicationRecord
  mount_uploader :nested_files, NestedFileUploader

  validates :title, presence: true, length: { minimum: 5 }
  validates :body, presence: true
end
