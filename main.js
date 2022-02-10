const credentionalsContainer = document.querySelector("[data-credentionals]");
const questionsContainer = document.querySelector("[data-questions-container]");

const errorP = document.querySelector("[data-error]");
const errorContainer = document.querySelector("[data-error-container]");

const answerP = document.querySelector("[data-correct]");
const answerContainer = document.querySelector("[data-correct-container]");

function submit() {
  const confirmationText = "A doni të bëni Submit formularin?";
  if (confirm(confirmationText) == true) {
    nameValidation();
  } else return;
}

function nameValidation() {
  const uname = document.querySelector("[data-uname]");
  const email = document.querySelector("[data-email]");

  if (uname.value.trim() === "" && email.value.trim() === "") {
    indicatorHandler(
      errorP,
      errorContainer,
      "Vendosni emrin dhe mbiemrin",
      "block",
      "error-container",
      "error",
      credentionalsContainer
    );
  } else if (uname.value.trim() === "") {
    indicatorHandler(
      errorP,
      errorContainer,
      "Vendosni emrin",
      "block",
      "error-container",
      "error",
      credentionalsContainer
    );
  } else if (email.value.trim() === "") {
    indicatorHandler(
      errorP,
      errorContainer,
      "Vendosni mbiemrin",
      "block",
      "error-container",
      "error",
      credentionalsContainer
    );
  } else {
    indicatorHandler(
      errorP,
      errorContainer,
      "",
      "none",
      "error-container",
      "error",
      credentionalsContainer
    );
    alternativesValidation();
  }
}

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
    indicatorHandler(
      answerP,
      answerContainer,
      "SAKTË!",
      "block",
      "correct-container",
      "correct",
      questionsContainer
    );
  } else {
    indicatorHandler(
      answerP,
      answerContainer,
      "Përgjigja juaj nuk është e skatë!",
      "block",
      "wrong-container",
      "error",
      questionsContainer
    );
  }
}

function indicatorHandler(
  targetP,
  targetC,
  indicatorText,
  display,
  containerStatus,
  status,
  focus
) {
  targetP.textContent = indicatorText;
  targetP.className = status;
  targetC.style.display = display;
  targetC.className = containerStatus;
  focusDiv(focus);
}

function focusDiv(focusElement) {
  focusElement.scrollIntoView({ behavior: "smooth" });
}

function reset() {
  location.reload();
}
