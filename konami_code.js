const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// function init() {
// function keySequince (e){
//   userCode.push(e.which)
//   alert('the key press is ' +e.which)
// }

// Write your JavaScript code inside the init() function

// document.addEventListener('keydown', function () {
// alert('key pressed!')
// })
// }

const alphabet= [65, 66, 67];
let index=0;

function onKeyDownhandler(e) {
  const key = parseInt(e.which);
  if (key === code[index]){
    index++;
    if (index === alphabet.length){
      alert('congrts code correct')
    }
  }
  else {
    index=0;
  }
}

document.addEventListener('keydown', onKeyDownhandler)
//   }
// }
