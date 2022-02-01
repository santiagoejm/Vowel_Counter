const text = document.getElementById("text");
const number = document.querySelector(".num");

const textHandler = (e) => {
  let count = 0;

  let phrase = e.target.value;
  phrase.toLowerCase();
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
    }
  });
  number.textContent = count;
};

text.addEventListener("input", textHandler);
