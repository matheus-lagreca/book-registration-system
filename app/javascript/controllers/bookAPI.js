window.addEventListener('turbo:load', () => {
  let timeout

  const page = document.getElementById('books-page')
  if (page) {
    const searchInput = document.getElementById('search-bar')
    searchInput.addEventListener('input', (event) => {

      if (searchInput.getAttribute('aria-expanded') === 'false') {
        searchInput.click()
      }

      clearTimeout(timeout)
      timeout = setTimeout(() => {

        $('<button/>').addClass('dropdown-item').attr('type', 'button').text("Loading...").appendTo('#search-list');

        let url = `http://openlibrary.org/search.json?q=${event.target.value}&fields=author_name,first_publish_year,title,cover_edition_key&limit=5`;
        $.getJSON(url, (response) => {

          const searchResults = response.docs

          let list = $('#search-list')
          list.empty()


          $.each(searchResults, (i) => {
            const item = $('<li class="li"/>').appendTo(list);

            const div = $('<div class="single-book"/>').appendTo(item)

            $('<img>', {
              id: 'imgId',
              src: `https://covers.openlibrary.org/b/olid/${searchResults[i].cover_edition_key}-M.jpg`,
              class: 'book-image',
              alt: '/images/textImgL.jpg'
            }).appendTo(div)

            const body = $('<div class="book-body"/>').appendTo(div)

            $('<h5 class="book-title"/>').text(`${searchResults[i].title}`).appendTo(body)
            $(`<small class="book-author">${searchResults[i].author_name[0]}</>`).appendTo(body)
            $(`<small class="book-first-publish-year">${searchResults[i].first_publish_year}</>`).appendTo(body)

            const bottom = $('<div class="book-register"/>').appendTo(div)
            const button = $('<button id="btnSubmit">Select Book</>')
            button.addClass('btn btn-primary rounded-pill m-1').attr('type', 'button')
              .on('click', () => selectBook(searchResults[i])).appendTo(bottom)

            //$(`<button id="btnSubmit" class="btn btn-primary rounded-pill m-1" onclick=${selectBook(searchResults[i])}> Register Book </>`).appendTo(bottom)

          });
        });

      }, 500);
    });
  }

  function selectBook(book) {
    $('#book_title').val(book.title)
    $('#book_author_name').val(book.author_name[0])
    $('#book_first_publish_year').val(book.first_publish_year)
    $('#book_cover_edition_key').val(book.cover_edition_key)
  }
})
