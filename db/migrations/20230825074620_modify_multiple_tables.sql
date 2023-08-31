-- migrate:up
ALTER TABLE users ADD profile_image VARCHAR(500) NULL DEFAULT "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyccrl9eKhoTdKX8jO9sa2Sx-yvz45vFdA0FPBlmEZOw&s"

-- migrate:down

