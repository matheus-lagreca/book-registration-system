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

    const allBooks = $("#all-books")
    allBooks.prepend(data)
    //allBooks.prepend(div)
    // Remove last child from list if over the cap
    if (allBooks[0].children.length > 10) {
      $("#all-books").children().last().remove()
    }
  }
});
