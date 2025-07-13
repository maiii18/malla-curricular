document.querySelectorAll('.materia').forEach(m => {
  m.addEventListener('click', () => {
    const estado = m.getAttribute('data-status');
    const nuevo = estado === 'pendiente' ? 'cursando' : estado === 'cursando' ? 'completa' : 'pendiente';
    m.setAttribute('data-status', nuevo);
  });
});
