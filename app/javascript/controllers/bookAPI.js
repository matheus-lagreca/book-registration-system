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

        let url = `http://openlibrary.org/search.json?q=${event.target.value}&fields=author_name,first_publish_year,title,cover_edition_key&limit=10`;
        $.getJSON(url, (response) => {

          const searchResults = response.docs

          let list = $('#search-list')
          list.empty()


          $.each(searchResults, (i) => {
            const li = $('<li class="li"/>').appendTo(list);

            const div = $('<div class="single-book"/>').appendTo(li)

            $('<img>', {
              id: 'imgId',
              src: `https://covers.openlibrary.org/b/olid/${searchResults[i].cover_edition_key}-M.jpg`,
              class: 'book-image',
              alt: '/images/textImgL.jpg'
            }).appendTo(div)

            $('<h5 class="book-title"/>').text(`${searchResults[i].title}`).appendTo(div)
            $(`<small class="book-author">${searchResults[i].author_name[0]}</>`).appendTo(div)
            $(`<small class="book-first-publish-year">${searchResults[i].first_publish_year}</>`).appendTo(div)

            $(`<button id="btnSubmit" class="btn btn-primary rounded-pill m-1" onclick=${selectBook(searchResults[i])}> Register Book </>`).appendTo(div)

          });
        });

      }, 500);
    });
  }

  function selectBook(book) {
    $('#book_title').val(book.title)
    $('#book_author_name').val(book.author_name)
    $('#book_first_publish_year').val(book.first_publish_year)
    $('#book_cover_edition_key').val(`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`)
  }
})
