import gallery from './data.json' 

const mainContent = document.getElementById('gallery-list')
let imageArr = []

document.addEventListener('DOMContentLoaded', ()=> {
  
    gallery.map((item,index)=> {
        const imgSrc = document.createElement('img')
        let thumbnail = item.images.thumbnail;
        imgSrc.src = thumbnail;
        imageArr.push(item.images)
        imgSrc.addEventListener('click',()=>{
            lightboxTrigger(item)
        })
        imgSrc.style.cursor ='pointer'
        imgSrc.classList.add('w-[7rem]','h-[10rem]','object-contain','object-cover','rounded', 'shadow-lg', 'm-2', 'hover:opacity-75');

        mainContent.appendChild(imgSrc)
        return mainContent;
    }) 

    const lightboxTrigger = (item) =>{
        const lightBox = document.createElement('div')
        
    }
})