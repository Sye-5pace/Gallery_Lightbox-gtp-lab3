import gallery from './data.json' 

const mainContent = document.getElementById('gallery-list')
const lightBox = document.getElementById('light-box')
const prevTrigger = document.createElement('button')
const nextTrigger = document.createElement('button')
let imageArr = []
let currentIndex ;

const prevIcon = document.createElement('img')
prevIcon.src="./public/previous.png"
prevIcon.classList.add('w-20','h-20')
prevTrigger.appendChild(prevIcon)

const nextIcon = document.createElement('img')
nextIcon.src="./public/next.png"
nextIcon.classList.add('w-20','h-20')
nextTrigger.appendChild(nextIcon)

document.addEventListener('DOMContentLoaded', ()=> {
  
    gallery.map((item,index)=> {
        const imgSrc = document.createElement('img')
        let thumbnail = item.images.thumbnail;
        imgSrc.src = thumbnail;
        imageArr.push(item)
        imgSrc.addEventListener('click', ()=>{
            lightboxTrigger(index)
        })
        imgSrc.style.cursor ='pointer'
        imgSrc.classList.add('w-[7rem]','h-[10rem]','object-contain','object-cover','rounded', 'shadow-lg', 'm-2', 'hover:opacity-75');

        mainContent.appendChild(imgSrc)
        return mainContent;
    }) 
    
    const lightboxTrigger = (index) =>{
        lightBox.style.display='block'
        lightBox.innerHTML = ``;

        const lightBoxImgMatch =  imageArr[index].images.hero.large
        const boxImgContainer = document.createElement('div')
        const lightBoxImg = document.createElement('img');
        lightBoxImg.src = lightBoxImgMatch;
        lightBoxImg.classList.add('h-[28.75rem]')
        boxImgContainer.appendChild(prevTrigger)
        boxImgContainer.appendChild(lightBoxImg)
        boxImgContainer.appendChild(nextTrigger)
        boxImgContainer.classList.add('border-2','flex','justify-center','gap-4','mt-[10rem]' )
        lightBox.appendChild(boxImgContainer)
        lightBox.classList.add('flex','justify-center','align-center','h-full')

        return lightBox
    }
    

})