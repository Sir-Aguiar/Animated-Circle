var pl, vel, dx, dy, px, py, animation, onMoving
        const MAXWIDTH = window.innerWidth
        function toggleMove(){
            if (onMoving === 1){
                Stop()
            } else if (onMoving === 0){
                Gaming()
            }
        }
        function Gaming() {
            px += dx * vel
            pl.style.left = px+"px"
            if (px > MAXWIDTH){
                dx = -1
            }
            if (px < 0){
                px = 0; dx = 1
            }
            animation = requestAnimationFrame(Gaming)
            onMoving = 1
        }
        function Start() {
            vel = 3; dx = 1; dy = 0; px = 0; py = 0;
            pl = document.getElementById("player")
            Gaming()
        }
        function Stop(){
            cancelAnimationFrame(animation)
            onMoving = 0
        }
        function Move() {
            if (!onMoving){
                onMoving = 1
                animation = requestAnimationFrame(Gaming)
            }
        }
        function upSpeed(){
            vel += 3
        }
        function downSpeed(){
            vel -= 3
            if (vel <= 0){
                vel = 1
            }
        }