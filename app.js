const guessNumber = document.querySelector(".guess-number");
const submitButton = document.querySelector(".submit-button");
const hint = document.querySelector(".hint");
const currentMinNumber = document.querySelector(".current-min-number");
const currentMaxNumber = document.querySelector(".current-max-number");
const lotteryNumber = document.querySelector(".lottery-number");
const lotteryButton = document.querySelector(".lottery-button");
let randomInt = getRandomInt(0, 100);
currentMinNumber.textContent = "0";
currentMaxNumber.textContent = "100";
lotteryNumber.textContent = 0;

lotteryButton.addEventListener("click", function () {
  lotteryNumber.textContent = getRandomInt(0, 100);
});

// 輸入最大數跟最小數，計算隨機數
function getRandomInt(min, max) {
  min = Math.ceil(min); // 回傳大於或等於 min 的最小整數
  max = Math.floor(max); // 回傳小於或等於 max 的最大整數

  return Math.floor(Math.random() * (max - min) + min);
  // 先用 random 算出兩數的隨機數，再用 floor 將隨機數去小數點
}

// click 事件處理函數
function handleSubmit() {
  if (Number(guessNumber.value) == randomInt) {
    hint.textContent = "恭喜猜中！";
  } else if (
    Number(guessNumber.value) > randomInt &&
    Number(guessNumber.value) < currentMaxNumber.textContent
  ) {
    hint.textContent = "";
    currentMaxNumber.textContent = guessNumber.value;
  } else if (
    Number(guessNumber.value) < randomInt &&
    Number(guessNumber.value) > currentMinNumber.textContent
  ) {
    hint.textContent = "";
    currentMinNumber.textContent = guessNumber.value;
  } else {
    hint.textContent = "輸入的不符合格式或是不在範圍內";
  }
  guessNumber.value = "";
}

// 綁定 click 事件
submitButton.addEventListener("click", handleSubmit);

// 綁定 keydown 事件
guessNumber.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // 如果按下的是 Enter 鍵
    handleSubmit();
  }
});
