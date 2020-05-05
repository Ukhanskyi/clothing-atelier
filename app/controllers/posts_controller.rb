# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :find_post, only: %i[show edit update destroy]

  def index
    @post = Post.all
    respond_to do |format|
      format.html { Post.all }
      format.json { render json: Post.all }
    end
  end

  def new
    @post = Post.new
  end

  def show
    respond_to do |format|
      format.html { @post }
      format.json { render json: @post }
    end
  end

  def edit; end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_path, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
      end
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :nested_files)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
