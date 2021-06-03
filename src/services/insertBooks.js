const { getBooks } = require('./getBooks')

module.exports = {
    async insertBooks(req, res) {
        const itemList = await getBooks(req, res)
        return res.send(itemList)
    }
}