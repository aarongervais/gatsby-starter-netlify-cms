const scrollTo = (selector) => {
  const el = document.querySelector(selector)
  const y = el.getBoundingClientRect().top + window.pageYOffset - 72;
  window.scrollTo({top: y, behavior: 'smooth'})
}

export default scrollTo