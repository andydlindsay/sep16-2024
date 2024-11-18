class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :quote
      t.string :album

      t.references :character, index: true, foreign_key: true

      t.timestamps
    end
  end
end
