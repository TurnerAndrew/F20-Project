//HTML ELEMENTS
const list = document.getElementById('list-display')
const input = document.getElementById('add-input')
const form = document.getElementById('add-form')


//HTML CREATION FUNCTIONS
const createItem = (obj) => {
    let item = document.createElement('span')
    let todo = document.createElement('p')
    let x = document.createElement('button')
    x.textContent = 'X'
    x.id = obj.id
    todo.textContent = obj.item
    item.appendChild(todo)
    item.appendChild(x)
    list.appendChild(item)

    x.addEventListener('click', (e) => {
        axios.delete(`http://localhost:4040/api/list/${e.target.id}`)
        .then(res => res.data.forEach(elem => createItem(elem)))
        clearList()
    })
}

const clearList = () => {
    list.innerHTML = ''
}

//FUNCTIONS
const getList = () => {
    axios.get('http://localhost:4040/api/list').then(res => res.data.forEach(elem => createItem(elem)))
}

const addItem = (todo) => {
    axios.post('http://localhost:4040/api/list', {item: todo}).then(res => res.data.forEach(elem => createItem(elem)))
}

// const deleteItem = (id) => {
//     axios.delete(`http://localhost:4040/api/list/${id}`)
//         .then(res => res.data.forEach(elem => createItem(elem)))
// }

//EVENT LISTENERS
form.addEventListener('submit', (e) => {
    e.preventDefault()
    clearList()
    addItem(input.value)
    input.value = ''
})
