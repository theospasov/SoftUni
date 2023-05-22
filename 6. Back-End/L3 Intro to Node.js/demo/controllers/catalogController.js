const { html, data } = require("../util")

function catalogPage(reg, res) {
    res.write(html(
        `
        <h1>Catalog</h1>
        <p>Items</p>
        <ul>
            ${data.map(item => `<li>${item.name} - ${item.color}</li>`).join('\n')}
        </ul>
    `, `Catalog Title`
    ))
    res.end()
}

function createPage(req, res) {
    res.write(`
    <h1>Create item</h1>
    <form method="POST" action="/create">
        <label>Name: <input type="text" name="name"></label>
        <label>Color: <select name="select">
                <option value="red">Red</options>
                <option value="green">Green</options>
                <option value="blue">Blue</options>
            </select>
        </label>
        <input type="submit" value="create">
    </form>`)
    res.end()
}

module.exports = {
    catalogPage,
    createPage
}