# frozen_string_literal: true

class OrdersController < ApplicationController
  before_action :find_order, only: %i[show edit update destroy]

  def index
    @order = Order.all
  end

  def new
    @order = Order.new
  end

  def confirm
    @order = Order.find(params[:id])
    @order.confirm!
    render 'show'
  end

  def show; end

  def edit; end

  def update
    if @order.update(order_params)
      redirect_to @order
    else
      render 'edit'
    end
  end

  def destroy
    @order.destroy
    redirect_to orders_path
  end

  def create
    # render plain: params[:post].inspect

    @order = Order.new(order_params)
    @order.user_id = current_user.id

    if @order.save
      redirect_to @order
    else
      render 'new'
    end
  end

  private

  def order_params
    params.require(:order).permit(:name, :surname, :email, :phone, :address,
                                  :gender, :state,
                                  detail_attributes: %i[order_id clothing_name
                                                        color collar sleeve
                                                        length size price])
  end

  def find_order
    @order = Order.find(params[:id])
  end
end
