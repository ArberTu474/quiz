const credentionalsContainer = document.querySelector("[data-credentionals]");
const questionsContainer = document.querySelector("[data-questions-container]");

function alternativesValidation() {
  const al1 = document.querySelector("[data-check1]");
  const al2 = document.querySelector("[data-check2]");
  const al3 = document.querySelector("[data-check3]");
  const al4 = document.querySelector("[data-check4]");
  const al5 = document.querySelector("[data-check5]");

  if (
    al1.checked == true &&
    al2.checked == false &&
    al3.checked == false &&
    al4.checked == true &&
    al5.checked == true
  ) {
    answerHandler("SAKTË!", "block", "correct-container", "correct");
  } else {
    answerHandler(
      "Përgjigja juaj nuk është e skatë!",
      "block",
      "wrong-container",
      "error"
    );
  }
}

function nameValidation() {
  const uname = document.querySelector("[data-uname]");
  const email = document.querySelector("[data-email]");

  if (uname.value.trim() === "") {
    errorHandler("Vendosni emrin", "block", "error-container", "error");
    focusDiv(credentionalsContainer);
  } else if (email.value.trim() === "") {
    errorHandler("Vendosni mbiemrin", "block", "error-container", "error");
    focusDiv(credentionalsContainer);
  } else {
    errorHandler("", "none");
    alternativesValidation();
  }
}

function submit() {
  const confirmationText = "A doni të bëni Submit formularin?";
  if (confirm(confirmationText) == true) {
    nameValidation();
  } else return;
}

function errorHandler(errorText, display, containerStatus, status) {
  const errorP = document.querySelector("[data-error]");
  const errorContainer = document.querySelector("[data-error-container]");

  errorP.textContent = errorText;
  errorP.className = status;
  errorContainer.style.display = display;
  errorContainer.className = containerStatus;
}

function answerHandler(answerText, display, containerStatus, status) {
  const answerP = document.querySelector("[data-correct]");
  const answerContainer = document.querySelector("[data-correct-container]");

  answerP.textContent = answerText;
  answerP.className = status;
  answerContainer.style.display = display;
  answerContainer.className = containerStatus;
}

function focusDiv(focusElement) {
  focusElement.scrollIntoView({ behavior: "smooth" });
}

function reset() {
  location.reload();
}
