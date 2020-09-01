function changeBackground() {
  // handpicked from https://coolors.co/generate
  const colorPairs = [
    ["#002A32", "#FB8B24"],
    ["#6B2737", "#4ecdc4"],
    ["#0e1428", "#43AA8B"],
    ["#1f363d", "#F94144"],
    ["#001524", "#FEE440"],
    ["#0e1428", "#affc41"],
    ["#370617", "#06bcc1"],
    ["#183a37", "#eb6424"],
  ];
  const luckyPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];

  document.body.style.backgroundColor = luckyPair[0];
  document.body.style.borderBottomColor = luckyPair[1];
}

changeBackground();
