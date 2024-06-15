import gallery from './data.json'

const mainContent = document.getElementById('gallery-list')
const lightBox = document.getElementById('light-box')
const prevTrigger = document.createElement('button')
const nextTrigger = document.createElement('button')
const close = document.createElement('button')
let imageArr = []
let currentIndex = 0;

const closeIcon = document.createElement('img');
closeIcon.src="./public/close.png"
closeIcon.classList.add( 'h-10','w-10','left-[63rem]','absolute','hover:animate-spin')
close.appendChild(closeIcon)

const prevIcon = document.createElement('img')
prevIcon.src = "./public/previous.png"
prevIcon.classList.add('w-16', 'h-16')
prevTrigger.appendChild(prevIcon)

const nextIcon = document.createElement('img')
nextIcon.src = "./public/next.png"
nextIcon.classList.add('w-16', 'h-16')
nextTrigger.appendChild(nextIcon)

document.addEventListener('DOMContentLoaded', () => {
    gallery.map((item, index) => {
        const imgSrc = document.createElement('img')
        let thumbnail = item.images.thumbnail;
        imgSrc.src = thumbnail;
        imageArr.push(item)
        imgSrc.addEventListener('click', () => {
            lightboxTrigger(index)
        })
        imgSrc.style.cursor = 'pointer'
        imgSrc.classList.add('w-[7rem]', 'h-[10rem]', 'object-contain', 'object-cover', 'rounded', 'shadow-lg', 'm-2', 'hover:opacity-75','hover:animate-wiggle');

        mainContent.appendChild(imgSrc)
        return mainContent;
    })

    const lightboxTrigger = (index) => {
        currentIndex = index; // Update the current index
        lightBox.style.display = 'block'
        lightBox.innerHTML = ``;

        const lightBoxImgMatch = imageArr[index].images.gallery
        const boxImgContainer = document.createElement('div')
        const lightBoxImg = document.createElement('img');
        lightBoxImg.src = lightBoxImgMatch;
        lightBoxImg.classList.add('w-[20rem]')
        boxImgContainer.appendChild(close)
        const lightBoxGroup = document.createElement('div')
        
        lightBoxGroup.appendChild(prevTrigger)
        lightBoxGroup.appendChild(lightBoxImg)
        lightBoxGroup.appendChild(nextTrigger)
        lightBoxGroup.classList.add('flex','align-center', 'gap-10','justify-center','h-[28rem]')
        boxImgContainer.appendChild(close)
        boxImgContainer.appendChild(lightBoxGroup)
        boxImgContainer.classList.add('flex','flex-col','gap-y-8', 'align-center', 'gap-4', 'mt-[7.5rem]'  )
        lightBox.appendChild(boxImgContainer)
        lightBox.classList.add('flex', 'justify-center', 'align-center', 'h-full')

        return lightBox
    }

    prevTrigger.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imageArr.length - 1; // Loop to the last image
        }
        lightboxTrigger(currentIndex);
    });

    nextTrigger.addEventListener('click', () => {
        if (currentIndex < imageArr.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to the first image
        }
        lightboxTrigger(currentIndex);
    });

    close.addEventListener('click',()=> {
        lightBox.style.display='none'
    })
    
})
