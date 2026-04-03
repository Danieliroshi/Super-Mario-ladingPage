const botaoTrailer = document.querySelector('.botao');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector('.fechar-modal');




botaoTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', linkDoVideo);
});

botaoFecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', '');
});

function alternarModal() {
  modal.classList.toggle('aberto');
}


