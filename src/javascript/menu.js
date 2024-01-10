import starters from '../images/menu/sariwa.jpg'
import mainCourses from '../images/menu/paksiw.jpg'
import desserts from '../images/menu/icecream.jpg'
import drinks from '../images/menu/tea.jpg'

import sariwa from '../images/foods/sariwa.jpg'
import tokwatbaboy from '../images/foods/tokwat-baboy-.jpg'
import kinilaw from '../images/foods/kinilaw.jpg'
import sinigang from '../images/foods/Sinigang.jpg'
import sisig from '../images/foods/sizzling sisig.jpg'

import adobo from '../images/foods/adobo.jpg'
import karekare from '../images/foods/kare-kare.jpg'
import lechon from '../images/foods/lechon.jpg'
import pancitpalabok from '../images/foods/pancit-palabok.jpg'

import halohalo from '../images/foods/halohalo.jpg'
import bibingka from '../images/foods/bibingka.jpg'
import lecheflan from '../images/foods/leche flan.jpg'
import turon from '../images/foods/turon.jpg'
import puto from '../images/foods/puto.jpg'
import ubehalaya from '../images/foods/ube halaya.jpg'

import sagotgulaman from '../images/foods/sago\'t gulaman.jpg'
import tsokolate from '../images/foods/tsokolate.jpg'
import barako from '../images/foods/barako.png'
import icedtea from '../images/foods/icetea.jpg'
import bukojuice from '../images/foods/buko juice.jpg'
import mangoshake from '../images/foods/mangoshake.jpg'




function food_items(foodName, food_img, food_description){
    this.foodName = foodName;
    this.food_img = food_img;
    this.food_description = food_description;
}


function startersFoods(){
    let list = [];

    let food1 = new food_items('Lumpiang Sariwa', sariwa, 'Fresh spring rolls, veggies, shrimp, & peanut sauce');
    let food2 = new food_items('Tokwa\'t Baboy', tokwatbaboy, 'Crispy tofu & pork with tangy soy-vinegar dip')
    let food3 = new food_items('Kinilaw', kinilaw, 'Filipino ceviche with raw fish, vinegar & spices' )
    let food4 = new food_items('Sinigang', sinigang, 'Sour tamarind-based broth with pork or shrimp & veggies' )
    let food5 = new food_items('Sizzling Sisig', sisig, 'Sizzling chopped pork face with spices & onions');

    list.push(food1,food2,food3,food4, food5);
    return list;
}

function mainCoursersFoods(){
    let list = [];

    let food1 = new food_items('Adobo', adobo, 'Vinegar-soy marinated chicken or pork stew')
    let food2 = new food_items('Kare-Kare', karekare, 'Savory peanut stew with oxtail & vegetables')
    let food3 = new food_items('Lechon Kawali', lechon, 'Crispy pork belly with liver sauce')
    let food4 = new food_items('Pancit Palabok', pancitpalabok, 'Rice noodles with shrimp & flavorful sauces');

    list.push(food1,food2,food3,food4);
    return list;
}

function dessertsFoods(){
    let list = [];

    let food1 = new food_items('Hallo Halo', halohalo, 'Mixed shaved ice, beans, fruits, & ice cream')
    let food2 = new food_items('Bibingka', bibingka, 'Coconut rice cake with cheese & egg.')
    let food3 = new food_items('Leche Flan', lecheflan, 'Caramel custard made with eggs & milk')
    let food4 = new food_items('Turon', turon, 'Fried banana rolls with caramelized sugar')
    let food5 = new food_items('Puto Cheese', puto, 'Steamed rice cakes with cheese topping')
    let food6 = new food_items('Ube Halaya', ubehalaya, 'Sweet creamy dessert from purple yam' )

    list.push(food1,food2,food3,food4, food4, food5, food6);
    return list;
}

function drinksFoods(){
    let list = [];

    let food1 = new food_items('Sago\'t Gulaman', sagotgulaman, 'Tapioca & jelly drink with brown sugar')
    let food2 = new food_items('Tsokolate', tsokolate, 'Rich hot chocolate with local cocoa')
    let food3 = new food_items('Barako Coffee', barako, 'Strong coffee from Liberica beans')
    let food4 = new food_items('Iced Tea', icedtea, ' Refreshing tea served over ice, often sweetened')
    let food5 = new food_items('Buko Juice', bukojuice, 'Fresh coconut water served straight from the coconut')
    let food6 = new food_items('Mango Shake', mangoshake, 'Blended ripe mangoes with milk and ice')

    list.push(food1,food2,food3,food4, food4, food5, food6);
    return list;
}


