'use strict'
var WIZARDS_COUNT = 4;

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц',
'Онопко', 'Топольницкая', 'Нионго','Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var userDialog = document.querySelector('.setup');
//showing ovrlay
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


//fill wizards array
for(var i = 0; i < WIZARDS_COUNT; i++) {
	wizards.push(new Wizard());
}

var renderWizard = function() {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

	return wizardElement;
};

var fragment = document.createDocumentFragment();
for(var i = 0; i < WIZARDS_COUNT; i++) {
	fragment.appendChild(renderWizard(wizards[i]));
};
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

function Wizard(name, coatColor, eyesColor) {
	this.name = getArrRandomElement(FIRST_NAMES) + ' ' + getArrRandomElement(SECOND_NAMES);
	this.coatColor = getArrRandomElement(COAT_COLORS);
	this.eyesColor = getArrRandomElement(EYES_COLORS);
}

//function for getting random value of Array
function getArrRandomElement(arr) {
	var index = Math.floor(Math.random() * arr.length);
	return arr[index];
};