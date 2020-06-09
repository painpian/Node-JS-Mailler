'use strict'

//vent tabs
function openTab(e){
	var tabs = document.querySelectorAll('.tab');
	var target = e.getAttribute('data-id');
	var tagret_tab = document.querySelector('#'+target);
	var header_tabs = document.querySelectorAll('.tab-header');

	var i;

	for(i = 0; i < tabs.length; i++){
		tabs[i].classList.remove('active');
		header_tabs[i].classList.remove('active');
	}
	e.classList.add('active');
	tagret_tab.classList.add('active');
}

//Favorite
function addFavorite(e){
	var parent = e.parentNode;
	var star = parent.childNodes[3];
	
	e.classList.add('hidden');
	star.classList.remove('hidden');
}
function removeFavorite(e){
	var parent = e.parentNode;
	var star = parent.childNodes[1];
	
	e.classList.add('hidden');
	star.classList.remove('hidden');
}

//checked mail list
function checkAll(){
	document.querySelector('.default-list').classList.add('hidden');
	document.querySelector('.second-list').classList.remove('hidden');	

	var check_square = document.querySelectorAll('.fa-square-o');
	var check_square_o = document.querySelectorAll('.fa-check-square-o');
	var i;

	for(i=0; i < check_square.length; i++){
		check_square[i].classList.add('hidden');
		check_square_o[i].classList.remove('hidden');
	}
}
function uncheckAll(){
	document.querySelector('.default-list').classList.remove('hidden');
	document.querySelector('.second-list').classList.add('hidden');	
	
	var check_square = document.querySelectorAll('.fa-square-o');
	var check_square_o = document.querySelectorAll('.fa-check-square-o');
	var i;

	for(i=0; i < check_square.length; i++){
		check_square[i].classList.remove('hidden');
		check_square_o[i].classList.add('hidden');
	}
}
function addCheck(e){
	var parent = e.parentNode;
	var star = parent.childNodes[3];
	
	e.classList.add('hidden');
	star.classList.remove('hidden');

	document.querySelector('.default-list').classList.add('hidden');
	document.querySelector('.second-list').classList.remove('hidden');
}
function removeCheck(e){
	var parent = e.parentNode;
	var star = parent.childNodes[1];
	
	e.classList.add('hidden');
	star.classList.remove('hidden');
}
/*compose*/
function compose(){
	var message_box = document.querySelector('.message-form');
		message_box.classList.remove('hidden');
}
function closeCompose(){
	var message_box = document.querySelector('.message-form');
		message_box.classList.add('hidden');
}
/*open & close message*/
function openMessage(){
	document.querySelector('.tabs').classList.add('hidden');
	document.querySelector('.wrapper-content').classList.add('hidden');
	document.querySelector('.wrapper-footer').classList.add('hidden');
	document.querySelector('.message-content').classList.remove('hidden');
}
function closeMessage(){
	document.querySelector('.tabs').classList.remove('hidden');
	document.querySelector('.wrapper-content').classList.remove('hidden');
	document.querySelector('.wrapper-footer').classList.remove('hidden');
	document.querySelector('.message-content').classList.add('hidden');
}
