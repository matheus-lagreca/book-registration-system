# README
To run the project use docker-compose up

# To do
## User
- [X] Sign-up
- [X] Sign-in
- [X] Authentication
- [X] Email Text Validation  

## Books
- [x] Search books on api
- [x] Register a book from api search
- [x] Show book covers while searching on api
- [x] Save book covers
- [X] Edit a book only if registered by the same user
- [X] Delete a book only if registered by the same user
- [ ] Add Multiple books
- [ ] Show all books by user

## Sockets
- [x] Update page when a new book is registered
- [ ] Update page when a book is edited
- [ ] Update page when a book is delete

## Pagination
- [X] Use pagination with Kaminari

## Customization/fine tuning
- [ ] Add a main page for users that are not signed in
- [ ] Dark mode
- [ ] Custom Color palette  
- [ ] Custom edit page  

## Tests
- [x] User Authentication
- [ ] User Email Validation
- [ ] User Sign-in
- [ ] User Sign-up

- [ ] Book Registration
- [ ] Book Deletion
- [ ] Book Update

- [ ] User Cannot Delete Another User Book
- [ ] User Cannot Update Another User Book

## ~~Features~~ Bugs
* ~~Can't select the correct book~~  
* When a book is added, if a user is in page X, that book will be added to that page  --> (check if user is in first page, push all books forward if user not in first page?)


# What i tried to do
* Use Stimulus-js to work with js instead of Jquery (couldn't find as many examples as jquery)  
* Main page was supposed to have the search to add books. When a book was searched, the contents on the screen would be switched with the search.  
* To register the book the user should have to hover the mouse on the cover and the image would fade and present a register button on top of the image, but i had some issues doing that on jquery.

# dependencies
* Ruby version 7.0.1  
* Rails version 3.0.0

# docs  
Docker: https://docs.docker.com/samples/rails/  
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded  

## RailsGuides  
Action Cable: https://guides.rubyonrails.org/action_cable_overview.html  
Working with Js: https://guides.rubyonrails.org/working_with_javascript_in_rails.html  
Scaffolding: https://guides.rubyonrails.org/v3.2/getting_started.html  
Associations: https://guides.rubyonrails.org/association_basics.html  
Layouts & rendering: https://guides.rubyonrails.org/layouts_and_rendering.html  
Tests: https://guides.rubyonrails.org/testing.html  

## Github  
rack-mini-profile: https://github.com/MiniProfiler/rack-mini-profiler  
importmap: https://github.com/rails/importmap-rails  
