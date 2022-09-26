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
    }

    // Ensure that the car is always at the center of a lane
    getLaneCenter(laneIndex){
        const laneWidth = this.width / this.laneCount;

        return this.left + laneWidth /2 + Math.min(laneIndex, this.laneCount - 1) * laneWidth;

    }

    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for(let i = 0; i <= this.laneCount; i++){
            //get value of x by linear interpolation
            const x = lerp(
                this.left,
                this.right,
                i / this.laneCount //between 0 and 1
            );
            
            if(i > 0 && i < this.laneCount){
                // Dash = 20px and break of 20px
                ctx.setLineDash([20, 20]);
            }else{
                // For border case
                ctx.setLineDash([]);
            }

            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
    }

}
