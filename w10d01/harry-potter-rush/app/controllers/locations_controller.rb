class LocationsController < ApplicationController
  def index
    # @locations = Location.all
    character_id = params[:character_id]
    @character = Character.find(character_id)
    @locations = @character.locations
  end
end
