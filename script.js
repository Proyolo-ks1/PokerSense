const ranks = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
const suits = ["♠","♥","♦","♣"];

const playersDiv = document.getElementById("players");
const addPlayerBtn = document.getElementById("addPlayer");
const winnerSpan = document.getElementById("winner");
const explanationP = document.getElementById("explanation");

function createCardSelect() {
  const sel = document.createElement("select");
  sel.className = "card";

  sel.innerHTML = `<option value="">--</option>` +
    ranks.flatMap(r =>
      suits.map(s => `<option value="${r}${s}">${r}${s}</option>`)
    ).join("");

  sel.addEventListener("change", evaluate);
  return sel;
}

function addPlayer() {
  const div = document.createElement("div");
  div.className = "player";

  div.innerHTML = `<strong>Speler</strong><br>`;
  div.appendChild(createCardSelect());
  div.appendChild(createCardSelect());

  playersDiv.appendChild(div);
}

function evaluate() {
  // Placeholder evaluatie
  winnerSpan.textContent = "Speler 1";
  explanationP.innerHTML =
    `Speler 1 wint met <span class="rule-link" data-rule="kicker">hoogste kicker</span>.`;
}

addPlayerBtn.addEventListener("click", addPlayer);

// init
document.querySelectorAll("#board .card").forEach(c => c.addEventListener("change", evaluate));
addPlayer();
addPlayer();
