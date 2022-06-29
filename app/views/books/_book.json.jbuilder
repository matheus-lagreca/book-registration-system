json.extract! book, :id, :title, :author_name, :first_publish_year, :cover, :created_at, :updated_at
json.url book_url(book, format: :json)
