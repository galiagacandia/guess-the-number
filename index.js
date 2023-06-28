document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');

    let width = 10;
    let squares = [];

    // Generamos el numero aleatorio
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Random number: ' +  randomNumber);

    // Crea el tablero
    function createBoard() {
        for(let i=0; i<width*width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i);
            
            square.classList.add('valid');
            
            grid.appendChild(square);
            squares.push(square);

            square.addEventListener('click', function(e) {
                click(square);
            })
        }

        let total = 0;
        for(let i=0; i<squares.length; i++) {
            

            if(squares[i].classList.contains('valid')) {
                total++;
                squares[i].setAttribute('data', total);
                squares[i].innerHTML = total;
            }
        }
    }

    createBoard();

    // Click
    function click(square) {
        let currentId = square.id;
        if(square.classList.contains('win')){
            console.log("Win");
            return;
        } else {
            let data = square.getAttribute('data');
            console.log(data);
            if (data != 0) {
                square.classList.add('checked');
                if(data == randomNumber) square.classList.add('win');
                if(data == randomNumber-1 || data == randomNumber+1) square.classList.add('burn');
                //if (total )
                return;
            }
        }
        square.classList.add('checked');
    }

});