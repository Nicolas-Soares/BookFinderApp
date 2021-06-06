const { getBooks } = require('./getBooks')

async function renderBooks(req, res) {
    try {
        const { search } = req.query
        const itemList = await getBooks(search)

        res.render('info', {
            itemList: itemList,
            title: itemList[0].title,
            authors: itemList[0].authors,
            publishedDate: itemList[0].publishedDate,
            imageLink: itemList[0].imageLink,
            previewLink: itemList[0].previewLink
        })
    } catch (error) {
        res.render('notFound', {
            content: 'No results found...'
        })
    }
}

module.exports = { renderBooks }