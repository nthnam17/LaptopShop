 const $ = document.querySelector.bind(document);
 const $$ = document.querySelectorAll.bind(document);

 const signUp = $('#sign-up')
 const signUpBtn = $('#signup-btn')
 const signIn = $('#sign-in')
 const signInBtn = $('#signin-btn')
 const backBtn = $$('.auth-form__control-back')
 const modal = $('.modal')
 const closeBtn = $('.auth-form_icon')
 const form = $$('.auth-form')
 const switchBtn1 = $$('.auth-form__auth-switch-btn')
 const Categorys = $$(".category__item");
 const products = $$(".home__container-list");
 const selections = $$(".home-selection");
 const caOpBtns = $$(".category__option-heding");
 const caOpLists = $$(".category__option-inner")
 const app = {

    handleEvents: function() {
        Categorys.forEach((Category,index) => {
            const product = products[index];
            Category.onclick = function ( ) {
              $("li.category__item.item--active").classList.remove("item--active");
              $(".home__container-list.item--active").classList.remove("item--active");
      
              this.classList.add("item--active");
              product.classList.add("item--active");
             }
           
        }),
               
    //Xử lý nút close form sign
      closeBtn.onclick = function() {
        modal.classList.add("disable");
        signIn.classList.remove("active");
        signUp.classList.remove("active");
      },
      //Xử lý nút signin
      signInBtn.onclick = function() {
        modal.classList.remove("disable");
        signIn.classList.add("active");
      },
      //Xử lý nút signup
      signUpBtn.onclick = function() {
        modal.classList.remove("disable");
        signUp.classList.add("active");
      }
      //Xử lý category thẻ con 
       caOpBtns.forEach((caOpBtn,index) => {
          const caOpList = caOpLists[index]
            caOpBtn.onclick = function ( ) {
              caOpList.classList.toggle("active");
            }
            
        })
     },    

     start: function() {
            this.handleEvents()

   
  }
    
 };
 
 app.start()