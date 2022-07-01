import { Controller } from "@hotwired/stimulus"

// html test 
// <br><br>

// <div data-controller='text-input'>
//   <input type="text" data-action='text-input#changed' data-text-input-target="input">
//   <h1 data-text-input-target='input'></h1>  
// </div>

// <br><br>

export default class extends Controller {
  static targets = ["input", "output"]

  connect() {
  }

  changed() {
    this.outputTarget.textContent = this.inputTarget.value
    console.log(this.outputTarget)
  }
}
