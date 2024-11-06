const resultTxt = document.querySelector(".resultTxt");
const numbers = document.querySelectorAll(".number");
const slashBtn = document.querySelector(".slashBtn");
const crossBtn = document.querySelector(".crossBtn");
const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const resetBtn = document.querySelector(".resetBtn");
const pointBtn = document.querySelector(".pointBtn");
const operations = document.querySelectorAll(".operation");
const specialChars = ['+', '-', '*', '/', '.'];

function isLastSpecial() {
  const lastChar = resultTxt.innerText.substr(-1);
  return specialChars.includes(lastChar);
}

function handleClick() {
  resultTxt.innerText += this.innerText;
}

for (const number of numbers) {
  number.addEventListener("click", handleClick);
}

function handleReset() {
  resultTxt.innerText = "";
}

document.querySelector(".resetBtn").addEventListener("click", handleReset);

function handleDel() {
  resultTxt.innerText = resultTxt.innerText.substring(
    0,
    resultTxt.innerText.length - 1
  );
}

document.querySelector(".delBtn").addEventListener("click", handleDel);

function handleCalc() {
  try {
    resultTxt.innerText = eval(resultTxt.innerText);
  }
  catch {
    alert('Hesaplama formülünde hata var.');
  }
}

document.querySelector(".equalBtn").addEventListener("click", handleCalc);

function handleCalc() {
  const input = resultTxt.innerText.trim(); 


  if (input === "") {
    return;
  }

  try {
    resultTxt.innerText = eval(input);
  } catch (error) {
    resultTxt.innerText = "Hata!";
  }
}

document.querySelector(".equalBtn").addEventListener("click", handleCalc);

const themeSwitch = document.querySelector(".themeSwitch");

let currentTheme = 1;

themeSwitch.addEventListener("change", function () {
  if (currentTheme === 1) {
    document.body.setAttribute("data-theme", "2");
    currentTheme = 2;
  } else if (currentTheme === 2) {
    document.body.setAttribute("data-theme", "3");
    currentTheme = 3;
  } else {
    document.body.setAttribute("data-theme", "1");
    currentTheme = 1;
  }
});
