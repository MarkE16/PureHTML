window.onload = function () {
    var incrementButton = document.getElementById('increment');
    var decrementButton = document.getElementById('decrement');
    var counter = document.getElementById('counter');
    incrementButton.addEventListener('click', function () {
        counter.innerHTML = (+counter.innerHTML + 1).toString();
    });
    decrementButton.addEventListener('click', function () {
        counter.innerHTML = (+counter.innerHTML - 1).toString();
    });
};
