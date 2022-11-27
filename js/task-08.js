const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(evt) {
  evt.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
  } = evt.target.elements;

  if (email === "" || password === "") {
    alert("You have to fill all fields!");
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);

    evt.target.reset();
  }
}
