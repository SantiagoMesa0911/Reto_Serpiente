let canvas = document.getElementById('canvas')
console.log(canvas);
let snake = new Snake()
let apple = new Apple()

let canvasContext = canvas.getContext('2d')

window.onload = () => {
	gameloop()
}

function gameloop() {
	setInterval(show, 1000 / 20)
}

function show() {
	update()
	draw()
}

class Snake {
	constructor(x, y, size) {
		this.x = x,
			this.y = y
		this.size = size
		this.tail = { x: this.x, y: this.y }
		this.rotateX = 0
		this.rotateY = 1

	}
	move() {
		let newRect

		if (this.rotateX == 1) {
			newRect = {
				x: this.tail[this.tail.length - 1].x + this.size,
				y: this.tail[this.tail.length - 1].y
			}
		} else if (this.rotateX == -1) {
			newRect = {
				x: this.tail[this.tail.length - 1].x - this.size,
				y: this.tail[this.tail.length - 1].y
			}
		} else if (this.rotateY == 1) {
			newRect = {
				x: this.tail[this.tail.length - 1].x,
				y: this.tail[this.tail.length - 1].y + this.size
			}
		} else if (this.rotateY == -1) {
			newRect = {
				x: this.tail[this.tail.length - 1].x,
				y: this.tail[this.tail.length - 1].y - this.size
			}
		}
		this.tail.shift()
		this.tail.push(newRect)
	}
}


class Apple{
    constructor(){
        let isTouching
        
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }

            this.size = snake.size
            this.color = "red"

            if (!isTouching) {
                break;
            }
        }
    }
}
/* const snake = new Snake(20,20,20);
let apple = new Apple(); */