const contact = () => {

    //Contact Header
    const contactHeader = document.createElement("h1")
    contactHeader.className = "contact-h1"
    contactHeader.textContent = "Contact Us"

    const contactItems = document.createElement("div")
    contactItems.className = "contact-items"

    //Contact One
    const contactOne = document.createElement("div")
    contactOne.className = "contact-one"

    const contactOneHeader = document.createElement("h3")
    contactOneHeader.textContent = "Main Contact"
    contactOne.appendChild(contactOneHeader)


    const contactOneInfo = document.createElement("p")
    contactOneInfo.className = "contact-one-info"
    contactOneInfo.textContent = "(416) 729 - 4166"
    contactOne.appendChild(contactOneInfo)

    contactItems.appendChild(contactOne)

    //Contact Two
    const contactTwo = document.createElement("div")
    contactTwo.className = "contact-two"

    const contactTwoHeader = document.createElement("h3")
    contactTwoHeader.textContent = "Secondary Contact"
    contactTwo.appendChild(contactTwoHeader)

    const contactTwoInfo = document.createElement("p")
    contactTwoInfo.className = "contact-two-info"
    contactTwoInfo.textContent = "(416) 838 - 1147"
    contactTwo.appendChild(contactTwoInfo)

    contactItems.appendChild(contactTwo)

    content.appendChild(contactHeader)
    content.appendChild(contactItems)
}

export { contact }

