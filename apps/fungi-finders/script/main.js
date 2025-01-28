const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', () => {
  const isOpened = navToggle.getAttribute('aria-expanded');

  if(isOpened === "false") {
    navToggle.setAttribute('aria-expanded', 'true')
  } else {
    navToggle.setAttribute('aria-expanded', 'false')
  }
})
