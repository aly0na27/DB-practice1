import file from "./text.txt"

let text = "", state = [];
window.state = state;

await fetch(file).then(r => r.text()).then(t => {
    text = t;
    console.log(t);
    let a = text.split(/\r?\n/);
    console.log(a);
    a.forEach(el => {
        let array = el.split(', ');
        let object = {
            id: array[0],
            name: array[1],
            date: array[2],
            score: array[3]
        }
        state.push(object);
    });
});

export let addNewBook = (text) => {
    let array = text.split(', ');
    let object = {
        name: array[0],
        date: array[1],
        score: array[2]
    }
    let id;
    if (state.length === 0) {
        id = 0;
    } else {
        id = Number(state[state.length - 1].id);
    }

    object = Object.assign({id: (++id).toString()}, object);
    state.push(object);
}

export let getBookById = (id) => {
    for (let book of state) {
        if (id === Number(book.id)) {
            console.log(book);
            return `${book.name} ${book.date} ${book.score}`;
        }
    }
    return "Такой книги нет!";

}
export let deleteBookById = (id) => {
    if (!id) {
        return;
    }
    let i = 0;
    for (let book of state) {
        if (id === Number(book.id)) {
            console.log(book);
            state.splice(i);
        }
        i++;
    }
}

export default state;