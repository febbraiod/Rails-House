class Player < ActiveRecord::Base
  has_one :bag
  has_many :items, through: :bag
end
