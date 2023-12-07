# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log('anish')
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## project 2  solution

```javascript

const form = document.querySelector('form');
//this usecase below given will give you empty values
//  const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show results
    results.innerHTML = `<span>${bmi}<span>`;
    //results.innerHTML = `<br>`
    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi} : You are Under Weight</span>`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} : You are Normal</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi} : You are Overweight</span>`;
    }
  }
});





```
## project 3 solution
```javascript

const clock = document.getElementById('clock');
// we can also by this method
//const clock = document.querySelector('clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



 ```