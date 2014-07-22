# Fetch the first image found in page

# Put into your _plugins dir in your Jekyll site
# Usage: Read this in with {{ content | fetch_first_image }}

module RemoveWhiteSpaceFilter
    def remove_whitespace( input )

        # result = input.to_s.gsub!("^ * *$", "")

        # result != nil ? result : result
        return input.to_s.gsub!(/^\s+|\s+$/, "")
    end
end

Liquid::Template.register_filter(RemoveWhiteSpaceFilter)