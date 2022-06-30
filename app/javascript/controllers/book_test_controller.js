import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from "@rails/request.js"
import { api, coverApi } from "../services/api.js"

const API_URL = "http://openlibrary.org/search"

//   <div data-controller="books" data-books-numberBooks-value=0>
//     <h1 data-books-container-value="<%= %>"> </h1>

//    <h1 data-books-target='output'></h1>
//     <button data-action='books#click'>clickme</button>
//       <button data-action='books#fetch'>fetch</button>
//     
//  </div> 
// </div> 

// <br><br>

//   <div data-controller="">
//      
//   </div>



// <br><br>

// <div data-controller="text-input">
//   <input type="text" data-action="text-input#changed" data-text-input-target="input">
//   <h1 data-text-input-target='output'></h1>

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
