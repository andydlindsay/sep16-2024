# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "starting the seeds"

puts "creating the characters"

25.times do
  Character.create(
    name: Faker::Movies::HarryPotter.character,
    house: Faker::Movies::HarryPotter.house
  )
end

puts "retrieve all characters from db"

characters = Character.all

puts "creating the locations"

100.times do
  Location.create(
    name: Faker::Movies::HarryPotter.location,
    quote: Faker::Movies::HarryPotter.quote,
    album: Faker::Music::Rush.album,
    character: characters.sample
  )
end

puts "end of seeds"
