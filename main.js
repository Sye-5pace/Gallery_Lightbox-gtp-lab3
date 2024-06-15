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
closeIcon.classList.add('mobile:h-4','mobile:w-4', 'h-10','w-10','left-[63rem]','absolute','mobile:left-[23rem]','top-[3rem]','hover:animate-spin')
close.appendChild(closeIcon)

const prevIcon = document.createElement('img')
prevIcon.src = "./public/previous.png"
prevIcon.classList.add('w-16', 'h-16','mobile:h-8','mobile:w-8','hover:animate-bounce')
prevTrigger.appendChild(prevIcon)

const nextIcon = document.createElement('img')
nextIcon.src = "./public/next.png"
nextIcon.classList.add('w-16', 'h-16','mobile:h-8','mobile:w-8','hover:animate-bounce')
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
        const caption = document.createElement('caption')

        caption.textContent = imageArr[index].caption
        caption.classList.add('text-[#fff]','text-[1.5rem]','caption-bottom','font-medium')
        
        lightBoxImg.src = lightBoxImgMatch;
        lightBoxImg.classList.add('w-[20rem]')
        
        const lightBoxGroup = document.createElement('div')
        lightBoxGroup.appendChild(prevTrigger)
        lightBoxGroup.appendChild(lightBoxImg)
        lightBoxGroup.appendChild(nextTrigger)
        lightBoxGroup.classList.add('flex','align-center', 'gap-10','mobile:gap-2','justify-center','h-[28rem]','mobile:h-[24rem]')
        
        boxImgContainer.appendChild(close)
        boxImgContainer.appendChild(lightBoxGroup)
        boxImgContainer.appendChild(caption)
        boxImgContainer.classList.add('flex','flex-col','gap-y-3', 'align-center', 'gap-4', 'mt-[7.5rem]','pb-1'  )
        
        lightBox.appendChild(boxImgContainer)
        lightBox.classList.add('flex', 'justify-center', 'align-center', 'h-full')

        return lightBox
    }

    prevTrigger.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            prevTrigger.disabled
        }
        lightboxTrigger(currentIndex);
    });

    nextTrigger.addEventListener('click', () => {
        if (currentIndex < imageArr.length - 1) {
            currentIndex++;
        } else {
           nextTrigger.disabled
        }
        lightboxTrigger(currentIndex);
    });

    close.addEventListener('click',()=> {
        lightBox.style.display='none'
    })
    
})