function category(categoryName, img_src, link, icon = null, food_items = null){
    this.categoryName = categoryName;
    this.img_src = img_src;
    this.link = link;
    this.icon = icon;
    this.food_items = food_items;
}

function listCategory(){
    let list = [];

    let categ1Icon = '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 8.33203C24.3406 8.8053 23.8064 9.43197 23.4434 10.1579C23.0805 10.8839 22.8997 11.6872 22.9167 12.4987C22.8997 13.3101 23.0805 14.1135 23.4434 14.8395C23.8064 15.5654 24.3406 16.1921 25 16.6654M33.3333 8.33203C32.674 8.8053 32.1397 9.43197 31.7768 10.1579C31.4138 10.8839 31.233 11.6872 31.25 12.4987C31.233 13.3101 31.4138 14.1135 31.7768 14.8395C32.1397 15.5654 32.674 16.1921 33.3333 16.6654M16.6667 8.33203C16.0073 8.8053 15.4731 9.43197 15.1101 10.1579C14.7471 10.8839 14.5663 11.6872 14.5833 12.4987C14.5663 13.3101 14.7471 14.1135 15.1101 14.8395C15.4731 15.5654 16.0073 16.1921 16.6667 16.6654M8.33333 22.9154H41.6667C42.2192 22.9154 42.7491 23.1349 43.1398 23.5256C43.5305 23.9163 43.75 24.4462 43.75 24.9987V26.0404C43.75 29.1654 38.5062 37.6508 35.4167 39.582V41.6654C35.4167 42.2179 35.1972 42.7478 34.8065 43.1385C34.4158 43.5292 33.8859 43.7487 33.3333 43.7487H16.6667C16.1141 43.7487 15.5842 43.5292 15.1935 43.1385C14.8028 42.7478 14.5833 42.2179 14.5833 41.6654V39.582C11.0687 37.3862 6.25 29.1654 6.25 26.0404V24.9987C6.25 24.4462 6.46949 23.9163 6.86019 23.5256C7.25089 23.1349 7.7808 22.9154 8.33333 22.9154Z" stroke="#1B1B1B" stroke-opacity="0.95" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    let categ1Foods = startersFoods();

    let categ2Icon = '<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.625 24.3512C35.625 14.1127 29.0494 5.66499 20.625 4.55811V0H16.875V4.55811C8.45062 5.66499 1.875 14.1127 1.875 24.3512V28.7787H35.625V24.3512ZM5.625 24.3512C5.625 15.8084 11.5144 8.855 18.75 8.855C25.9856 8.855 31.875 15.8084 31.875 24.3512H5.625ZM0 30.9925H37.5V35.42H0V30.9925Z" fill="black"/></svg>'
    let categ2Foods = mainCoursersFoods();

    let categ3Icon = '<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.89282e-07 14.6443V12.7157C-8.01205e-05 11.8721 0.215084 11.0387 0.630413 10.2738C1.04574 9.50897 1.65119 8.83124 2.40432 8.28811C3.15745 7.74497 4.04004 7.34958 4.99025 7.12964C5.94045 6.9097 6.93528 6.87054 7.905 7.0149C8.53617 5.13801 9.86221 3.48791 11.6831 2.31347C13.5041 1.13902 15.7211 0.503906 18 0.503906C20.2789 0.503906 22.4959 1.13902 24.3169 2.31347C26.1378 3.48791 27.4638 5.13801 28.095 7.0149C29.0647 6.87054 30.0595 6.9097 31.0098 7.12964C31.96 7.34958 32.8426 7.74497 33.5957 8.28811C34.3488 8.83124 34.9543 9.50897 35.3696 10.2738C35.7849 11.0387 36.0001 11.8721 36 12.7157V14.6443C36.0007 18.514 34.3047 22.2426 31.2485 25.0908C28.1923 27.9391 23.999 29.6989 19.5 30.0214V33.9299H16.5V30.0214C12.001 29.6989 7.80769 27.9391 4.75148 25.0908C1.69526 22.2426 -0.000654156 18.514 1.89282e-07 14.6443ZM13.458 13.356H22.542C22.4086 12.3371 22.594 11.3061 23.079 10.3689C23.564 9.43171 24.3313 8.622 25.302 8.02289C24.9134 6.61315 23.981 5.35712 22.6557 4.45827C21.3305 3.55942 19.69 3.07039 18 3.07039C16.31 3.07039 14.6695 3.55942 13.3443 4.45827C12.019 5.35712 11.0866 6.61315 10.698 8.02289C11.6692 8.62222 12.4367 9.43235 12.9218 10.3701C13.4068 11.3078 13.5919 12.3393 13.458 13.3586V13.356ZM10.041 13.356C10.1522 12.9327 10.151 12.4934 10.0373 12.0706C9.92358 11.6478 9.70038 11.2523 9.38419 10.9134C9.06801 10.5746 8.66694 10.301 8.2107 10.113C7.75446 9.92506 7.25472 9.82745 6.7485 9.82745C6.24228 9.82745 5.74255 9.92506 5.2863 10.113C4.83006 10.301 4.42899 10.5746 4.11281 10.9134C3.79662 11.2523 3.57342 11.6478 3.45972 12.0706C3.34603 12.4934 3.34476 12.9327 3.456 13.356H10.041ZM25.959 13.356H32.541C32.6522 12.9327 32.651 12.4934 32.5373 12.0706C32.4236 11.6478 32.2004 11.2523 31.8842 10.9134C31.568 10.5746 31.1669 10.301 30.7107 10.113C30.2545 9.92506 29.7547 9.82745 29.2485 9.82745C28.7423 9.82745 28.2425 9.92506 27.7863 10.113C27.3301 10.301 26.929 10.5746 26.6128 10.9134C26.2966 11.2523 26.0734 11.6478 25.9597 12.0706C25.846 12.4934 25.8448 12.9327 25.956 13.356H25.959ZM18 27.5014C21.7191 27.5014 25.3055 26.3171 28.0634 24.1785C30.8212 22.0398 32.5538 19.0993 32.925 15.9274H3.075C3.44616 19.0993 5.17878 22.0398 7.93665 24.1785C10.6945 26.3171 14.2809 27.5014 18 27.5014ZM12 33.9325H24C24.3978 33.9325 24.7794 34.0679 25.0607 34.3091C25.342 34.5502 25.5 34.8772 25.5 35.2182C25.5 35.5592 25.342 35.8862 25.0607 36.1273C24.7794 36.3684 24.3978 36.5039 24 36.5039H12C11.6022 36.5039 11.2206 36.3684 10.9393 36.1273C10.658 35.8862 10.5 35.5592 10.5 35.2182C10.5 34.8772 10.658 34.5502 10.9393 34.3091C11.2206 34.0679 11.6022 33.9325 12 33.9325Z" fill="black"/></svg>'
    let categ3Foods = dessertsFoods();

    let categ4Icon = '<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.38889 3.27273H8.66567L10.9323 8.18182H0.5V11.4545H4.50067L6.06278 34.4602C6.09119 34.8767 6.30216 35.268 6.65255 35.5542C7.00295 35.8404 7.4663 35.9999 7.94789 36H27.0521C27.5337 35.9999 27.9971 35.8404 28.3474 35.5542C28.6978 35.268 28.9088 34.8767 28.9372 34.4602L30.4993 11.4545H34.5V8.18182H15.001L11.2232 0H2.38889V3.27273ZM8.62222 16.4045L8.28222 11.4545H26.714L26.1624 19.5824C21.8048 19.3958 20.186 18.8051 18.1989 18.1162C16.1362 17.4027 13.6656 16.5845 8.61844 16.4045M8.83944 19.6904C13.1914 19.8769 14.831 20.4758 16.8162 21.1631C18.8184 21.8569 21.1909 22.644 25.9396 22.8502L25.269 32.7273H9.72911L8.83944 19.6904Z" fill="black"/></svg>'
    let categ4Foods = drinksFoods();
    
    let categ1 = new category('STARTERS & SOUPS', starters, '#starters', categ1Icon, categ1Foods);
    let categ2 = new category('MAIN COURSERS', mainCourses, '#main-courses', categ2Icon, categ2Foods);
    let categ3 = new category('DESSERTS', desserts, '#desserts', categ3Icon, categ3Foods);
    let categ4 = new category('DRINKS', drinks, '#drinks', categ4Icon, categ4Foods);


    list.push(categ1, categ2, categ3, categ4);
    return list;
}

