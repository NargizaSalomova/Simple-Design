document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('.header').classList.toggle('open');
	});
});

window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		document.querySelector('.header').classList.remove('open');
	}
});
document.getElementById('header__menu').addEventListener('click', event => {
	console.log(event);
	event._isClickWithInMenu = true;
});
document.getElementById('burger').addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
	if (event._isClickWithInMenu) return;
	document.querySelector('.header').classList.remove('open');
});

document.querySelector('.hero__order_icon').addEventListener('click', () => {
	document.querySelector('.hero').classList.toggle('open');
});

const pagination = document.querySelectorAll('.hero__pagination_btn');

pagination.forEach(element => {
	element.addEventListener('click', () => {
		let activePagination = document.querySelector(
			'.hero__pagination_list .hero__pagination_item button.is_current'
		);
		activePagination.classList.remove('is_current');
		element.classList.add('is_current');
		console.log(element);
	});
});
