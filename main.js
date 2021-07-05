const number = document.querySelector(".water-glass__number--js");
const addBtn = document.querySelector(".btn--add--js");
const removeBtn = document.querySelector(".btn--remove--js");

// creating a good date record
const key = new Date().toISOString().slice(0, 10);

const localStorageValue = localStorage.getItem(key);

let counter = 0;

if (localStorageValue) {
  counter = localStorageValue;
  number.innerHTML = counter;
} else {
  localStorage.setItem(key, 0);
}

// add glass of water
addBtn.addEventListener("click", () => {
  counter++;
  number.innerHTML = counter;
  localStorage.setItem(key, counter);
  console.log(`BRAWO! ${number.innerHTML} 🥤 dzisiaj 👏 `);
});

// remove glass of water
removeBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    number.innerHTML = counter;
    localStorage.setItem(key, counter);
    console.log(`Szklanka usunięta.. 🙈 `);
  }
});
