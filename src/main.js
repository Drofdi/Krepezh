import './index.html'
import './style.scss'

let categories = document.querySelectorAll('.category__item')

for (let elem of categories){
    elem.addEventListener('mousedown', categoriesLink)
}

function categoriesLink(event){
    let getATeg = this.querySelector('.category__titleLink')
    let aTagLink = getATeg.getAttribute('href')
    if(event.button === 0){
        window.location.href = aTagLink
    } else if (event.button === 1) {
        window.open(aTagLink, '_blank')
    }
}

