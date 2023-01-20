function Evento() {
    function MeuEvento() {
        console.log("Ativado!!")
    }
    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick={MeuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento