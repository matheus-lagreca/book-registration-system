import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "output"]

  connect() { }

  changed() {
    this.outputTarget.textContent = this.inputTarget.value
  }
}
