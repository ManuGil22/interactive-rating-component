const rateBtns = document.querySelectorAll('.rate-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating');
const thankYouCard = document.querySelector('.thank-you');
const endRating = document.querySelector('.end-rating');

rateBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		// removes checked class from all rating buttons
		rateBtns.forEach((button) => {
			button.classList.remove('rate-btn--checked');
			button.ariaChecked = 'false';
		});
		// adds checked class to clicked button
		e.target.classList.add('rate-btn--checked');
		e.target.ariaChecked = 'true';
	});
});

submitBtn.addEventListener('click', (e) => {
    // prevents reloading the page on submit
	e.preventDefault();
	// checks if any rating is selected
    const checkedBtn = document.querySelector('.rate-btn--checked');
    if (checkedBtn) {
        const selectedRating = checkedBtn.value;
        ratingCard.classList.toggle('card--hidden');
        thankYouCard.classList.toggle('card--hidden');
        endRating.innerText = selectedRating;
    }
});