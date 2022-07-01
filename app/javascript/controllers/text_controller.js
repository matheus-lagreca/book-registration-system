import { Controller } from "@hotwired/stimulus"

  // HTML test
  // how to i apply this to the books_controller.js?

  // <br><br>

  // <div data-controller='text' >
  //   <h1 data-text-target='output'></h1>  
  //   <button class='btn btn-primary' data-action='text#clicked'> button</button>
  // </div>  

  // <br><br>

export default class extends Controller {
  static targets = ["output"]
  static values = { number: Number}

  connect() {
    this.numberValueChanged()
  }

  // button clicked
  clicked() { 
    this.numberValue++
  }
  // callback
  numberValueChanged(){
    this.outputTarget.textContent = this.numberValue
  }

}
