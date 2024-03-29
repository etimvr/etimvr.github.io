export const scrollToId = (id) => {
  const element = document.getElementById(id);
  const header = document.getElementById("header");
  if (element) {
    var top = element.getBoundingClientRect().top + window.scrollY;
    if (header) {
      top = top - header.offsetHeight;
    }
    window.scrollTo({
      behavior: "smooth",
      top: top,
    });
  }
};
