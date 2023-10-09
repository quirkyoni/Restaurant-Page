import hero from './hero.jpeg'

const home = () => {
    // Header 1
    let hOne = document.createElement("h1")
    hOne.textContent = "Webpack Restaurant"

    // Header 2
    let hTwo = document.createElement("h2")
    hTwo.className = "home-header-two"
    hTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium dolorum voluptate, perspiciatis mollitia esse a sequi officiis laborum harum!"

    // Hero Image
    // const heroImage = document.createElement("img")
    // heroImage.src = hero;

    // Header 4
    let hFour = document.createElement("h4")
    hFour.textContent = "Lorem ipsum dolor sit amet."

    content.appendChild(hOne)
    content.appendChild(hTwo)
    // content.appendChild(heroImage)
    content.appendChild(hFour)

    console.log('Hello World!')
}

export { home }