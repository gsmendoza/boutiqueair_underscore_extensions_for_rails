$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "boutiqueair_underscore_extensions_for_rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "boutiqueair_underscore_extensions_for_rails"
  s.version     = BoutiqueairUnderscoreExtensionsForRails::VERSION
  s.authors     = ["TODO: Your name"]
  s.email       = ["TODO: Your email"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of BoutiqueairUnderscoreExtensionsForRails."
  s.description = "TODO: Description of BoutiqueairUnderscoreExtensionsForRails."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.1.6"

  s.add_development_dependency "sqlite3"
end
