function popupImage() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;

    var blackBg = document.getElementById('js-black-bg');

    closePopUp(blackBg);
    closePopUp(showBtn);

    function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            popup.classList.toggle('is-show');
        });
    }
}
popupImage();

function clickedImage(gridNum) {
    var image = document.getElementById(gridNum).getAttribute('src');

    var popupImage = document.getElementById('popup-image');
    popupImage.setAttribute('src', image);
    
    document.getElementById('js-popup').classList.add('is-show');
}