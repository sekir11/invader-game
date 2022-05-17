

class Enemy extends Agent {
    constructor(canvas) {
        super(
            getRandom(0, canvas.width - 100),
            getRandom(0, canvas.height / 3),
            100,
            100,
            "./img/enemy.gif"
        )
    }

    randomWalk(canvasWidth) {
        if (0 < this.x && canvasWidth - this.width > this.x) {
            const randomNum = Math.floor(Math.random() * 100)
            if (randomNum > 50) {
                this.x++
            } else {
                this.x--
            }
        }
    }

    shoot(enemyBullets) {
        const random = getRandom(0, 1000)
        if (random > 990) {
            enemyBullets.push(new Bullet(this.x, this.y, "enemy"))
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min
}
