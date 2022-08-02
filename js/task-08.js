const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  let { email, password } = event.target.elements;
  event.preventDefault();
  email = email.value;
  password = password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled!");
  }
  const formData = { email, password };
  console.log(formData);
  event.target.reset();
}
