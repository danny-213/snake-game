import {snakeBody} from './snake.js'


export let foodPosition = {x:5, y:15};


// give the food another position besides the ones on snake 

export function update(foodPosition) {
    //get new foodPosition position
    // get a random x,y position on the board 
    
    // board has from 1 to 21 only 
    // Returns a random integer from 1 to 21 (inclusive):
    let randomX = 0;
    let randomY = 0;
    while ((randomX > 21 || randomX < 1) || (randomY > 21 || randomY < 1)) {
        randomX = Math.floor(Math.random() * 21);
        randomY = Math.floor(Math.random() * 21);
    }
    foodPosition.x = randomX;
    foodPosition.y = randomY;

}

export function draw(gameBoard) {
    
    
    const foodElement = document.createElement("div");

    // element created
    foodElement.classList.add("food") ;

    // tell browser where its gonna be using grid rows and columns
    foodElement.style.gridColumnStart = foodPosition.x;
    foodElement.style.gridRowStart = foodPosition.y;
    
    
    // have to appendChild() to the element (not actually added to html doc)
    gameBoard.appendChild(foodElement);


}