class BooksController < ApplicationController
  before_action :set_book, only: %i[show edit update destroy]
  before_action :require_user_logged_in!

  # GET /books or /books.json
  def index
    # Kaminari
    @books = Book.order(created_at: :desc).page(params[:page]).per(10)
  end

  # GET /books/1 or /books/1.json
  def show; end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit; end

  # POST /books or /books.json
  def create
    @book = Current.user.books.create(book_params)

    # Action Cable
    if @book.save
      data = ApplicationController.render partial: 'books/single_book', locals: { book: @book }
      ActionCable.server.broadcast 'books_channel', data
      redirect_to root_path, notice: 'Book was successfully registered'
    else
      flash[:alert] = 'Something happened while trying to register a Book, try again.'
      render :new
    end
  end

  # PATCH/PUT /books/1 or /books/1.json
  # Make it so that only the user that registered the book can patch it
  def update
    if Current.user.id == @book.user_id
      respond_to do |format|
        if @book.update(book_params)
          format.html { redirect_to root_path, notice: 'Book was successfully updated.' }
          format.json { render :show, status: :ok, location: @book }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @book.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:alert] = 'You are not allowed to edit this book.'
      redirect_to root_path
    end
  end

  # DELETE /books/1 or /books/1.json
  # Make it so that only the user that registered the book can delete it
  def destroy
    if Current.user.id == @book.user_id

      @book.destroy

      respond_to do |format|
        format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      flash[:alert] = 'You are not allowed to delete this book.'
      redirect_to root_path
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def book_params
    params.require(:book).permit(:title, :author_name, :first_publish_year, :cover_edition_key)
  end
end
