const { getBooks } = require('./getBooks')

async function insertBooks(req, res) {
    const itemList = await getBooks(req, res)
    console.log(itemList)
    res.render('hello', {
        itemList: itemList,
        title: itemList[0].title,
        authors: itemList[0].authors,
        publishedDate: itemList[0].publishedDate,
        imageLink: itemList[0].imageLink,
        previewLink: itemList[0].previewLink
    })
}

module.exports = { insertBooks }