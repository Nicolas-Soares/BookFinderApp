const axios = require('axios')
const URL = 'https://www.googleapis.com/books/v1/volumes?q='

module.exports = {
    async getBooks(req, res) {
        const { search } = req.body
        const url = `${URL}${search.replace(/ +/g, '')}&key=AIzaSyDIND63Uyj-oFt1p1efn1EpVjNVMaP2lz0`
        const response = await axios.get(url)
        const filtered = response.data.items.slice(0, 10)

        function CreateItem() {
            return {
                title: null,
                authors: null,
                publishedDate: null,
                imageLink: null,
                previewLink: null
            }
        }

        const itemList = []

        let i = 0

        for (i in filtered) {
            let item = new CreateItem()
            if (!filtered[i].volumeInfo.imageLinks) {
                item.title = filtered[i].volumeInfo.title
                item.authors = filtered[i].volumeInfo.authors
                item.publishedDate = filtered[i].volumeInfo.publishedDate
                item.imageLink = 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif'
                item.previewLink = filtered[i].volumeInfo.previewLink
            } else {
                item.title = filtered[i].volumeInfo.title
                item.authors = filtered[i].volumeInfo.authors
                item.publishedDate = filtered[i].volumeInfo.publishedDate
                item.imageLink = filtered[i].volumeInfo.imageLinks.thumbnail
                item.previewLink = filtered[i].volumeInfo.previewLink
            }

            itemList.push(item)
        }

        return itemList
    }
}
