'use strict';

window.renderStatistics = function(ctx) {
  ctx.fillStyle = '#FDF9EC';
  ctx.strokeStyle = "#AC7536";
  ctx.lineWidth = 8;

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

  //Players and stats

  var players = ['Леонардо', 'Микелянджело', 'Донателло', 'Рафаэль'];
  var stats = [855, 1135, 355, 605];

  var drawStats = function(names, points) {
    var statPosition = 140;
    var statMaxHeight = 135;

    //Getting best score

    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    var bestScore = getMaxOfArray(points);

    //Converting scores for histogram

    for (var i = 0; i < points.length; i++) {
      points[i] = Math.round(points[i] * statMaxHeight / bestScore);
    }

    //Drawing histogram

    for (var i = 0; i < names.length; i++){
      ctx.fillStyle = 'brown';
      ctx.font = 'bold 14px PT Mono';
      ctx.fillText(names[i], statPosition, 230);

      ctx.fillStyle = 'rgb(54, 72, 254, 1)';
      ctx.fillRect(statPosition + 10, 210, 30, points[i] * (-1));

      statPosition += 120;

    }
  };

  drawStats(players, stats);
};
