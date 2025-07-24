function enviarwhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '553598149559'

    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}
// Modal de imagem
document.querySelectorAll('.projetos-imagem').forEach(imagem => {
    imagem.addEventListener('click', () => {
        const modal = document.getElementById('imagemModal');
        const modalImg = document.getElementById('imagemModalConteudo');
        modal.style.display = "block";
        modalImg.src = imagem.src;
    });
});

document.querySelector('.fechar-modal').addEventListener('click', () => {
    document.getElementById('imagemModal').style.display = "none";
});
