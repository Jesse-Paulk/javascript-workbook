'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks () {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece (startStack, endStack) {
  // create movingPiece var to take last item off start stack
  let movingPiece = stacks[startStack].pop();
  // moves movingPiece to endStack
  stacks[endStack].push(movingPiece);
}

function isLegal (startStack, endStack) {
  // declares startIndex and endIndex
  let startIndex = stacks[startStack].length - 1;
  let endIndex = stacks[endStack].length - 1;
  // if else statment to determine if isLegal move
  if (!stacks[startStack][endIndex]) {
    return true;
  } else if (stacks[startStack][startIndex] < stacks[endStack][endIndex]) {
    return true;
  } else {
    return false;
  }
}

function checkForWin () {
  // if else statment saying if 1-4 are on stack b or c you win
  if ((stacks.c.length === 4) || (stacks.b.length === 4)) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi (startStack, endStack) {
  //if move is legal movePiece from start to destination
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }

  checkForWin();
}

function getPrompt () {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
