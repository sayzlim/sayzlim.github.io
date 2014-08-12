require 'autoprefixer-rails'

# Require any additional compass plugins here.
project_type = :stand_alone

# Publishing paths
http_path = "/"
http_images_path = "/images"
http_generated_images_path = "/images"
http_fonts_path = "/fonts"
css_dir = "public/stylesheets"

# Local development paths
sass_dir = "sass"
images_dir = "source/images"
fonts_dir = "source/fonts"

line_comments = false
output_style = :compressed

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end