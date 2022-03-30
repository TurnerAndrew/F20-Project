const list = []

module.exports = {

    getList: (req, res) => {
        res.status(200).send(list)
    },

    addItem: (req, res) => {
        list.push(req.body.item)
        res.status(200).send(list)
    }


}