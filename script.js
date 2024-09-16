const openPopupBtn = document.getElementById('openPopup');
const imagePopup = document.getElementById('imagePopup');
const closePopupBtn = document.getElementById('closePopup');

openPopupBtn.addEventListener('click', function() {
    imagePopup.style.display = 'block';
});


closePopupBtn.addEventListener('click', function() {
    imagePopup.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';
    }
});





document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const toggleBtn = question.querySelector('.toggle-btn');
        if (question.classList.contains('active')) {
            toggleBtn.innerHTML = '&#8722;'; // Minus sign
        } else {
            toggleBtn.innerHTML = '&#10010;'; // Plus sign
        }
    });
});