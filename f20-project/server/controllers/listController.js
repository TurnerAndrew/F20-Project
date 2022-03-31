const list = []
let id = 1

module.exports = {

    getList: (req, res) => {
        res.status(200).send(list)
    },

    addItem: (req, res) => {
        let item = {
            id: id,
            item: req.body.item
        }
        list.push(item)
        id++
        res.status(200).send(list)
    },

    deleteItem: (req, res) => {
        const { id } = req.params
        let indexToDelete = null

        list.forEach((item, index) => {
            if(item.id === +id){
                indexToDelete = index
                return
            }
        })
        list.splice(indexToDelete, 1)
        res.status(200).send(list)
    }


}