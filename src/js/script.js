 "use strict";

 
 
 // Vue アプリケーションを生成する

//submit btn
 const elementSubmitButton = document.getElementsByName("submit");


 var app = new Vue({

  el: '#index',
  data: {
    //商品リスト
    items:[
      {
        title: "雑貨ギフト",
        id:1,
        products:[
          {
            id:1,
            name: "商品名001", 
            itemNumber: 11111 , 
            image: "./dist/img/megane001.jpeg", 
            itemDescription:"ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。"
          },
          {
            id:2,
            name: "商品名002", 
            itemNumber: 22222 , 
            image: "./dist/img/bookcover002.jpeg", 
            itemDescription:"ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。"
          },
        ]
      },
      {
        title: "お花のギフト",
        id:2,
        products:[
          {
            id:1,
            name: "商品名001", 
            itemNumber: 33333 , 
            image: "./dist/img/poppy-6320719_1920.jpg", 
            itemDescription:"ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。"
          },
          {
            id:2,
            name: "商品名002", 
            itemNumber: 44444 , 
            image: "./dist/img/poppy-6320719_1920.jpg", 
            itemDescription:"ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。"
          },
          {
            id:3,
            name: "商品名003", 
            itemNumber: 55555 , 
            image: "./dist/img/poppy-6320719_1920.jpg", 
            itemDescription:"ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入ります。"
          },
        ],
        options:[ "A", "B","C","D","E"]
      },
      
    ],

    // 
    submitButton: false,
    //商品番号入力項目
    inputProductId: "",

    inputProductName: "",

    itemId:"",

    
  },
  methods: {

    btnClicked(e) {


      this.textInput(e);


      this.scrollAnimation(e);


  },

 textInput(e){

  let dataId = e.currentTarget.getAttribute('data-id');
  let itemId = e.currentTarget.getAttribute('data-item');

  let name = e.currentTarget.getAttribute('data-name');


  this.itemId= "",
  this.inputProductId = "";
  this.inputProductName = ""; 

  this.itemId= itemId;
  this.inputProductId = dataId;
  this.inputProductName = name;


 },

 scrollAnimation(e){

  const speed = 500;

  let href = e.currentTarget.getAttribute('href');
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top - $('header').outerHeight();
  
  $('html,body').animate({
    scrollTop: position
  }, speed, "swing");

  return false;

 }




  

   

  },

  watch: {
    submitButton: function(){
      elementSubmitButton[0].disabled = !this.submitButton;
    }
  }

})
 
  
  
  
  window.onload = function(){
    
   

 }



 
 
