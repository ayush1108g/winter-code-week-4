export const scrollToHandler = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const offset = 50;
    const topPos = element.offsetTop - offset;
    window.scrollTo({
      top: topPos,
      behavior: "smooth",
      block: "start",
    });
  }
};
