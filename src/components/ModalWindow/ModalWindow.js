import s from "./ModalWindow.module.css"

function ModalWindow(props) {
    if (!props.active) {
        return;
    }
    let data;
    if (typeof props.data !== "string") {
        data = `name: ${props.data.name} \n\r date: ${props.data.date}`
    } else {
        data = props.data;
    }
    console.log(props.id);
    let deleteBook = () => {
        console.log(props.id);
        props.deleteBookById(props.id);
        props.setActive(false);
    }

    return (
        <div>
            <div className={s.modalWindow}>
                <div>
                    <button className={s.closeModalWindow} onClick={() => props.setActive(false)}>&times;</button>
                    {/*<h1>Модальное окно</h1>*/}
                    <p>
                        {data}
                    </p>
                    <button className={s.btnDelete} onClick={deleteBook}> Delete </button>
                </div>
            </div>
            <div className={s.overlay} onClick={() => props.setActive(false)}></div>
        </div>
    )
}

export default ModalWindow;