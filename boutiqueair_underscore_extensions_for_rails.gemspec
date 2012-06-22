$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "boutiqueair_underscore_extensions_for_rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "boutiqueair_underscore_extensions_for_rails"
  s.version     = BoutiqueairUnderscoreExtensionsForRails::VERSION
  s.authors     = ["George Mendoza"]
  s.email       = ["gsmendoza@gmail.com"]
  s.homepage    = "http://www.boutiqueair.com"
  s.summary     = "Boutiqueair Underscore Extensions as Rails asset pipeline gem."
  s.description = "Boutiqueair Underscore Extensions as Rails asset pipeline gem."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.1.6"
  s.add_dependency "underscore-rails"

  s.add_development_dependency 'capybara'
  s.add_development_dependency 'jasmine'
  s.add_development_dependency 'minitest'
  s.add_development_dependency "sqlite3"
end
