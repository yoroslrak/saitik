// Будь ласка, не змінюй код нижче. Він необхідний для правильного налаштування позиціонування елементів :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Код, який потрібно виправити
let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names =[ 'Тарілка', 'Кружка', 'Ракета', 'Марсохід']
for (let i = 0; i < 4; i += 1) {
    item_name_objects[i].innerHTML = item_names[i]
}

let merch_item_descr = document.querySelectorAll('.merch-item-descr')
let item_descr = [ 'Тарілка з принтом Марса. Доступна в червоному та білому кольорах',
'Кружка з принтом Марса. Доступна в червоному та білому кольорах',
'Масштабна модель однієї з ракет Galaxy',
'Масштабна модель марсохода (ми купуємо їх у NASA)']
for (let i = 0; i < 4; i += 1) {
    merch_item_descr[i].innerHTML = item_descr[i]
}

let merch_item_price = document.querySelectorAll('.merch-item-price')
let item_price = ['1000', '1000', '2500', '5000']
for (let i = 0; i < 4; i += 1) {
    merch_item_price[i].innerHTML = item_price[i]
    merch_item_price[i].innerHTML = item_price[i]
}

let price_display = false

let cart_text_element = document.querySelector('.cart-text')
let cart_amount = document.querySelector('.cart-amount')
let cart_amount_value = parseInt(cart_amount.innerHTML, 10)





let add_to_cart_btn = document.querySelectorAll('.add-to-cart-btn')
function add_to_cart() {
    cart_amount_value += 1;
    cart_amount.innerHTML = cart_amount_value;
}


add_to_cart_btn.forEach(button => {
button.addEventListener('click', add_to_cart);
});

let counter=0
let koshikBtn = document.querySelector('.cart-text')

let total = 0
for(let item = 0; item<add_to_cart_btn.length; item++){
    add_to_cart_btn[item].addEventListener('click', function(){

        total+= +item_price[item]
        console.log(total)
        let carttext=document.querySelector('.cart-text')
        counter++
        carttext.innerHTML=counter
    })
}

let navbtns = document.querySelectorAll('.nav-item')
let issum=false
navbtns[4].addEventListener('click',()=>{
    if(issum===false){
        koshikBtn.innerHTML=total
        issum=true
    }
    else{
        koshikBtn.innerHTML='Кошик'
        issum=false

    }
})























// Код, який змінює тему
function change_theme() {
   let header = document.querySelector('header')
   if (current_background == 'url(/uploads/2022/11/bg_space.png)') {
       current_background = 'url(/uploads/2022/11/bg_mars.png)'
   } else {
       current_background = 'url(/uploads/2022/11/bg_space.png)'
   }
   header.style.background = current_background
   header.style.backgroundSize = 'cover'
}
 
let change_theme_button = document.querySelector('.switch-theme-button')
let current_background = 'url(/uploads/2022/11/bg_mars.png)'
change_theme_button.addEventListener('click', change_theme)
 

// Підрахунок вартості квитка
function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = +document.querySelector('.submit-select').value
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)


// Красива кнопка 'Відправити'
function make_transparent() {
    send_btn.style.backgroundColor = 'transparent'
}
 
function make_colorful() {
    send_btn.style.backgroundColor = '#C2AB99'
}

let send_btn = document.querySelector('.submit-btn-send')

send_btn.addEventListener('mouseenter', make_transparent)
send_btn.addEventListener('mouseleave', make_colorful)

// Пасхалка
function easter_egg() {
    let mars1 = document.querySelector('.mars1')
    let mars2 = document.querySelector('.mars2')
    let mars3 = document.querySelector('.mars3')
    let mars4 = document.querySelector('.mars4')
    let mars5 = document.querySelector('.mars5')
    mars1.style.color = '#AD4851'
    mars2.style.color = '#AD4851'
    mars3.style.color = '#AD4851'
    mars4.style.color = '#AD4851'
    mars5.style.color = '#AD4851'
}
 
let mars = document.querySelector('.mars1')
mars.addEventListener('click', easter_egg)
