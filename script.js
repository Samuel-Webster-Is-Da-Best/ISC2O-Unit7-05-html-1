document.getElementById('button').addEventListener('click', mult)
let neg = 0
let i = 0
let answer = 0

function mult () {
  // reset var and read values
  neg = 0
  i = 0
  answer = 0
  let num1 = parseInt(document.getElementById('inp1').value)
  let num2 = parseInt(document.getElementById('inp2').value)
  // determine if negative
  if (num1 < 0) {
    neg += 1
    num1 = Math.abs(num1)
  }
  if (num2 < 0) {
    neg += 1
    num2 = Math.abs(num2)
  }
  // multiply
  while (i < num2) {
    answer += num1
    i += 1
  }
  if (neg === 1) {
    answer = 0 - answer
  }
  // return answer
  document.getElementById('ans').innerHTML = answer
}
