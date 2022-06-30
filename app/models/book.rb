class Book < ApplicationRecord
  belongs_to :user

  validates_presence_of :title, message: 'title is required'
  validates_presence_of :author_name, message: 'author_name required'
  validates_presence_of :first_publish_year, message: 'first_publish_year is required'
end
