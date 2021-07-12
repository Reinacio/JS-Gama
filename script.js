const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const listInput = document.querySelector('[data-new-list-input]')

let Lists = []

newListForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(ListName)
    newListInput.value = null
    list.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name}
}
function render() {
    clearElement(listContainer)
    Lists.forEach(function (list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}


