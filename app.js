let boxes = document.querySelectorAll('.box');
let msg = document.querySelector('.showWinner');
let startBtn = document.querySelector('.startBtn')
let resetBtn = document.querySelector('.resetBtn')
let turn = document.querySelector('.turn');
let counterO = document.querySelector('.countO');
let counterX = document.querySelector('.countX');

let countO = 0;
let countX = 0;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let count = 0;
let turnO = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = 'O';
            turn.innerHTML = 'Turn: X'
            box.style.color = '#baf561'
            turnO = false
        }
        else {
            box.innerHTML = 'X';
            turn.innerHTML = 'Turn: O'
            box.style.color = '#C5EBC3';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        // console.log(count);
        if (count === 9) {
            console.log('draw')
        }
    })
});


startBtn.addEventListener('click', () => {
    turnO = true;
    turn.innerText = "First Turn: O"
    count = 0
    for (let box of boxes) {
        box.innerText = '';
        box.disabled = false
        msg.innerHTML = ''
    }
})
resetBtn.addEventListener('click', () => {
    turnO = true;
    turn.innerText = "First Turn: O"
    for (let box of boxes) {
        box.innerText = '';
        box.disabled = false
        msg.innerHTML = ''
    }
    counterO.innerText = 'O winning: 0';
    counterX.innerText = 'X winning: 0'
})


let disabledBtn = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

msg.innerText = '';

showWinner = (wiiner) => {
    msg.innerText = `Contratulation, Winner is ${wiiner}`;
    disabledBtn();
    turn.innerText = ''
};

checkWinner = () => {
    for (const pattern of winPattern) {
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val !== "" && post2Val !== "" && post2Val !== "") {
            if (post1Val === post2Val && post2Val === post3Val) {

                if (post1Val === 'O') {
                    countO++;
                    counterO.innerText = `O winning ${countO}`;
                }
                else {
                    countX++;
                    counterX.innerText = `x winning ${countX}`;
                }
                showWinner(post1Val)

            }
        }
    if (count === 8) {
        if (post1Val !== "" && post2Val !== "" && post2Val !== "") {
            if (post1Val !== post2Val && post2Val !== post3Val) {
                msg.innerText = "Draw";
                turn.innerText = ''
            }
        }
    }
    }
}

