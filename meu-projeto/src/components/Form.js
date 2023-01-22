function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou!")
    }

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario} action="" method="post">
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <br />
                <div>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form