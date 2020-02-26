document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizard = {
  name: '',
  coatColor: '',
  eyesColor: ''
};
var wizards = [];

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function createWizard(wiz){
  wizard.name = arrayRandElement(wizardNames) + ' ' + arrayRandElement(wizardSurnames);
  wizard.coatColor = arrayRandElement(coatColors);
  wizard.eyesColor = arrayRandElement(eyesColors);
  return wiz;
};

function renderWizard(wiz){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

for (var i = 0; i < 4; i++) {
  createWizard(wizard);
  wizards.push(wizard);
  renderWizard(wizard);
}
