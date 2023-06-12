const lotteryNumber = document.querySelector(".lottery-number");
const lotteryButton = document.querySelector(".lottery-button");
const currentMinNumber = document.querySelector(".current-min-number");
const currentMaxNumber = document.querySelector(".current-max-number");
const guessNumber = document.querySelector(".guess-number");
const submitButton = document.querySelector(".submit-button");
const hint = document.querySelector(".hint");
const restartButton = document.querySelector(".restart-button");
let randomNumber = getRandomNumber(0, 100);

function getRandomNumber(min, max) {
  const minNumber = Math.floor(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

lotteryButton.addEventListener("click", function () {
  lotteryNumber.textContent = getRandomNumber(0, 100);
});

function handleSubmit() {
  if (Number(guessNumber.value) === randomNumber) {
    hint.textContent = "恭喜猜中！";
  } else if (
    Number(guessNumber.value) > randomNumber &&
    Number(guessNumber.value) < Number(currentMaxNumber.textContent)
  ) {
    hint.textContent = "";
    currentMaxNumber.textContent = guessNumber.value;
  } else if (
    Number(guessNumber.value) < randomNumber &&
    Number(guessNumber.value) > Number(currentMinNumber.textContent)
  ) {
    hint.textContent = "";
    currentMinNumber.textContent = guessNumber.value;
  } else {
    hint.textContent = "輸入的不符合格式或是不在範圍內";
  }
  guessNumber.value = "";
}

submitButton.addEventListener("click", handleSubmit);

guessNumber.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    handleSubmit();
  }
});

restartButton.addEventListener("click", function () {
  randomNumber = getRandomNumber(0, 100);
  guessNumber.value = "";
  hint.textContent = "";
  currentMinNumber.textContent = "0";
  currentMaxNumber.textContent = "100";
});
