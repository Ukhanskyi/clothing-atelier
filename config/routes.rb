# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'posts#index', as: 'home'

  get 'about' => 'pages#about', as: 'about' do
    resources :responses, only: %i[create destroy]
  end
  get 'users/sign_up' => 'users#sign_up', as: 'sign_up'

  resources :posts
  resources :orders do
    member do
      post :confirm, :tailoring_start, :tailoring_finish, :move_to_you
    end
  end
  resources :responses
end
