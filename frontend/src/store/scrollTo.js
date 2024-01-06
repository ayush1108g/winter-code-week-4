export const scrollToHandler = (id, offset) => {
  const element = document.getElementById(id);
  console.log("element", element);
  if (element) {
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const topPos = element.offsetTop - offset;
    window.scrollTo({
      top: topPos,
      behavior: "smooth",
      block: "start",
    });
  }
};
