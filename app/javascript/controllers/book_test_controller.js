import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from "@rails/request.js"
import { api, coverApi } from "../services/api.js"

const API_URL = "http://openlibrary.org/search"

export default class extends Controller {
  static targets = ["title"]
  static values = { url: String, numberBooks: Number, container: Array, number: Number }

  // public
  async connect() {
    this.numberValueChanged()
    this.numberBooksValueChanged()
    this.containerValueChanged()

    console.log(this.urlValue)
    const usguri = (API_URL + ".json?title=the+lord+of+the+rings")
    console.log(usguri)

    await api.get(usguri)
      .then((response) => {
        console.log(response.data.numFound)
        this.numberBooksValue = response.data.numFound
        //this.containerValue = response.data.docs
        response.data.docs.map((item) => {
          this.containerValue.push(item.title)
        })
      })


  }

  get title() {
    return this.titleTarget
  }

  containerValueChanged() {
    this.outputTarget.textContent = this.containerValue
  }

  numberBooksValueChanged() {
    this.outputTarget.textContent = this.numberBooksValue
  }

  click() {
    this.numberValue++
    console.log("bbbb")
  }
  //callback
  numberValueChanged() {
    this.outputTarget.textContent = this.numberValue
  }


  async fetch() {
    console.log("usguri")
    const usguri = (API_URL + ".json?title=the+lord+of+the+rings")
    console.log(usguri)

    await api.get(usguri)
      .then((response) => {
        console.log(response.data.numFound)
        console.log(response.data.docs)

      })
      .catch((console.log("erro")
      ))


    // const request = new FetchRequest("get", API_URL + ".json?title=the+lord+of+the+rings", { responseKind: "json" })
    // const response = await request.perform()
    // if (response.ok) {
    //   const json = await response.json
    //   console.log("aaaa")

    // }

  }

}
