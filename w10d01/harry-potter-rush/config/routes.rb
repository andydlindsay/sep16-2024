Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # resources :characters, only: [:index]

  # resources :locations, only: [:index]

  resources :characters do
    resources :locations
  end

end
