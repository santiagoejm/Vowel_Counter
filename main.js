const text = document.getElementById("text");
const number = document.querySelector(".num");

const textHandler = (e) => {
  let count = 0;

  let phrase = e.target.value.toLowerCase();
  let arr = phrase.split("");
  arr.forEach((char) => {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
      setTimeout(() => {
        number.style.color = "black";
        number.style.fontSize = "2.5vw";
        number.style.backgroundColor = "#e6e6ec";
        number.style.width = "7vw";
        number.style.height = "7vw";
      }, 100);
      number.style.color = "#5bccf6";
      number.style.fontSize = "3.5vw";
      number.style.backgroundColor = "#fcde67";
      number.style.width = "9vw";
      number.style.height = "9vw";
    } else {
      number.style.color = "black";
      number.style.fontSize = "2.5vw";
      number.style.backgroundColor = "#e6e6ec";
      number.style.width = "7vw";
      number.style.height = "7vw";
    }
  });
  if (count > 0) {
    number.textContent = `#${count}`;
  } else {
    number.textContent = "0";
  }
};

text.addEventListener("input", textHandler);
