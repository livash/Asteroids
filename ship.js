
function Ship(x, y) {
  MovingObject.apply(this, arguments);
};
Ship.prototype = new MovingObject();

Ship.prototype.drawShip = function(newX, newY, context) {
  var centerX = 130;
  var centerY = 110;
  var shipL = 50;
  var shipH = 35;
  var shipHatRad = 15;
  context.beginPath();
  context.arc(centerX, centerY - shipH * .5, shipHatRad, Math.PI, 0, false);
  context.strokeStyle = '#DF7401';
  context.lineWidth = shipHatRad;
  context.stroke();

  context.beginPath();
  context.moveTo(centerX - shipL/2, centerY);
  context.lineTo(centerX + shipL/2, centerY);
  context.lineWidth = shipH;
  context.strokeStyle = '#2E2EFE';
  context.lineCap = 'round';
  context.stroke();

}
