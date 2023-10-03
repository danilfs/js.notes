const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// const notes = ['deal 1', 'deal 2']

const notes = [{
    title: 'first deal',
    completed: true,
},{
    title: 'second deal',
    completed: true,
}
]

function render () {

        for(let i = 0; i < notes.length ; i++) {
            listElement.insertAdjacentHTML('beforeend',getNotesTemplate(notes[i], i))
        }

        // for ( let note of notes) {
        //     listElement.insertAdjacentHTML('beforeend',getNotesTemplate(note))
        // }

    // listElement.insertAdjacentHTML('beforeend',
//         `<ul id="list">
// <li>
//     <span>${notes[1]}</span>
// </li>
// </ul>`)
    // getNotesTemplate(notes[1]))
    // listElement.insertAdjacentHTML('beforeend',
//         `<ul id="list">
// <li> 
//     <span>${notes[0]}</span>
// </li>
// </ul>`)
    // getNotesTemplate(notes[0]))

}
render()

createBtn.onclick = () => {
    if (inputElement.value.lenght === 0) {
        return
    }

    const newNote = {
        title : inputElement.value ,
        completed : false
    }
    listElement.insertAdjacentHTML('beforeend',

//         `<ul id="list">
//     <li>
//         <span>${inputElement.value}</span>
//     </li>
// </ul>`
        getNotesTemplate(newNote)

    )

    inputElement.value = ''
}

// Не работает почему-то функция getNotesTemplate

function getNotesTemplate(note , index) {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span class = "${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li>`
}



