import './App.css';
import React, {useState} from "react";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App(props) {
    const [modalActive, setModalActive] = useState(false);
    const [data, setData] = useState('');
    const [id, setId] = useState(0);
    let addBook = React.createRef();
    let getBook = React.createRef();

    let btnPut = () => {
        let text = addBook.current.value;
        props.addNewBook(text);
        addBook.current.value = "";
    };

    let btnGet = () => {
        let id = Number(getBook.current.value);
        setId(id);
        getBook.current.value = "";
        setModalActive(true);
        setData(props.getBookById(id));
    };

    return (
        <div className="body">
            <div className="container">
                <h1 className="title__header">My read books</h1>
                <div className="container__item container__item-1">
                    <h3 className="container__item-header">Get book by ID</h3>
                    <input ref={getBook} type="number" className=" input input__get"/>
                    <button  onClick={btnGet} className="btn btn__get">GET</button>
                </div>
                <div className="container__item container__item-2">
                    <h3 className="container__item-header">Add book</h3>
                    <input ref={addBook} type="text" className="input input__put"/>
                    <button onClick={btnPut} className="btn btn__put">PUT</button>
                </div>
            </div>
            <ModalWindow data={data} active={modalActive} setActive={setModalActive} deleteBookById={props.deleteBookById} id={id}/>
        </div>
    );
}

export default App;
