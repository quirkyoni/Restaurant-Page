import './style.css';
import hero from './hero.jpeg'

const content = document.querySelector("content")

const heroImage = document.createElement("img")
heroImage.src = hero;

content.appendChild(heroImage)

console.log('Hello World!')