require 'test_helper'

describe "with static asset integration," do
  include Capybara::DSL

  describe "boutiqueair_underscore_extensions.js" do
    it "should be integrated to the asset pipeline" do
      visit '/assets/boutiqueair_underscore_extensions.js'
      page.text.must_include 'BoutiqueAirUnderscoreExtensions = {'
    end
  end
end