// Access DOM  Elements

const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cardSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

//set the subtotal & tax

let subtotal = 0;
let tax = 0.07;

//grab the menu types

const menuTypes = ['appetizers', 'entrees', 'drinks', 'desserts', 'sides'];

//create menu items; array of objects

const menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread on toast',
        imgUrl: 'https://thumbs.dreamstime.com/z/smoked-salmon-dip-selective-focus-84576595.jpg?ct=jpeg',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'egg rolls',
        desc: 'vietnamese style, vegetarian',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'fried pickles',
        desc: 'pickled spears, hand beer-battered and made fresh to order',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'foie gras',
        desc: 'made by force feeding a goose until it die.....YUMMY!',
        imgUrl: '',
        price: 20.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'hamburger',
        desc: '4 ounce grassfed Wagyu patty, cooked to order',
        imgUrl: '',
        price: 15.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'red beans and rice',
        desc: 'made with andouille and pickled pig\'s feet',
        imgUrl: '',
        price: 14.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'Steak Frites',
        desc: 'grassfed beef, dry aged to perfection, served with shoestrings fries because TikTok',
        imgUrl: '',
        price: 25.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'Rassolnik',
        desc: 'East European pickle soup, made with dill and barley, perfect for hangovers!',
        imgUrl: '',
        price: 13.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'beer',
        desc: 'domestic brews. why would you order this, you clown',
        imgUrl: '',
        price: 5.00,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'whiskey',
        desc: 'my grandpappy makes it.  Hit\'s real good',
        imgUrl: '',
        price: 10.00,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'water',
        desc: 'straight from the world class purifcation systems of Hinds County',
        imgUrl: '',
        price: 0.00,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'sweet tea',
        desc: 'we only have sweet, sorry if you\'re diabetic.',
        imgUrl: '',
        price: 2.99,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'cheesecake',
        desc: 'New York Style, frozen and dethawed in the microwave',
        imgUrl: '',
        price: 9.99,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'chocolate cake',
        desc: 'we outsource our chocalate cakes from McDonalds',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'ice cream',
        desc: 'World class cream... World class ice.... How can one resist?',
        imgUrl: '',
        price: 8.99,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'carrot cake',
        desc: 'This menu item is to show that our business cares about people who\'ve been diagnosed with sociopathy.  It gets better!',
        imgUrl: '',
        price: 99.99,
        qty: 0
    },
    {
        id: 17,
        type: 'sides',
        item: 'mac and cheese',
        desc: 'made with CAVE AGED CHEDDAR',
        imgUrl: '',
        price: 6.99,
        qty: 0
    },
    {
        id: 18,
        type: 'sides',
        item: 'rice',
        desc: 'Just white rice',
        imgUrl: '',
        price: 2.99,
        qty: 0
    },
    {
        id: 19,
        type: 'sides',
        item: 'french fries',
        desc: 'Shoe String french fries.  They\'re shoes string because of a video I saw on TikTok',
        imgUrl: '',
        price: 5.99,
        qty: 0
    },
    {
        id: 20,
        type: 'sides',
        item: 'gravy',
        desc: 'just a pot of gravy!',
        imgUrl: '',
        price: 3.99,
        qty: 0
    }
]

//confirm Button

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
})

//load the menu items

//make Rows

menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')

    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for (let i = 0; i < menuTypes.length; i++) {
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    
}

//grab the appRow

const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

//build cols and cards

menuItems.forEach(item => {
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class= "card-text text-uppercase item-desc">${item.desc}</p>
        </div`
})





