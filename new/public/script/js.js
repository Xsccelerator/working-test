
const toDos= [
  'Закончить писать книгу',
  'Вывести собаку на прогулку',
  'Ответить на емейлы',
  'Сделать ченибудь еще',
  'Купить продукты',
  'Еще какое-то задание'
]
  $(document).ready(function(){
    //Подключаем скрипты materialize для работы табов
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    //Вызываем функции отображения в момент загрузки чтобы исправить баг
    //(в момент загрузки табы были пустыми и заполнялись только когда начинал кликать)
    oldTabView()
    newTabView()
    // jsonView()
  });
//Получили JSON и преобразовали его в массив, который пушим старый массив toDos 
// var jsonView = function(){
  $.getJSON('todos.json', function(responseJSON){
   responseJSON.map(function (item){
     return item.description
    //  toDos.push(item.description)
   })
  })
// }









 //////////////////////////////////////////////////
 //Скрываем первый экран, нужно доработать связав результат с Local storage
  $('.btn-center').on('click', function(){
    $('.content').slideUp(700) 
  })
 ////////////////////////////////////////// 
 //Вешаем на Enter событие отправки сообщения в массив toDos 
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
  
//Функция котороая отображает элементы во вкладке Старые
  var oldTabView = function(e){  
    var ulOld = $('.oldTodos').empty()
      toDos.forEach(function(item){
      ulOld.append($(`<li>${item}</li>`))
  })
} 
//Функция котороая отображает элементы во вкладке Новые
var newTabView = function(e){
  var ul = $('.newTodos').empty()
  toDos.forEach(function(item){
    ul.prepend($(`<li>${item}</li>`))
  })
}
///////////////////////////////////////////////
//Получаем все табы
var tab = $('.tab')
//Детектим вкладку на которой совершен клик
 tab.on('click', function(e){
  let par = e.target.dataset.par
  
    if(par === "new" ){
      newTabView()    
    }
    if(par === "old" ){
      oldTabView()
  }
})
