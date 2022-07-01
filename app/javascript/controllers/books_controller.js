import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from "@rails/request.js"
import { api, coverApi } from "../services/api.js"


const API_URL = "http://openlibrary.org/search.json?title="
const API_URL_APPEND = "&fields=title,author_name,first_publish_year,cover_edition_key&limit=10"

// example 
// https://openlibrary.org/search.json?title=the+lord+of+the+rings&fields=title,author_name,first_publish_year,cover_edition_key&limit=10


export default class extends Controller {
  static targets = ["input"]
  // static values = { book: Object, books: Array, title: String, author_name: String, first_publish_year: Number, cover_edition_key: String }

  connect() {
  }

  async search() {
    // // Search the apis based on input value
    //this.outputTarget.textContent = this.inputTarget.value

    var str = this.inputTarget.value;
    var replaced = str.replace(/\s/g, '+');
    //console.log(replaced)

    await api.get(API_URL + replaced + API_URL_APPEND)
      .then((response) => {
        this.booksValueChanged(response.data.docs)
      })
  }

  // need to study more stimulus-js
  booksValueChanged(bookList) {
    this.booksTarget.value = bookList
    this.booksTarget.value.map((results) => {
      console.log(results)
    })
  }

}


