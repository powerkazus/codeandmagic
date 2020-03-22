// Отрисовка колдунов
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

var fireBallColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
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


// Обработка событий отображения и валидации форм

var setupClose = document.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open');
var setupWindow = document.querySelector('.setup');
var userName = document.querySelector('.setup-user-name');
var submitForm = document.querySelector('.setup-submit');

var openPopup = function() {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onEscClosePopup);
};

var closePopup = function() {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onEscClosePopup);
};

var onEnterOpenPopup = function(evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
};

var onEnterClosePopup = function(evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
};

var onEscClosePopup = function(evt) {
    if (evt.keyCode === 27) { 
      closePopup();
    }
};

submitForm.setAttribute('type', 'submit'); // Возможно, не обязательно.

setupOpen.addEventListener('keydown', onEnterOpenPopup);
setupClose.addEventListener('keydown', onEnterClosePopup);
setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);

userName.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
  }
});

// Изменение цветов персонажа по клику

var wizardCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
var fireBall = setupWindow.querySelector('.setup-fireball-wrap');

var wizardCoatField = setupWindow.querySelector('[name="coat-color"]');
var wizardEyesField = setupWindow.querySelector('[name="eyes-color"]');
var fireBallField = setupWindow.querySelector('[name="fireball-color"]');

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

    for (let i = 0; i < h.length; i++) {
    r = "0x" + h[i][1] + h[i][2];
    g = "0x" + h[i][3] + h[i][4];
    b = "0x" + h[i][5] + h[i][6];

    h[i] = "rgb("+ +r + ", " + +g + ", " + +b + ")";
  }
}

function switchColor (element, field, array, property) {  
  element.addEventListener('click', function (evt) {
    for (let i = 0; i < array.length; i++) {
      
      if (!element.style[property] || element.style[property] === array[i]) {
        i++;
        element.style[property] = array[i];
        field.value = array[i];
      }

      else if (element.style[property] === array[array.length - 1]) {
        i = 0;
        element.style[property] = array[i];
        field.value = array[i];
      }
    }
  })
};

switchColor(wizardCoat, wizardCoatField, coatColors, 'fill');
switchColor(wizardEyes, wizardEyesField, eyesColors, 'fill');
hexToRGB(fireBallColors);
switchColor(fireBall, fireBallField, fireBallColors, 'backgroundColor');

// Drag-n-drop окна персонажа

var userPic = setupWindow.querySelector('.setup-user');

userPic.addEventListener('click', function (evt) {
  evt.preventDefault();
});

userPic.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
  }

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

