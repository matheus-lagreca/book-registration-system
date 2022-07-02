class MainController < ApplicationController
  def index
    # Kaminari
    @books = Book.order(created_at: :desc).page(params[:page]).per(10)
  end
end
