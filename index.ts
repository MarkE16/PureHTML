window.onload = () => {
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const counter = document.getElementById('counter');

    incrementButton.addEventListener('click', () => {
        counter.innerHTML = (+counter.innerHTML + 1).toString();
    });

    decrementButton.addEventListener('click', () => {
        counter.innerHTML = (+counter.innerHTML - 1).toString();
    });
}