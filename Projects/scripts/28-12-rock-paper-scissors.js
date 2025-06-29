let score = JSON.parse(localStorage.getItem('score')) || 
    {
      wins: 0,
      losses: 0,
      ties: 0
      };

    updateScoreElement();

    // if(!score){ //score === null , you can also use this
    //   score = {
    //     wins: 0,
    //     losses: 0,
    //     ties: 0
    //   };
    // }

    //start - this is a separate function for autoPlay button
    let isAutoPlaying = false;
    let intervalId; //we are writing it here so that the IntervalID remains same when it is running
    //if we declare it inside function's if loop then it will keep changing

    function autoPlay(){
      if(!isAutoPlaying){
       intervalId = setInterval(() => { //when passing a function to another function it is recommended to use arrow function , earlier it was written as setInterval(function(){....})
       const playerMove = pickComputerMove();
       playGame(playerMove);
       }, 1000);
       isAutoPlaying = true;
      } else{
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
      
    }
    //end

    document.querySelector('.js-rock-button') //added it from advanced function part 2
     .addEventListener('click' , () => {
     playGame('rock');
     });

    document.querySelector('.js-paper-button') //added it from advanced function part 2
     .addEventListener('click' , () => {
     playGame('paper');
     });

    document.querySelector('.js-scissors-button') //added it from advanced function part 2
     .addEventListener('click' , () => {
     playGame('scissors');
     });
    
     //adding eventListener to play game with keywords only 
    document.body.addEventListener('keydown', (event) => {
      if(event.key === 'r'){ //event.key tells which key was pressed on keyboard and keydown is the event here , event.code returns the physical keycode
        playGame('rock');
      } else if(event.key === 'p'){
        playGame('paper');
      } else if(event.key === 's'){
        playGame('scissors');
      }
    });

    function playGame(playerMove){
      const computerMove = pickComputerMove();
        let result = '';
      if (playerMove == 'scissors'){
        if(computerMove === 'scissors'){
          result = 'Tie.'
        }else if (computerMove === 'rock'){
          result = 'You lose.';
        }else if(computerMove === 'paper'){
          result = 'You win.';
        }
      }

      else if(playerMove == 'paper'){
          if(computerMove === 'paper'){
            result = 'Tie.'
          }else if (computerMove === 'scissors'){
            result = 'You lose.';
          }else if(computerMove === 'rock'){
            result = 'You win.';
          }
      }
      
      else if(playerMove == 'rock'){
          if(computerMove === 'rock'){
            result = 'Tie.'
          }else if (computerMove === 'paper'){
            result = 'You lose.';
          }else if(computerMove === 'scissors'){
            result = 'You win.';
          }
      }

      if(result === 'You win.'){
        score.wins += 1;
      }
      else if(result === 'You lose.'){
        score.losses += 1;
      }
      else if(result === 'Tie.'){
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML = result;
      
      document.querySelector('.js-moves')
        .innerHTML = ` You
       <img src="images/${playerMove}-emoji.png" class="move-icon">
       <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
    } 
    
      function updateScoreElement(){
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

    function pickComputerMove(){
      let computerMove = '';
      const randomNumber = Math.random();
      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      } else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }
      return computerMove;
    }