// get input return direction for example {x:-1, y:0}

export let currentDirection = {x:0,y:-1}; //by default moving up
let lastDirection = {x:0,y:0}; 

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        
        case "ArrowDown":
            if (lastDirection.y !== 0) break
            currentDirection = {x:0,y:1};
            break
            
        case "ArrowUp":
            if (lastDirection.y !== 0) break
            currentDirection = {x:0,y:-1};
            break
            
        case "ArrowLeft":
            if (lastDirection.x !== 0) break
            
            currentDirection = {x:-1,y:0};
        
            break

        case "ArrowRight":
            if (lastDirection.x !== 0) break
            currentDirection = {x:1,y:0};
            break    
    }
})


export function getDirection() {
    //return new direction when got valid input, otherwise return undefined
    lastDirection = currentDirection;
    
    return currentDirection

}


