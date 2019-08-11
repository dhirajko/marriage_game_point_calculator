let players = [
  { name: "first", isSeen: true, point: 2 },
  { name: "sec", isSeen: false, point: 2 },
  { name: "thi", isSeen: true, point: 2 },
  { name: "for", isSeen: true, point: 2 },
  { name: "fift", isSeen: true, point: 0 }
];

function point(index) {
  let winner = players.splice(index, 1)[0];
  let maal = winner.point;
  winner.point = 0;
  players.forEach(player => {
    if (player.isSeen) {
      maal = maal + player.point;
    }
  });

  players.forEach(player => {
    if (player.isSeen) {
      player.point = player.point * (players.length + 1) - (maal + 3);
    } else {
      player.point = -(maal + 10);
    }
    winner.point = winner.point - player.point;
  });
  players.push(winner);
  console.log(players);
}

point(0);
