document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(document.getElementById("formulario"));
    const jsonData = JSON.stringify(Object.fromEntries(data.entries()))

    fetch("https://formspree.io/f/xanooqr", {
        method: 'POST',
        body: jsonData,
        headers: { "Content-type": "application/json" }

    }).then((res) => {

        if (res.ok) {
            document.getElementById("formulario").reset()
            popUp("Obrigado! Entraremos em contato com você!", "#4CAF50")
        }
        else popUp("Erro ao enviar o formulário, tente novamente!", "#FB350E")

    }).catch(() => popUp("Erro ao enviar o formulário, tente novamente!", "#FB350E"))

})


const popUp = (mensagem, cor) => {
    Toastify({
        text: mensagem,
        duration: 3000,
        gravity: "center",
        position: "center",
        backgroundColor: cor,
    }).showToast();
}
