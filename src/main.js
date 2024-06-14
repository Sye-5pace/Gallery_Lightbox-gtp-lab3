import gallery from './data.json' 

const mainContent = document.querySelector('main')
let imageArr = []

document.addEventListener('DOMContentLoaded', ()=> {
  
    const displayImages = gallery.map((item,index)=> {
        const imgSrc = document.createElement('img')
        let thumbnail = item.images.thumbnail;
        imgSrc.src = thumbnail;

        imageArr.push()

        

        imgSrc.style.cursor ='pointer'
        mainContent.appendChild(imgSrc)
        console.log(mainContent)
        return mainContent;
    }) 

})