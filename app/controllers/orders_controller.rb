class OrdersController < ApplicationController
  def index
    @order = Order.all
  end

  def new
    @order = Order.new
  end

  def show
    @order = Order.find(params[:id])
  end

  def edit
    @order = Order.find(params[:id])
  end

  def update
    @order = Order.find(params[:id])

    if @order.update(order_params)
      redirect_to @order
    else
      render 'edit'
    end
  end

  def destroy
    @order = Order.find(params[:id])

    @order.destroy
    redirect_to orders_path
  end

  def create
    # render plain: params[:post].inspect

    @order = Order.new order_params
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
                                  :gender, detail_attributes: [:clothing_name, :color, :collar, :sleeve, :length, :size, :price])

  end
end
