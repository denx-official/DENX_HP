function scrollToMovie() {
  let movieElem = document.getElementById('movie');
  const margin = 10;

  window.scrollTo({
    behavior: "smooth",
    top: movieElem.offsetTop - margin
  });
}