function makeFoodContainer(items){
    const foods = document.createElement('ul');
    foods.classList.add('foods');

    items.forEach(item =>{
        const li = document.createElement('li');
        li.classList.add('hidden');

        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container');

        const menuFoodName = document.createElement('div');
        menuFoodName.classList.add("menu-food-name");
        menuFoodName.textContent = item.foodName;

        const menuFoodPrice = document.createElement('div');
        menuFoodPrice.classList.add('menu-food-price');
        menuFoodPrice.textContent = '\u20B1XX.XX';

        nameContainer.appendChild(menuFoodName);
        nameContainer.appendChild(menuFoodPrice);

        const menuFoodImageContainer = document.createElement('div');
        menuFoodImageContainer.classList.add('menu-food-image-container');

        const img = document.createElement('img');
        img.classList.add('menu-food-image')
        img.src = item.food_img;

        menuFoodImageContainer.appendChild(img);

        const menuFoodDescription = document.createElement('div');
        menuFoodDescription.classList.add('menu-food-description')
        menuFoodDescription.textContent = item.food_description;

        li.appendChild(nameContainer);
        li.appendChild(menuFoodImageContainer);
        li.appendChild(menuFoodDescription);

        foods.appendChild(li);
    })

    return foods;
}

function makeAllFoodsContainer(menuOpen){
    let categList = listCategory();

    categList.forEach(category =>{
    let categoryId = category.link.substring(1);
    const divCateg = document.createElement('div');
    divCateg.setAttribute('id', categoryId);
    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menu-icon');
    menuIcon.innerHTML = category.icon;
    divCateg.appendChild(menuIcon);
    divCateg.appendChild(makeFoodContainer(category.food_items))
    menuOpen.appendChild(divCateg);
    })
}


