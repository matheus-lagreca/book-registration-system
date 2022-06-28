Rails.application.routes.draw do
  resources :users

  # Sign up
  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'

  # Session
  get 'sign_in', to: 'sessions#new'
  post 'sign_in', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  # Defines the root path route ("/")
  root to: 'main#index'
end
