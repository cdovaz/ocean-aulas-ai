// Navegação por teclado nos slides
// Seta para a esquerda: página anterior
// Seta para a direita: próxima página

document.addEventListener('keydown', function (event) {
  const tag = document.activeElement.tagName.toLowerCase();
  const isTyping = tag === 'input' || tag === 'textarea' || tag === 'select';

  if (isTyping) return;

  if (event.key === 'ArrowLeft') {
    const prev = document.querySelector('.nav-btn.prev');
    if (prev && prev.href) {
      window.location.href = prev.href;
    }
  }

  if (event.key === 'ArrowRight') {
    const next = document.querySelector('.nav-btn.next');
    if (next && next.href) {
      window.location.href = next.href;
    }
  }
});