function categoryContainer(){
    const categoryList = listCategory();

    const categoryContainer = document.createElement('ul')
    categoryContainer.classList.add("category-container")

    categoryList.forEach(category =>{
        const li = document.createElement('li');
        li.classList.add('hidden');

        const categoryImageContainer = document.createElement('div')
        categoryImageContainer.classList.add('category-image-container');
        const img = document.createElement('img');
        img.src = category.img_src;

        categoryImageContainer.appendChild(img);
        

        const categName = document.createElement('div');
        categName.textContent = category.categoryName;

        const readMore = document.createElement('a');
        readMore.setAttribute('href', category.link);
        readMore.classList.add('readMore')
        readMore.textContent = 'Read More';

        li.appendChild(categoryImageContainer);
        li.appendChild(categName)
        li.appendChild(readMore);

        categoryContainer.appendChild(li);
    })

    return categoryContainer
}



export function menuContainer(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container")
    menuContainer.setAttribute('id', 'menu');
    const menuBg = document.createElement('div');
    menuBg.setAttribute('id', 'menu-bg');

    const viewMenu = document.createElement('div');
    viewMenu.setAttribute('id', 'viewMenu')

    const menuText = document.createElement('div')
    menuText.textContent = "MENU";
    menuText.classList.add('hidden');
    viewMenu.appendChild(menuText);


    const menuOpen = document.createElement('div');
    menuOpen.classList.add('menuOpen');

    const back = document.createElement('div')
    back.classList.add('back')

    const div1 = document.createElement('div');
    div1.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.99994 9.99997L3.29294 10.707L2.58594 9.99997L3.29294 9.29297L3.99994 9.99997ZM20.9999 18C20.9999 18.2652 20.8946 18.5195 20.707 18.7071C20.5195 18.8946 20.2652 19 19.9999 19C19.7347 19 19.4804 18.8946 19.2928 18.7071C19.1053 18.5195 18.9999 18.2652 18.9999 18H20.9999ZM8.29294 15.707L3.29294 10.707L4.70694 9.29297L9.70694 14.293L8.29294 15.707ZM3.29294 9.29297L8.29294 4.29297L9.70694 5.70697L4.70694 10.707L3.29294 9.29297ZM3.99994 8.99997H13.9999V11H3.99994V8.99997ZM20.9999 16V18H18.9999V16H20.9999ZM13.9999 8.99997C15.8565 8.99997 17.6369 9.73747 18.9497 11.0502C20.2624 12.363 20.9999 14.1435 20.9999 16H18.9999C18.9999 14.6739 18.4732 13.4021 17.5355 12.4644C16.5978 11.5268 15.326 11 13.9999 11V8.99997Z" fill="#666666"/></svg>'

    const div2 = document.createElement('div');
    div2.textContent = 'Back';

    back.appendChild(div1);
    back.appendChild(div2);
    menuOpen.appendChild(back);
    makeAllFoodsContainer(menuOpen);


    menuContainer.appendChild(menuBg);
    menuContainer.appendChild(viewMenu);
    menuContainer.appendChild(categoryContainer());
    menuContainer.appendChild(menuOpen)
    return menuContainer;
}

