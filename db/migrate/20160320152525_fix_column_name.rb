class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :bags, :user_id, :player_id
  end
end
