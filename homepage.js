/*
 * Javascript to construct the homepage 
 */

/* 
 * Add a card for each mask that looks like:
      <a href="Snungeon/index.html">
        <div class="game-card">
          <img src="Snungeon/screenshot.png" class="game-img">
          <h4>Snungeon</h4>
          <div class="byline">Ardent Eliot Reinhard / Cam Miller / Cecil Choi</div>
        </div>
      </a>

    in id "game-container"
 */
function makeMaskCards() {
  masks = shuffle(masks)

  // For each mask 
  for (let mask of masks) {

    if (mask["dir"]) {

      var link = $('<a href="masks/' + mask["dir"] + '/index.html"></a>');
      var card = $('<div></div>').addClass('mask-card');

      link.append(card);

      card.append($('<img class="mask-img" src="masks/' + mask["dir"] + '/' + mask["poster"] + '">'));

      // card.append($('<h4>' + mask['name'] + '</h4>'));
      // card.append($('<div class="byline">' + mask['credit'].join(' / ') + '</div>'));

      $('#mask-container').append(link);
    }
  }

}


/* 
 * When the document is fully loaded
 */
$(window).on("load", function () {
  console.log("Ran on page load.");
  makeMaskCards();
  DataWrangler.init();
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

