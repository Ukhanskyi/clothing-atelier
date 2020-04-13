# frozen_string_literal: true

class ResponsesController < ApplicationController
  before_action :find_response, only: %i[show edit update destroy]

  def index
    @response = Response.all
    respond_to do |format|
      format.html { @response }
      format.json { render json: Response.all }
    end
  end

  def new
    @response = Response.new
  end

  def show
    respond_to do |format|
      format.html { @response }
      format.json { render json: @response }
    end
  end

  def edit; end

  # def update
  #   respond_to do |format|
  #     if @response.update_attributes(response_params)
  #       format.html { redirect_to about_path, notice: 'Response was successfully updated.' }
  #       format.json { render about_path, status: :ok, location: @response }
  #     else
  #       format.html { render :edit }
  #     end
  #   end
  # end

  def destroy
    @response.destroy
    respond_to do |format|
      format.html { redirect_to about_path, notice: 'Response was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def create
    @response = Response.new(response_params)
    @response.author_id = current_user.id

    respond_to do |format|
      if @response.save
        format.html { redirect_to about_path, notice: 'Response was successfully created.' }
        format.json { render :show, status: :created, location: @response }
      else
        format.html { render :new }
      end
    end
  end

  private

  def response_params
    params.require(:response).permit(:name, :surname, :body, :nested_files)
  end

  def find_response
    @response = Response.find(params[:id])
  end
end
