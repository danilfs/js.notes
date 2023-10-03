const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = ['deal 1', 'deal 2']

const render = () => {

        // for(let i = 0; i < notes.length ; i++) {
        //     listElement.insertAdjacentHTML('beforeend',getNotesTemplate(notes[i]))
        // }

        // for (notes of note) {
        //     listElement.insertAdjacentHTML('beforeend',getNotesTemplate(note))
        // }

    listElement.insertAdjacentHTML('beforeend',
//         `<ul id="list">
// <li>
//     <span>${notes[1]}</span>
// </li>
// </ul>`)
    getNotesTemplate(notes[1]))
    listElement.insertAdjacentHTML('beforeend',
//         `<ul id="list">
// <li> 
//     <span>${notes[0]}</span>
// </li>
// </ul>`)
    getNotesTemplate(notes[0]))

}
render()

createBtn.onclick = () => {
    if (inputElement.value.lenght === 0) {
        return
    }
    listElement.insertAdjacentHTML('beforeend',

//         `<ul id="list">
//     <li>
//         <span>${inputElement.value}</span>
//     </li>
// </ul>`
        getNotesTemplate(inputElement.value)

    )

    inputElement.value = ''
}

// Не работает почему-то функция getNotesTemplate

function getNotesTemplate(title) {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${title}</span>
    <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li>`
}