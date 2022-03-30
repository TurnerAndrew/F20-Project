//HTML ELEMENTS
const list = document.getElementById('list-display')
const input = document.getElementById('add-input')
const form = document.getElementById('add-form')


//HTML CREATION FUNCTIONS
const createItem = (str) => {
    let item = document.createElement('p')
    item.textContent = str
    list.appendChild(item)
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

//EVENT LISTENERS
form.addEventListener('submit', (e) => {
    e.preventDefault()
    clearList()
    addItem(input.value)
    input.value = ''
})
