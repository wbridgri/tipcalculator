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
        imgUrl: 'salmonDip.jpg',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'egg rolls',
        desc: 'vietnamese style, vegetarian',
        imgUrl: 'eggrolls.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'fried pickles',
        desc: 'pickled spears, hand beer-battered and made fresh to order',
        imgUrl: 'friedPickles.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'foie gras',
        desc: 'made by force feeding a goose until it die.....YUMMY!',
        imgUrl: 'foieGras.jpg',
        price: 20.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'hamburger',
        desc: '4 ounce grassfed Wagyu patty, cooked to order',
        imgUrl: 'hamburger.jpg',
        price: 15.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'red beans and rice',
        desc: 'made with andouille and pickled pig\'s feet',
        imgUrl: 'redBeansAndRice.jpg',
        price: 14.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'Steak Frites',
        desc: 'grassfed beef, dry aged to perfection, served with shoestrings fries because TikTok',
        imgUrl: 'steakFrites.jpg',
        price: 25.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'Rassolnik',
        desc: 'East European pickle soup, made with dill and barley, perfect for hangovers!',
        imgUrl: 'rassolnik.jpg',
        price: 13.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'beer',
        desc: 'domestic brews. why would you order this, you clown',
        imgUrl: 'beer.jpg',
        price: 5.00,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'whiskey',
        desc: 'my grandpappy makes it.  Hit\'s real good',
        imgUrl: 'whiskey.jpg',
        price: 10.00,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'water',
        desc: 'straight from the world class purifcation systems of Hinds County',
        imgUrl: 'water.jpg',
        price: 0.00,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'sweet tea',
        desc: 'we only have sweet, sorry if you\'re diabetic.',
        imgUrl: 'sweetTea.jpg',
        price: 2.99,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'cheesecake',
        desc: 'New York Style, frozen and dethawed in the microwave',
        imgUrl: 'cheesecake.jpg',
        price: 9.99,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'chocolate cake',
        desc: 'we outsource our chocalate cakes from McDonalds',
        imgUrl: 'chocoCake.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'ice cream',
        desc: 'World class cream... World class ice.... How can one resist?',
        imgUrl: 'iceCream.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'carrot cake',
        desc: 'This menu item is to show that our business cares about people who\'ve been diagnosed with sociopathy.  It gets better!',
        imgUrl: 'satanCake.jpg',
        price: 99.99,
        qty: 0
    },
    {
        id: 17,
        type: 'sides',
        item: 'mac and cheese',
        desc: 'made with CAVE AGED CHEDDAR',
        imgUrl: 'macAndCheese.jpg',
        price: 6.99,
        qty: 0
    },
    {
        id: 18,
        type: 'sides',
        item: 'rice',
        desc: 'Just white rice',
        imgUrl: 'rice.jpg',
        price: 2.99,
        qty: 0
    },
    {
        id: 19,
        type: 'sides',
        item: 'french fries',
        desc: 'Shoe String french fries.  They\'re shoes string because of a video I saw on TikTok',
        imgUrl: 'fries.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 20,
        type: 'sides',
        item: 'gravy',
        desc: 'just a pot of gravy!',
        imgUrl: 'gravy.jpg',
        price: 3.99,
        qty: 0
    }
]

//confirm Button

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    getTotal()
})

//getTotal()
const getTotal = () => {
    const subtotal = parseFloat(cardSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const theSubtotal = document.getElementById('theSubtotal')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)  //ternary operator can be stored to a value whereas if statements cannot be

    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : receiptTip + subtotal + taxTotal

    theSubtotal.innerText = subtotal
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
}

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
    card.classList.add('card', 'h-100')
    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class= "card-text text-uppercase item-desc">${item.desc}</p>
        </div>
        <footer class="card-footer">
            <p class="card-text item-price">$${item.price}</p>
            <div class="buttons-div d-flex justify-content-around">
                <button
                    class="btn btn-danger cart-btn text-capitalize"
                    id="Btn${item.id}"
                    data-id="${item.id}"
                    data-price="${item.price}"
                    data-qty="${item.qty}"
                    data-item="${item.item}"
                    >add to cart</button>
                <div class="qty-div">
                    <button
                        class="btn btn-primary btn-subtract"
                        id="btnSubtract${item.id}"
                        data-id="${item.id}"
                        data-qty="${item.qty}"
                    > - </button> 
                    <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                    <button
                        class="btn btn-primary btn-add"
                        id="btnAdd${item.id}"
                        data-id="${item.id}"
                        data-qty="${item.qty}"
                    > + </button> 
                </div>
            </div>
        </footer>`
            column.appendChild(card)

            //switch (menuItems.type)
            switch(item.type) {
                case 'appetizers': 
                    appRow.appendChild(column)
                    break
                case 'entrees': 
                    entreesRow.appendChild(column)
                    break
                case 'drinks': 
                    drinksRow.appendChild(column)
                    break
                case 'desserts': 
                    dessertsRow.appendChild(column)
                    break
                case 'sides': 
                    sidesRow.appendChild(column)
                    break
                default:
                    console.log('Error')
                    break;
                    
            }
})

//cart buttons
const cartButtons = document.querySelectorAll('.cart-btn')

cartButtons.forEach(button => {
    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))

    button.addEventListener('click', ()=> {
        let qty
        for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].id === id ? qty = menuItems[i].qty : null
        }
        if(button.getAttribute('data-qty') > 0) {
            addItems(price, qty, item, id)
        }
    })
})

//additems()

let receiptArray = []

const addItems = (price, qty, item, id) => {
    let itemObj = {
        id: id, //you can actually just write id, item, qty, price
        item: item,
        qty: qty,
        price: price,
        itemTotal: qty * price
    }

    receiptArray = [...receiptArray, itemObj]

    //makeReceipt
    makeReceipt(itemObj, receipt)

    subtotal += itemObj.itemTotal
    console.log(subtotal.toFixed(2))
    cardSubtotal.innerText = subtotal.toFixed(2)
}

//makeReceipt()
const makeReceipt = (obj, el) => {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-choice', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    receiptQty.innerText = obj.qty
    receiptQty.setAttribute('id', `qty${obj.id}`)

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-subtotal', 'text-center')
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    el.appendChild(tableRow)

}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener('click', () => {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for(let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id === btnId && menuItems[i].qty > 0) {
                menuItems[i].qty -= 1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

btnAdd.forEach(button => {
    button.addEventListener('click', () => {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for(let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id === btnId && menuItems[i].qty < 20 && cartButtons[i].dataset.id == btnId) {
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})











