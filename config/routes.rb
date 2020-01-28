Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'posts#index', as: 'home'

  get 'about' => 'pages#about', as: 'about'
  get 'users/sign_up' => 'users#sign_up', as: 'sign_up'

  resources :posts
end
