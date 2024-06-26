//========== STICKY HEADER, BACK TO TOP ==========>	
const headerAreas = document.querySelectorAll('.header-area');
const scrollUp = document.querySelector('.scroll-up');

function addHeaderHeight(area) {
	document.documentElement.style.setProperty('--header-h', `${area.clientHeight}px`);
}
function handleScroll() {
	const isSticky = window.scrollY > headerAreas[0].clientHeight;
	
	headerAreas.forEach(area => area.classList.toggle('sticky', isSticky));
	scrollUp.classList.toggle('sticky', isSticky);
}
window.addEventListener('resize', () => headerAreas.forEach(addHeaderHeight));
window.addEventListener('load', () => headerAreas.forEach(addHeaderHeight));
window.addEventListener('scroll', handleScroll);
scrollUp.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
//========== STICKY HEADER, BACK TO TOP// ==========>

//========== MOBILE MENU JS ==========>
const resBar = document.querySelectorAll('.hamburger, .sidebar-overlay')
resBar.forEach(btn => {
	btn.addEventListener('click', ()=>{
		for (let i = 0; i < resBar.length; i++) {
			resBar[i].classList.toggle('active')
		}
		document.querySelector('.header-sidebar').classList.toggle('active')
	})
});
// if has child
const listItem = document.querySelectorAll('.sidebar-menu ul li')
listItem.forEach(item => {
	if (item.contains(item.querySelector('ul'))) {
		item.classList.add('has-child')
		item.querySelector('a').addEventListener('click', (e)=>{
			e.preventDefault();
		})
	}
});
// responsive menu clicking event
const responsiveMenuLink = document.querySelectorAll('.sidebar-menu ul li.has-child')
responsiveMenuLink.forEach(link => {
	link.addEventListener('click', ()=>{
		let submenu = document.querySelector('.sub-menu')
		link.classList.toggle('active');
		submenu.classList.toggle('active');

		if (submenu.style.maxHeight) {
			submenu.style.maxHeight = null
		}else{
			submenu.style.maxHeight = submenu.scrollHeight + 10 + 'px'
		}
	})
});
//========== MOBILE MENU JS end ==========>

(function($) {
	"use strict";

	// NiceSelect
	$("select").niceSelect();

})(jQuery);