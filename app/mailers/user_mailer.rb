# frozen_string_literal: true

class UserMailer < ApplicationMailer
  def order_email(order)
    @order = order
    mail(to: @order.email, subject: 'Welcome to Clothing Atelier Site')
  end
end
