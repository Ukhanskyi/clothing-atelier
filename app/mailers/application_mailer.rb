# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'clothing.ateliers@gmail.com'
  layout 'mailer'
end
