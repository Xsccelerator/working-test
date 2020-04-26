
const toDos= [
  'Закончить писать книгу',
  'Вывести собаку на прогулку',
  'Ответить на емейлы',
  'Сделать ченибудь еще',
  'Купить продукты',
  'Еще какое-то задание'
]
  $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    oldTabView()
    newTabView()
  });
 //////////////////////////////////////////////////
  $('.btn-center').on('click', function(){
    $('.content').slideUp(700) 
  })
 ////////////////////////////////////////// 
  
  var textArea = $('.text-area') 
  textArea.on('keypress', function(e){
    
    if(e.code === "Enter"){  
        var text = textArea.val()
        toDos.push(text.toString())
        e.preventDefault() 
          toDos.forEach(function(item){
                textArea.val("")
          })
    }
  })
  

  var oldTabView = function(e){  
    var ulOld = $('.oldTodos').empty()
      toDos.forEach(function(item){
      ulOld.append($(`<li>${item}</li>`))
  })
} 
var newTabView = function(e){
  var ul = $('.newTodos').empty()
  toDos.forEach(function(item){
    ul.prepend($(`<li>${item}</li>`))
  })
}
///////////////////////////////////////////////
var tab = $('.tab')

 tab.on('click', function(e){
  let par = e.target.dataset.par
  console.log(par)
    if(par === "new" ){
      newTabView()    
    }
    if(par === "old" ){
      oldTabView()
  }
})