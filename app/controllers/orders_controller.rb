# frozen_string_literal: true

class OrdersController < ApplicationController
  before_action :find_order, only: %i[show edit update destroy]

  def index
    respond_to do |format|
      format.html { current_user.orders }
      format.json { render json: current_user.orders, include: [:detail] }
    end
  end

  def new
    @order = Order.new
  end

  def confirm
    @order = Order.find(params[:id])
    @order.confirm!
    render 'show'
  end

  def show
    respond_to do |format|
      format.html { @order }
      format.json { render json: @order, include: 'detail' }
    end
  end

  def edit; end

  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_path, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def create
    # render plain: params[:post].inspect

    @order = Order.new(order_params)
    @order.user_id = current_user.id

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
      end
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
