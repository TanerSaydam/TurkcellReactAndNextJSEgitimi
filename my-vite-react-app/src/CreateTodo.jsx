function CreateTodo(props) {
    return (
        <>        
            <input required minLength={3} onChange={props.setFunc} value={props.work} />          
            <div className="invalid-feedback">
                Work alanı en az 3 karakter olmalıdır
            </div>
            <button disabled={!props.isValid} onClick={props.save}>Save</button>
        </>
    )
}

export default CreateTodo;