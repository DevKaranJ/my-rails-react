Rails.application.routes.draw do
  root 'root#index'
  get 'api/index', to: 'api#index'
end
