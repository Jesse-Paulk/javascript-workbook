'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let toggle = true;

  const WinArr = document.querySelectorAll('[data-cell]'); // WinArr for data-cell

  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        e.target.innerHTML = toggle ? 'X' : 'O';
        toggle = !toggle;
        checkWin();
      } else {
        alert('TAKEN! DUHHHH!');
      }
    });
  });




  function checkWin () {
    // diagonal win
    if (WinArr[4].innerHTML) {
      if ((WinArr[0].innerHTML === WinArr[4].innerHTML) && (WinArr[4].innerHTML === WinArr[8].innerHTML)) {
        alert(WinArr[4].innerHTML + "'s WIN! Clear Board and play AGAIN!");
      }
      if ((WinArr[2].innerHTML === WinArr[4].innerHTML) && (WinArr[4].innerHTML === WinArr[6].innerHTML)) {

        alert(WinArr[4].innerHTML + "'s WIN! Clear Board and play AGAIN!");
      }
    }
    for (let i = 0; i < 9; i ++) { // loop throgh vertical and horizontal options
      if (WinArr[i].innerHTML) { // what letter is in square
        if (((WinArr[i].innerHTML === WinArr[i + 1].innerHTML) && (WinArr[i + 1].innerHTML === WinArr[i + 2].innerHTML)) || // horizontal win
        ((WinArr[i].innerHTML === WinArr[i + 3].innerHTML) && (WinArr[i + 3].innerHTML === WinArr[i + 6].innerHTML))) { // vertical win
          alert(WinArr[i].innerHTML + "'s WIN! Clear Board and play AGAIN!");
        }
      }
    }


}





  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
  });


});
