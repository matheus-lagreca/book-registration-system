import axios from 'axios'

const openLibraryApi = axios.create({
  baseURL: "http://openlibrary.org/search"
})

const openLibraryCoversApi = axios.create({
  baseURL: "https://covers.openlibrary.org/b/"
})

export {
  openLibraryApi as api,
  openLibraryCoversApi as coverApi
}
