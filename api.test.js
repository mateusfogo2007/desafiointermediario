
async function testarConexaoComAPI() {
    try {
        const resposta = await fetch('https://viacep.com.br/ws/01001000/json/');
        if (resposta.status === 200) {
            console.log("Teste Passou: A API conectou com sucesso!");
        } else {
            console.error("Teste Falhou: Erro de conexão.");
        }
    } catch (erro) {
        console.error("Teste Falhou: O sistema quebrou ao tentar conectar.");
    }
}

testarConexaoComAPI();