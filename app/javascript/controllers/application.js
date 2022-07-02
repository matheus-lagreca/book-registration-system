import { Application } from "@hotwired/stimulus"
import jquery from "jquery"
import "ajax"
import "../controllers/bookAPI"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application
window.$ = jquery
window.jQuery = jquery

export { application }
