class Message < ApplicationRecord
  def self.random_greeting
    order(Arel.sql('RANDOM()')).first
  end
end
