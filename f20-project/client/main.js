//HTML ELEMENTS
const list = document.getElementById('list-display')

const createItem = (str) => {
    let item = document.createElement('p')
    item.textContent = str
    list.appendChild(item)
}

const getList = axios.get('/api/list').then(res => res.data.forEach(elem => createItem(elem)))

getList()