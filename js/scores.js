'use strict';

window.renderStatistics = function(ctx) {
  ctx.fillStyle = '#FDF9EC';
  ctx.strokeStyle = "#AC7536";
  ctx.lineWidth = 5;

  //Frame

  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(150, 60);
  ctx.lineTo(550, 60);
  ctx.lineTo(550, 50);
  ctx.lineTo(600, 50);
  ctx.lineTo(600, 100);
  ctx.lineTo(590, 100);
  ctx.lineTo(590, 200);
  ctx.lineTo(600, 200);
  ctx.lineTo(600, 250);
  ctx.lineTo(550, 250);
  ctx.lineTo(550, 240);
  ctx.lineTo(150, 240);
  ctx.lineTo(150, 250);
  ctx.lineTo(100, 250);
  ctx.lineTo(100, 200);
  ctx.lineTo(110, 200);
  ctx.lineTo(110, 100);
  ctx.lineTo(100, 100);
  ctx.lineTo(100, 50);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  //Heading

  ctx.fillStyle = 'Gold';
  ctx.font = 'bold 18px PT Mono';
  ctx.fillText('А ты хорош!', 300, 40);

  //Stats

  ctx.fillStyle = 'brown';
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Леонардо', 150, 230);

  ctx.fillStyle = 'brown';
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Микелянджело', 250, 230);

  ctx.fillStyle = 'brown';
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Донателло', 380, 230);

  ctx.fillStyle = 'brown';
  ctx.font = 'bold 14px PT Mono';
  ctx.fillText('Рафаэль', 490, 230);

  //Rects

  ctx.fillStyle = 'rgb(54, 72, 254, 1)';
  ctx.fillRect(165, 210, 30, -85);

  ctx.fillStyle = 'rgb(54, 72, 254, 1)';
  ctx.fillRect(285, 210, 30, -135);

  ctx.fillStyle = 'rgb(54, 72, 254, 1)';
  ctx.fillRect(400, 210, 30, -55);

  ctx.fillStyle = 'rgb(54, 72, 254, 1)';
  ctx.fillRect(505, 210, 30, -105);


};
