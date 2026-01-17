
Where:
- Principal = Amount of money
- Rate = Interest rate per year (%)
- Time = Time in years

---

## Features

- User can enter:
  - Principal
  - Rate
  - Time
- Click on **Calculate** button
- Instantly shows Simple Interest
- Simple and beginner-friendly code

---

## Files Used

- `index.html` – Structure of the page  
- `style.css` – Styling of the page  
- `script.js` – Logic for calculation  

---

## How It Works

1. User enters values in input fields  
2. Clicks on **Calculate**  
3. JavaScript reads the values  
4. Converts them to numbers  
5. Applies formula  
6. Displays result in the page  

---

## JavaScript Logic

```js
let prinicipal = document.getElementById("prinicipal");
let rate = document.getElementById("rate");
let time = document.getElementById("time");
let ans = document.getElementById("ans");

function calculate() {
  let p = Number(prinicipal.value);
  let r = Number(rate.value);
  let t = Number(time.value);
  let ansss = (p * r * t) / 100;
  ans.innerHTML = ansss;
}

