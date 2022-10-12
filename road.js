class Road{

    constructor(x, width, laneCount = 3){
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;

        const topLeft = {x: this.left, y: this.top};
        const topRight = {x: this.right, y: this.top};
        const bottomLeft = {x: this.left, y: this.bottom};
        const bottomRight = {x: this.right, y: this.bottom};

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];
    }

    // Ensure that the car is always at the center of a lane
    getLaneCenter(laneIndex){
        const laneWidth = this.width / this.laneCount;

        return this.left + laneWidth /2 + Math.min(laneIndex, this.laneCount - 1) * laneWidth;

    }

    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for(let i = 1; i <= this.laneCount - 1; i++){
            //get value of x by linear interpolation
            const x = lerp(
                this.left,
                this.right,
                i / this.laneCount //between 0 and 1
            );
            
            
            // Dash = 20px and break of 20px
            ctx.setLineDash([20, 20]);
            

            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        })
    }

}
