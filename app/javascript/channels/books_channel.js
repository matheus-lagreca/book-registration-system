import consumer from "channels/consumer"

consumer.subscriptions.create("BooksChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Action Cable: User Connected to Books Channel")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    const element = document.getElementById('home-page')

    // change this to render partial

    const item = $('<li class="li"/>')
    const div = $('<div class="single-book"/>').appendTo(item)
    const body = $('<div class="book-body"/>').appendTo(div)

    // cover
    $('<img>', {
      id: 'cover_edition_key_id',
      src: `https://covers.openlibrary.org/b/olid/${data.book.cover_edition_key}-M.jpg`,
      class: 'book-image',
      alt: '/images/textImg.jpg'
    }).appendTo(div)

    // Text
    $('<h5 class="book-title"/>').text(`${data.book.title}`).appendTo(body)
    $(`<small class="book-author">${data.book.author_name[0]}</>`).appendTo(body)
    $(`<small class="book-first-publish-year">${data.book.first_publish_year}</>`).appendTo(body)

    // buttons?


    // prepend to book list in main
    const allBooks = $("#all-books")
    allBooks.prepend(item)



  }
});
