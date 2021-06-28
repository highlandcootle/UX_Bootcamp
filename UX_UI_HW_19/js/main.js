


//Get modal element
var modal = document.getElementById('simpleModal');

//Get modal button
var modalBtn = document.getElementById('modalBtn');

//Get close button
var closedBtn = document.getElementsByClassName('closedBtn');

//Listen for open click 
modalBtn.addEventListener('click', openModal);

//Listen for close click 
closedBtn[0].addEventListener('click', closeModal);

//Listen for outside click 
window.addEventListener('click', outsideClick);


//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
    
}
 