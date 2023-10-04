const menu = () => {

    //Menu Title
    const hOne = document.createElement("h1")
    hOne.className = "menu"
    hOne.textContent = "Menu"

    const menuItems = document.createElement("div")
    menuItems.className = "menu-items"

    //Appetizer Menu
    const appetizerMenu = document.createElement("div")
    appetizerMenu.className = "appetizer-menu"
    menuItems.appendChild(appetizerMenu)
    const appetizerHeader = document.createElement("h2")
    appetizerHeader.className = "appetizer"
    appetizerHeader.textContent = "Appetizer"
    appetizerMenu.appendChild(appetizerHeader)


    const itemOne = document.createElement("p")
    itemOne.textContent = "Tortilla Chips & Avocado Dip"
    appetizerMenu.appendChild(itemOne)
    const itemTwo = document.createElement("p")
    itemTwo.textContent = "French Fries"
    appetizerMenu.appendChild(itemTwo)
    const itemThree = document.createElement("p")
    itemThree.textContent = "Chicken Wings"
    appetizerMenu.appendChild(itemThree)

    //Dinner Menu
    const dinnerMenu = document.createElement("div")
    dinnerMenu.className = "dinner-menu"
    menuItems.appendChild(dinnerMenu)
    const dinnerHeader = document.createElement("h2")
    dinnerHeader.className = "dinner"
    dinnerHeader.textContent = "Dinner"
    dinnerMenu.appendChild(dinnerHeader)


    const itemFour = document.createElement("p")
    itemFour.textContent = "Sphagetti & Meatballs"
    dinnerMenu.appendChild(itemFour)
    const itemFive = document.createElement("p")
    itemFive.textContent = "Roast Beef Sandwich"
    dinnerMenu.appendChild(itemFive)
    const itemSix = document.createElement("p")
    itemSix.textContent = "Beef Hot Dog"
    dinnerMenu.appendChild(itemSix)

    //Dessert Menu
    const dessertMenu = document.createElement("div")
    dessertMenu.className = "dessert-menu"
    menuItems.appendChild(dessertMenu)
    const dessertHeader = document.createElement("h2")
    dessertHeader.className = "dessert"
    dessertHeader.textContent = "Dessert"
    dessertMenu.appendChild(dessertHeader)


    const itemSeven = document.createElement("p")
    itemSeven.textContent = "Chocolate Cake"
    dessertMenu.appendChild(itemSeven)
    const itemEight = document.createElement("p")
    itemEight.textContent = "Original Cheesecake"
    dessertMenu.appendChild(itemEight)
    const itemNine = document.createElement("p")
    itemNine.textContent = "Chocolate Croissant"
    dessertMenu.appendChild(itemNine)



    content.appendChild(hOne)
    content.appendChild(menuItems)
}

export { menu }
