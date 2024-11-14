# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "starting seeds"

distributor_one = Distributor.create(
  name: 'Hello Games',
  address: '1234 Fake Street'
)
distributor_two = Distributor.create(
  name: 'Frictional Games',
  address: '1234 Main Street'
)
distributor_three = Distributor.create(
  name: 'Factory Games',
  address: '1234 Kingsway Street'
)

VideoGame.create(
  name: 'Factorio',
  rating: 10,
  distributor: distributor_one
)
VideoGame.create(
  name: 'Doom',
  rating: 4,
  distributor: distributor_two
)
VideoGame.create(
  name: 'Satisfactory',
  rating: 9,
  distributor: distributor_three
)

puts "ending seeds"
