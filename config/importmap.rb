# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin '@hotwired/turbo-rails', to: 'turbo.min.js', preload: true
pin '@hotwired/stimulus', to: 'stimulus.min.js', preload: true
pin '@hotwired/stimulus-loading', to: 'stimulus-loading.js', preload: true
pin_all_from 'app/javascript/controllers', under: 'controllers'
pin 'axios', to: 'https://ga.jspm.io/npm:axios@0.27.2/index.js'
pin '#lib/adapters/http.js', to: 'https://ga.jspm.io/npm:axios@0.27.2/lib/adapters/xhr.js'
pin '#lib/defaults/env/FormData.js', to: 'https://ga.jspm.io/npm:axios@0.27.2/lib/helpers/null.js'
pin 'buffer', to: 'https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.24/nodelibs/browser/buffer.js'
pin "@rails/request.js", to: "https://ga.jspm.io/npm:@rails/request.js@0.0.6/src/index.js"
pin "@rails/actioncable", to: "actioncable.esm.js"
pin_all_from "app/javascript/channels", under: "channels"
pin "jquery", to: "https://ga.jspm.io/npm:jquery@3.6.0/dist/jquery.js"
pin "ajax", to: "https://ga.jspm.io/npm:ajax@0.0.4/lib/ajax.js"
pin "underscore", to: "https://ga.jspm.io/npm:underscore@1.13.4/underscore-umd-min.js"
