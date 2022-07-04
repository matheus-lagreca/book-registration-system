require 'test_helper'
class BooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
    @book = books(:one)
  end

  # test 'should create book' do
  #   assert_difference('Book.count') do
  #     post books_url,
  #          params: { book:
  #                    { author_name: @book.author_name,
  #                      cover_edition_key: @book.cover_edition_key,
  #                      first_publish_year: @book.first_publish_year,
  #                      title: @book.title } }
  #   end
  #   assert_redirected_to root_path
  # end
end
