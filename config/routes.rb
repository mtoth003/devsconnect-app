Rails.application.routes.draw do
  namespace :api do
    resources :favorites
    resources :posts
    resources :users

    get 'sessions/create'
    get 'sessions/destroy'
    get '/me', to: 'users#show'
    get '/account', to: 'users#show'
    get '/posts/users/:id', to: "posts#user_show"

    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'

    delete '/logout', to: 'sessions#destroy'

    get '*path', to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
