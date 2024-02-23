const container = document.querySelector('#container');

const para = document.createElement('p');

para.textContent = "Hey I'm red!";
para.style.color = 'red';

const h3 = document.createElement('h3');

h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const div = document.createElement('div');

div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');

h1.textContent = "I'm in a div";

const p = document.createElement('p');

p.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(p);

container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});