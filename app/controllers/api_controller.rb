class ApiController < ApplicationController
  def index
    greeting = Message.random_greeting
    render json: { greeting: greeting.greeting }
  end
end
