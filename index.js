// Selectors

const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

// Rockets

/* 
    When a block is clicked, it should go to the top of the stack
    holds current value of flex order at the time of a 'click' event
*/

// let order = 0;
    
/* 
    decrement order: (-) orders will move to the top of the main-axis
    default order is 0 for all blocks
    order is global so when it is clicked it will decrement
    as it decrements, order is then assigned to the style.order of another block 
*/

// const move = (event) => {
//     order--;
//     event.target.style.order = order.toString(); 
// }

/*
    Event Listeners 
*/

// red.addEventListener('click', move);
// blue.addEventListener('click', move);
// green.addEventListener('click', move);
// pink.addEventListener('click', move);
// gray.addEventListener('click', move);


// Travelers

/*
    Event Callbacks
*/

const moveRight = (event) => {
	let marginPX = 10;
    window.setInterval(function() {
        if (marginPX < 300) {
            marginPX++; 
            event.target.style.marginLeft = marginPX + 'px';
        } 
    }, 5);
}

const moveBack = (event) => {
    let marginPX = 300;
	window.setInterval(function() {
        event.stopImmediatePropagation();
		if (marginPX > 10) {
            marginPX--;
			event.target.style.marginLeft = marginPX + 'px';
		} 
	}, 5);
}

/* 
    Add Event Listeners
*/

red.addEventListener('mousedown', moveRight);
blue.addEventListener('mousedown', moveRight);
green.addEventListener('mousedown', moveRight);
pink.addEventListener('mousedown', moveRight);
gray.addEventListener('mousedown', moveRight);

red.addEventListener('mouseup', moveBack);
blue.addEventListener('mouseup', moveBack);
green.addEventListener('mouseup', moveBack);
pink.addEventListener('mouseup', moveBack);
gray.addEventListener('mouseup', moveBack);
