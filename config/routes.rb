Rails.application.routes.draw do
  resources :users

  # Sign up
  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'

  # Defines the root path route ("/")
  root to: 'main#index'
end
