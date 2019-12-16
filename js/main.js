let seed = Math.random();
console.log('Running simulation with seed: ', seed);

let wrapper = document.getElementsByClassName("container")[0];

for (i = 0; i < 10; i++) {
    wrapper.innerHTML += `<div class=box box-easing>${i}</div>`;
}