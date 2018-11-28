
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest

    answerPTagWithValue.innerHTML = answerPTagWithValue.innerHTML * 2;


})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3

  var circle = document.querySelector('.circle-red')

  if ( circle.offsetWidth < 320){
    circle.style.width = circle.offsetWidth * 2 + "px";
    circle.style.height = circle.offsetHeight* 2 + "px";
  } else {
    circle.style.width = "40px";
    circle.style.height = "40px";
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
     var listInactive = document.querySelectorAll('.inactive')

       listInactive.forEach(function(li){
           li.remove()
       })

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})
