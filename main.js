document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')

  answerPTagWithValue.innerHTML = answerPTagWithValue.innerHTML * 2 ;
  // you do the rest
})



document.querySelector("#blow-up button").addEventListener('click',function(){

  var circle = document.querySelector('.circle-red')

   if(circle.offsetWidth < 320){
     circle.style.width = circle.offsetWidth * 2 + "px";
     circle.style.height = circle.offsetHeight * 2 + "px";
   } else {
    circle.style.width = "40px";
    circle.style.height = "40px";
   }
})
  // TASK #3

document.querySelector("#remove button").addEventListener('click',function(){

    var listInactive = document.querySelectorAll('.inactive')

      listInactive.forEach(function(li){
          li.remove()
      })
    })
       // TASK #4

document.querySelector("#reverse-squares button").addEventListener('click',function(){

    var array = [];

    var mainBox = document.querySelector('#squares-box');

    var span = document.querySelectorAll('.square');

    span.forEach(function(element){
        array.push(element);
        element.remove();
    });

    array.reverse().forEach(function(element){
        mainBox.appendChild(element);
    });
  })
  // TASK #5

document.querySelector("#pig-latin button").addEventListener('click',function(){

    // var containerUl = document.querySelector('#tasks');
    var list = document.querySelectorAll('#tasks li');


    list.forEach(function(li){
      var text = li.innerHTML;
      var textReverse = text.split("").reverse().join("");
      li.innerHTML = textReverse;

    })
  })
     // TASK #6
document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})
