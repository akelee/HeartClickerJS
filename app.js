const wholeEmoji = document.querySelector('.whole')
const crackedEmoji = document.querySelector('.cracked')

//eventListener

wholeEmoji.addEventListener('click', () => {
    if(crackedEmoji.classList.contains('cracked')) {
        crackedEmoji.classList.add('active');
        wholeEmoji.classList.remove('active');
    }
}); //1st value: type of event. 2nd value: function 

crackedEmoji.addEventListener('click', () => {
    if(wholeEmoji.classList.contains('whole')){
        wholeEmoji.classList.add('active');
        crackedEmoji.classList.remove('active');
    }
});