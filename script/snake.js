import {getDirection, currentDirection} from './input.js'
import {foodPosition, update as updateFood} from'./food.js'


export const SNAKE_SPEED = 5;
const EXPANSION_RATE = 1;
let direction;

export const snakeBody = [
    {x:11, y:11},
    
]


function onSnake (snakeBody,foodPosition) {
    //returns true if any x,y coordinates inside the array is the same 
    // with foodPosition's 
    
    return snakeBody.some(segment => {
        
        return equalPosition(segment,foodPosition)
    })
    
}


function equalPosition(segment,foodPosition) {
    
    return foodPosition.x === segment.x && foodPosition.y === segment.y
}

function expandSnake(amount) {
    
    for (let i = 0; i < amount; i++) {
        snakeBody.push(snakeBody[snakeBody.length -1])
    }
}


export function update() {
    
    direction = getDirection();    
    
    // how the snake move

    // copy and move the 1st position 
    let newPosition = {
        x: snakeBody[0].x + direction.x, 
        y: snakeBody[0].y + direction.y
        }
    

    
    // shift the next segment into the one before it
    for (let i = snakeBody.length - 2; i >= 0; i --) {
        snakeBody[i + 1] = {...snakeBody[i]}; //creat copy of snakebody
        
    }
    snakeBody[0] = newPosition;

    

    // if the snake eat itself
    let headPosition = new Object();
    headPosition.x = snakeBody[0].x;
    headPosition.y = snakeBody[0].y;
    
    let snakeBodyNoHead = snakeBody.slice(1,snakeBody.length);
    
    
    if (snakeBody.length > 2 && onSnake(snakeBodyNoHead,headPosition)) {
        alert("Cắn vào thân :(, thua")
        return
        
    }


    //check if the food been eaten 
    
    if (onSnake(snakeBody, foodPosition)) {
        //expand the snake
        
        expandSnake(EXPANSION_RATE);
        //keep getting new foodPosition until not on snake
        while (onSnake(snakeBody, foodPosition)){
            updateFood(foodPosition);
        }
        
    }

    // if the head (snake's 1st segment) hit the wall (x,y outside range (1,21))
    if (snakeBody[0].x > 21 || snakeBody[0].x < 1 || 
        snakeBody[0].y > 21 || snakeBody[0].y < 1 ) {

            alert("Rắn đâm đầu vào tường, nhấn refresh để chơi lại nhé")
            return
    }
    

}
    


export function draw(gameBoard) {
    

    // draw snakeBody
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");

        // element created
        snakeElement.classList.add("snake") ;

        // tell browser where its gonna be using grid rows and columns
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        

        // have to appendChild() to the element (not actually added to html doc)
        gameBoard.appendChild(snakeElement);
    
    }
    
    )

}