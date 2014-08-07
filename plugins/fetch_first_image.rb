# Fetch the first image found in page

# Put into your _plugins dir in your Jekyll site
# Usage: Read this in with {{ content | fetch_first_image }}

module FetchFirstImageFilter
    def fetch_first_image( input )

        # input.to_s.gsub!("/", "\"")
        first_image = input.match(/<img src=".*(jpg|png)"/)
        first_image = first_image.to_s.match(/http.*(jpg|png)/)
        first_image != nil ? first_image : ""
    end
end

Liquid::Template.register_filter(FetchFirstImageFilter)