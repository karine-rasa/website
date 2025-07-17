

const boxes = document.querySelectorAll('.ghost-writing-box');
const modal = document.getElementById('modal');
const modalTitle = document.querySelector('.modal-main-title');
const modalType = document.querySelector('.modal-box-type');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal-content');
const modalText = document.querySelector('.modal-head');


boxes.forEach(box => {
    console.log('HELLO', box);
    box.addEventListener('click', () => {
        const boxtitle = box.querySelector('.box-main-title').innerText;
        const boxtype = box.querySelector('.box-type').innerText;
        const boxgenre = box.querySelector('.box-genre').innerText;
        const boxContentIntro = box.querySelector('.box-text-intro');
        const boxContentText = box.querySelector('.box-text-content');
        const boxContentText_2 = box.querySelector('.box-text-content-2');
        const boxTextColor = getComputedStyle(box).color;
        const workButton = document.querySelector('.workbutton');
        const workButton_2 = document.querySelector('.workbutton-2');
        const boxContent = document.querySelector('.box-content');
        const fontFam = box.querySelector('.box-text-font');
        const link = box.querySelector('.link');
        const access = document.querySelector('.access');
        const accessLink = document.querySelector('.access-link');
        const close = document.querySelector('.ph-x');

        modalTitle.innerHTML = boxtitle;
        modalType.innerText = boxgenre;
        boxContent.innerText = boxContentIntro.innerText;
        workButton.style.display = 'flex';
        
        
        if (box.classList.contains('fr')) {
            workButton.innerText = 'Lire';  
            workButton_2.style.display = 'none';
            access.style.display = 'none';  
        } else if (box.classList.contains('box-6')) {
            workButton.innerText = 'Germinal';
            workButton_2.style.display = 'flex';
            access.style.display = 'none';
            
        } else {
            workButton.innerText = 'Read';
            workButton_2.style.display = 'none';
            access.style.display = 'none';
            modalText.style.color = boxTextColor;
            boxContent.style.color = boxTextColor;
            close.style.color = boxTextColor;
        }

        if(workButton.innerText === 'Germinal') {
            workButton.style.color = "blue";
            workButton.addEventListener('click', () => {  
                modalContent.style.width = '1200px';
                modalContent.style.height = '75vh';
                access.style.display = 'none';
             });
        } else {
            workButton.addEventListener('click', () => {  
                
                modalContent.style.width = '550px';
                modalContent.style.height = '500px';
             });
        }
        
        modalContent.style.width = '550px';
        modalContent.style.height = '500px';
        
        workButton.addEventListener('click', () => {  
            modalTitle.innerHTML = boxtitle;
            modalType.innerHTML = boxgenre;      
            boxContent.innerText = boxContentText.innerText;
            modal.style.display = 'flex';
            modalContent.scrollTop = 0;
            workButton.style.display = 'none';
            workButton_2.style.display = 'none';
            boxContent.style.fontFamily = fontFam.innerText;
            
            if(workButton.innerText === 'Germinal') {
           
                access.style.display = 'none';
             
            } else {
         
              access.style.display = 'flex';
            accessLink.href = link.innerText;
           
        }
        });


        workButton_2.addEventListener('click', () => {  
            modalTitle.innerHTML = boxtitle;
            modalType.innerHTML = boxtype;      
            boxContent.innerText = boxContentText_2.innerText;
            modal.style.display = 'flex';
            modalContent.scrollTop = 0;
            workButton.style.display = 'none';
            workButton_2.style.display = 'none';
            boxContent.style.fontFamily = fontFam.innerText;
            access.style.display = 'none';
            modalContent.style.width = '1200px';
            modalContent.style.height = '75vh';
        });

        modalContent.style.width = '550px';
        modalContent.style.height = '500px';
        close.style.color = boxTextColor;
        boxContent.style.fontFamily = 'Helvetica, Arial, sans-serif';
        console.log(getComputedStyle(box).backgroundColor);
        modalText.style.color = boxTextColor;
        boxContent.style.color = boxTextColor;
        modalContent.style.backgroundColor = getComputedStyle(box).backgroundColor;
        modal.style.display = 'flex';
        workButton.style.backgroundColor = boxTextColor;
        access.style.backgroundColor = boxTextColor;
        accessLink.style.color = getComputedStyle(box).backgroundColor;
        workButton.style.color = getComputedStyle(box).backgroundColor;
        workButton_2.style.backgroundColor = 'var(--secondary-color)';
        workButton_2.style.color = 'var(--text-color)';
        if(workButton.innerText === 'Germinal') {
            workButton.style.backgroundColor = 'var(--secondary-color)';
            workButton.style.color = 'var(--text-color)';
        }
        
        if (box.classList.contains('box-6')) {
            modalTitle.style.color = 'var(--black-color)';
            modalType.style.color = 'var(--black-color)';
            modalClose.style.color = 'var(--black-color)';
            modalContent.style.color = 'var(--black-color)';
            modalText.style.color = 'var(--black-color)';
            boxContent.style.color = 'var(--black-color)';
            close.style.color = 'var(--black-color)';
            modalContent.style.backgroundColor = 'var(--text-color)';
        } else {
            modalText.style.color = boxTextColor;
            boxContent.style.color = boxTextColor;
            close.style.color = boxTextColor;
            modalTitle.style.color = boxTextColor;
            modalType.style.color = boxTextColor;
            modalContent.style.backgroundColor = getComputedStyle(box).backgroundColor;
        }

        // modalText.style.color = boxTextColor;
        // boxContent.style.color = boxTextColor;
        // close.style.color = boxTextColor;
        // modalTitle.style.color = boxTextColor;
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



