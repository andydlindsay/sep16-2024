class CreateVideoGames < ActiveRecord::Migration[7.0]
  def change
    create_table :video_games do |t|
      t.string :name
      t.integer :rating

      t.references :distributor, foreign_key: true

      t.timestamps
    end
  end
end
