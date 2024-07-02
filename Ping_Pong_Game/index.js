
// document.addEventListener("DOMContentLoaded", () => {

//     let table = document.getElementById("table")
//     let ball = document.getElementById("ball")
//     let paddle = document.getElementById("paddle")

//     let ballX = 30;
//     let ballY = 30;

//     let dx = 2; // displacement of 2px w.r.t talbe in x direction
//     let dy = 2;

//     ball.style.top = `${ballY}px`
//     ball.style.left = `${ballX}px`

//     setInterval(() => {
//         ballX += dx;
//         ballY += dy;
//         ball.style.left = `${ballX}px`
//         ball.style.top = `${ballY}px`

//         // detect the collision
//         if(ballX < paddle.offsetLeft+ paddle.offsetWidth && 
//             ballY > paddle.offsetTop && ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
//         ) {
//             dx *= -1;
//         }
//         if(ballX > table.offsetWidth-ball.offsetWidth || ballX <= 0) dx *= -1;
//         if(ballY > table.offsetHeight-ball.offsetHeight || ballY <= 0) dy *= -1;


//     }, 15)

//     let paddleY = 0;
//     let dpY = 5;
//     document.addEventListener("keydown", (e) => {
//         // console.log("you pressed key is:", e.keyCode)
//         if(e.keyCode == 38  && paddleY > 0) {
//             // up arrow key
//             paddleY += (-1)*dpY
//         }
//         else if (e.keyCode == 40 && paddleY < table.offsetHeight-paddle.offsetHeight) {
//             // down arrow key
//             paddleY += dpY

//         }
//         paddle.style.top = `${paddleY}px`

//     })


// });



document.addEventListener("DOMContentLoaded", () => {
    let ball = document.getElementById("ball");
    let table = document.getElementById("table");
    let paddle = document.getElementById("paddle");

    let ballX = 30; // initial position of ball
    let ballY = 30;

    ball.style.top = `${ballY}px`
    ball.style.left = `${ballX}px`

    let dx = 5;
    let dy = 5;

    setInterval(() => {
        ballX += dx;
        ballY += dy;
        ball.style.left = `${ballX}px`
        ball.style.top = `${ballY}px`


        // collision of the ball;

        if(ballX < paddle.offsetLeft + paddle.offsetWidth && ballY > paddle.offsetTop && 
            ballY + ball.offsetHeight < paddle.offsetTop+paddle.offsetHeight
        ){
            dx *= -1;
        }

        if(ballX > table.offsetWidth-ball.offsetWidth || ballX < 0) dx *= -1;
        if(ballY > table.offsetHeight-ball.offsetWidth || ballY < 0) dy *= -1;

    }, 25)

    let paddleY = 0;
    let DPY = 5;
    document.addEventListener("keydown", (e) => {
        if(e.keyCode == 38 && paddleY > 0) {
            // up arrow key
            paddleY += (-1)*DPY;
        }
        else if (e.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            // down arrow key
            paddleY += DPY;
        }
        paddle.style.top = `${paddleY}px`
    })

})