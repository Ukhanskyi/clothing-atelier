# frozen_string_literal: true

class PagesController < ApplicationController
  def about
    @heading = 'Page about us!'
    @text = 'Somme example text for this site.'
  end
end
