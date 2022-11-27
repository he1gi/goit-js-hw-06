const refs = {
  text: document.querySelector("#text"),
  input: document.querySelector("#font-size-control"),
};

refs.input.addEventListener("input", ({ target }) => {
  const { text } = refs;

  text.style.fontSize = target.value + "px";
});
