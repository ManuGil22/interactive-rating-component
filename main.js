const rateBtns = document.querySelectorAll('.rate-btn');

rateBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		// removes checked class from all rating buttons
		rateBtns.forEach((button) => {
			button.classList.remove('rate-btn--checked');
			button.ariaChecked = 'false';
		});
		// and adds checked class to clicked button
		e.target.classList.add('rate-btn--checked');
		e.target.ariaChecked = 'true';
	});
});