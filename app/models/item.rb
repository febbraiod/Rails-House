class Item < ActiveRecord::Base
  belongs_to :bag
  has_one :player, through: :bag
end
