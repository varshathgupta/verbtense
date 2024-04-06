document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the Enter key press
  document
    .getElementById("wordInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        findTenses();
      }
    });
});

function findTenses() {
  const word = document.getElementById("wordInput").value.trim().toLowerCase();
  const tenses = irregularVerbs[word];

  // Clear previous error messages and table content
  clearError();
  clearTable();

  if (tenses) {
    // Display table header and populate table with tenses
    document.getElementById("tensesTableHeader").style.display = "table-row";
    populateTable(tenses);
  } else {
    displayError("Word not found in the list.");
  }
}

function populateTable(tenses) {
  const table = document.getElementById("tensesTable");
  const row = table.insertRow();

  // Insert cells for each tense
  const presentCell = row.insertCell();
  presentCell.textContent = tenses.present;
  presentCell.classList.add("present-cell");

  const pastCell = row.insertCell();
  pastCell.textContent = tenses.past;

  const participleCell = row.insertCell();
  participleCell.textContent = tenses.pastParticiple;
}

function clearTable() {
  // Remove all rows from the table except the header row
  const table = document.getElementById("tensesTable");
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function clearError() {
  document.getElementById("error").innerText = "";
}

function displayError(message) {
  const errorElement = document.getElementById("error");
  errorElement.innerText = message;
}

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the Enter key press
  document
    .getElementById("wordInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        findTenses();
      }
    });
});

function findTenses() {
  const word = document.getElementById("wordInput").value.trim().toLowerCase();
  const tenses = data.find(
    (item) =>
      item.present === word ||
      item.past === word ||
      item.pastParticiple === word
  );

  // Clear previous error messages and table content
  clearError();
  clearTable();

  if (tenses) {
    // Display table header and populate table with tenses
    document.getElementById("tensesTableHeader").style.display = "table-row";
    populateTable(tenses);
  } else {
    displayError("Word not found in the list.");
  }
}

function populateTable(tenses) {
  const table = document.getElementById("tensesTable");
  const row = table.insertRow();

  // Insert cells for each tense
  const presentCell = row.insertCell();
  presentCell.textContent = tenses.present;

  const pastCell = row.insertCell();
  pastCell.textContent = tenses.past;

  const participleCell = row.insertCell();
  participleCell.textContent = tenses.pastParticiple;
}

function clearTable() {
  // Remove all rows from the table except the header row
  const table = document.getElementById("tensesTable");
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function clearError() {
  document.getElementById("error").innerText = "";
}

function displayError(message) {
  const errorElement = document.getElementById("error");
  errorElement.innerText = message;
}

const data = [
  {
    present: "arise",
    past: "arose",
    pastParticiple: "arisen",
  },
  {
    present: "awake",
    past: "awoke",
    pastParticiple: "awoken",
  },
  {
    present: "be",
    past: "was / were",
    pastParticiple: "been",
  },
  {
    present: "bear",
    past: "bore",
    pastParticiple: "born",
  },
  {
    present: "beat",
    past: "beat",
    pastParticiple: "beaten",
  },
  {
    present: "become",
    past: "became",
    pastParticiple: "become",
  },
  {
    present: "begin",
    past: "began",
    pastParticiple: "begun",
  },
  {
    present: "bend",
    past: "bent",
    pastParticiple: "bent",
  },
  {
    present: "bet",
    past: "bet",
    pastParticiple: "bet",
  },
  {
    present: "bind",
    past: "bound",
    pastParticiple: "bound",
  },
  {
    present: "bite",
    past: "bit",
    pastParticiple: "bitten",
  },
  {
    present: "bleed",
    past: "bled",
    pastParticiple: "bled",
  },
  {
    present: "blow",
    past: "blew",
    pastParticiple: "blown",
  },
  {
    present: "break",
    past: "broke",
    pastParticiple: "broken",
  },
  {
    present: "breed",
    past: "bred",
    pastParticiple: "bred",
  },
  {
    present: "bring",
    past: "brought",
    pastParticiple: "brought",
  },
  {
    present: "broadcast",
    past: "broadcast",
    pastParticiple: "broadcast",
  },
  {
    present: "build",
    past: "built",
    pastParticiple: "built",
  },
  {
    present: "burn",
    past: "burnt",
    pastParticiple: "burnt",
  },
  {
    present: "burst",
    past: "burst",
    pastParticiple: "burst",
  },
  {
    present: "buy ",
    past: "bought",
    pastParticiple: "bought",
  },
  {
    present: "catch",
    past: "caught",
    pastParticiple: "caught",
  },
  {
    present: "choose",
    past: "chose",
    pastParticiple: "chosen",
  },
  {
    present: "cling",
    past: "clung",
    pastParticiple: "clung",
  },
  {
    present: "come",
    past: "came",
    pastParticiple: "come",
  },
  {
    present: "cost",
    past: "cost",
    pastParticiple: "cost",
  },
  {
    present: "creep",
    past: "crept",
    pastParticiple: "crept",
  },
  {
    present: "cut",
    past: "cut",
    pastParticiple: "cut",
  },
  {
    present: "deal",
    past: "dealt",
    pastParticiple: "dealt",
  },
  {
    present: "dig",
    past: "dug",
    pastParticiple: "dug",
  },
  {
    present: "do",
    past: "did",
    pastParticiple: "done",
  },
  {
    present: "draw",
    past: "drew",
    pastParticiple: "drawn",
  },
  {
    present: "dream",
    past: "dreamt",
    pastParticiple: "dreamt",
  },
  {
    present: "drink",
    past: "drank",
    pastParticiple: "drunk",
  },
  {
    present: "drive",
    past: "drove",
    pastParticiple: "driven",
  },
  {
    present: "eat",
    past: "ate",
    pastParticiple: "eaten",
  },
  {
    present: "fall",
    past: "fell",
    pastParticiple: "fallen",
  },
  {
    present: "feed",
    past: "fed",
    pastParticiple: "fed",
  },
  {
    present: "feel",
    past: "felt",
    pastParticiple: "felt",
  },
  {
    present: "fight",
    past: "faught",
    pastParticiple: "faught",
  },
  {
    present: "find",
    past: "found",
    pastParticiple: "found",
  },
  {
    present: "flee",
    past: "fled",
    pastParticiple: "fled",
  },
  {
    present: "fly",
    past: "flew",
    pastParticiple: "flown",
  },
  {
    present: "forbid",
    past: "forbade",
    pastParticiple: "forbidden",
  },
  {
    present: "forget",
    past: "forgot",
    pastParticiple: "forgotten",
  },
  {
    present: "forgive",
    past: "forgave",
    pastParticiple: "forgiven",
  },
  {
    present: "freeze",
    past: "froze",
    pastParticiple: "frozen",
  },
  {
    present: "get",
    past: "got",
    pastParticiple: "got",
  },
  {
    present: "give",
    past: "gave",
    pastParticiple: "given",
  },
  {
    present: "go",
    past: "went",
    pastParticiple: "gone",
  },
  {
    present: "grind",
    past: "ground",
    pastParticiple: "ground",
  },
  {
    present: "grow",
    past: "grew",
    pastParticiple: "grown",
  },
  {
    present: "hang",
    past: "hung",
    pastParticiple: "hung",
  },
  {
    present: "have",
    past: "had",
    pastParticiple: "had",
  },
  {
    present: "has",
    past: "had",
    pastParticiple: "had",
  },
  {
    present: "hear",
    past: "heard",
    pastParticiple: "heard",
  },
  {
    present: "hide",
    past: "hid",
    pastParticiple: "hidden",
  },
  {
    present: "hit",
    past: "hit",
    pastParticiple: "hit",
  },
  {
    present: "hold",
    past: "held",
    pastParticiple: "held",
  },
  {
    present: "hurt",
    past: "hurt",
    pastParticiple: "hurt",
  },
  {
    present: "keep",
    past: "kept",
    pastParticiple: "kept",
  },
  {
    present: "kneel",
    past: "knelt",
    pastParticiple: "knelt",
  },
  {
    present: "know",
    past: "knew",
    pastParticiple: "known",
  },
  {
    present: "lay",
    past: "laid",
    pastParticiple: "laid",
  },
  {
    present: "lead",
    past: "led",
    pastParticiple: "led",
  },
  {
    present: "lean",
    past: "leant",
    pastParticiple: "leant",
  },
  {
    present: "leap",
    past: "lept",
    pastParticiple: "lept",
  },
  {
    present: "learn",
    past: "learnt",
    pastParticiple: "learnt",
  },
  {
    present: "leave",
    past: "left",
    pastParticiple: "left",
  },
  {
    present: "lend",
    past: "lent",
    pastParticiple: "lent",
  },
  {
    present: "let",
    past: "let",
    pastParticiple: "let",
  },
  {
    present: "lie",
    past: "lay / lied",
    pastParticiple: "lain / lied",
  },
  {
    present: "lose",
    past: "lost",
    pastParticiple: "lost",
  },
  {
    present: "make",
    past: "made",
    pastParticiple: "made",
  },
  {
    present: "mean",
    past: "meant",
    pastParticiple: "meant",
  },
  {
    present: "meet",
    past: "met",
    pastParticiple: "met",
  },
  {
    present: "mow",
    past: "mowed",
    pastParticiple: "mown",
  },
  {
    present: "overtake",
    past: "overtook",
    pastParticiple: "overtaken",
  },
  {
    present: "pay",
    past: "paid",
    pastParticiple: "paid",
  },
  {
    present: "put",
    past: "put",
    pastParticiple: "put",
  },
  {
    present: "quit",
    past: "quit",
    pastParticiple: "quit",
  },
  {
    present: "read",
    past: "read",
    pastParticiple: "read",
  },
  {
    present: "ride",
    past: "rode",
    pastParticiple: "ridden",
  },
  {
    present: "ring",
    past: "rang",
    pastParticiple: "rung",
  },
  {
    present: "rise",
    past: "rose",
    pastParticiple: "risen",
  },
  {
    present: "run",
    past: "ran",
    pastParticiple: "run",
  },
  {
    present: "saw",
    past: "sawed",
    pastParticiple: "sawn",
  },
  {
    present: "say ",
    past: "said",
    pastParticiple: "said",
  },
  {
    present: "see",
    past: "saw",
    pastParticiple: "seen",
  },
  {
    present: "seek",
    past: "sought",
    pastParticiple: "sought",
  },
  {
    present: "sell",
    past: "sold",
    pastParticiple: "sold",
  },
  {
    present: "send",
    past: "sent",
    pastParticiple: "sent",
  },
  {
    present: "set",
    past: "set",
    pastParticiple: "set",
  },
  {
    present: "sew",
    past: "sewed",
    pastParticiple: "sewn",
  },
  {
    present: "shake ",
    past: "shook",
    pastParticiple: "shaken",
  },
  {
    present: "shed",
    past: "shed",
    pastParticiple: "shed",
  },
  {
    present: "shine",
    past: "shone",
    pastParticiple: "shone",
  },
  {
    present: "shoot",
    past: "shot",
    pastParticiple: "shot",
  },
  {
    present: "show",
    past: "showed",
    pastParticiple: "shown",
  },
  {
    present: "shrink",
    past: "shrank",
    pastParticiple: "shrunk",
  },
  {
    present: "shut",
    past: "shut",
    pastParticiple: "shut",
  },
  {
    present: "sing",
    past: "sang",
    pastParticiple: "sung",
  },
  {
    present: "sink",
    past: "sank",
    pastParticiple: "sunk",
  },
  {
    present: "sit",
    past: "sat",
    pastParticiple: "sat",
  },
  {
    present: "sleep",
    past: "slept",
    pastParticiple: "slept",
  },
  {
    present: "slide",
    past: "slid",
    pastParticiple: "slid",
  },
  {
    present: "smell",
    past: "smelt",
    pastParticiple: "smelt",
  },
  {
    present: "sneak",
    past: "snuck",
    pastParticiple: "snuck",
  },
  {
    present: "sow",
    past: "sowed",
    pastParticiple: "sown",
  },
  {
    present: "speak",
    past: "spoke",
    pastParticiple: "spoken",
  },
  {
    present: "spell",
    past: "spelt",
    pastParticiple: "spelt",
  },
  {
    present: "spend",
    past: "spent",
    pastParticiple: "spent",
  },
  {
    present: "spill",
    past: "spilt",
    pastParticiple: "spilt",
  },
  {
    present: "spin",
    past: "spun",
    pastParticiple: "spun",
  },
  {
    present: "spit",
    past: "spat",
    pastParticiple: "spat",
  },
  {
    present: "spread",
    past: "spread",
    pastParticiple: "spread",
  },
  {
    present: "spring",
    past: "sprang",
    pastParticiple: "sprung",
  },
  {
    present: "stand",
    past: "stood",
    pastParticiple: "stood",
  },
  {
    present: "steal",
    past: "stole",
    pastParticiple: "stolen",
  },
  {
    present: "stick",
    past: "stuck",
    pastParticiple: "stuck",
  },
  {
    present: "sting",
    past: "stung",
    pastParticiple: "stung",
  },
  {
    present: "stink",
    past: "stank",
    pastParticiple: "stunk",
  },
  {
    present: "strike",
    past: "struck",
    pastParticiple: "struck",
  },
  {
    present: "swear",
    past: "swore",
    pastParticiple: "sworn",
  },
  {
    present: "swing",
    past: "swung",
    pastParticiple: "swung",
  },
  {
    present: "take",
    past: "took",
    pastParticiple: "taken",
  },
  {
    present: "teach",
    past: "taught",
    pastParticiple: "taught",
  },
  {
    present: "tear",
    past: "tore",
    pastParticiple: "torn",
  },
  {
    present: "tell",
    past: "told",
    pastParticiple: "told",
  },
  {
    present: "think",
    past: "thought",
    pastParticiple: "thought",
  },
  {
    present: "throw",
    past: "threw",
    pastParticiple: "thrown",
  },
  {
    present: "wake ",
    past: "woke",
    pastParticiple: "woken",
  },
  {
    present: "wear",
    past: "wore",
    pastParticiple: "worn",
  },
  {
    present: "weave",
    past: "wove",
    pastParticiple: "woven",
  },
  {
    present: "win ",
    past: "won",
    pastParticiple: "won",
  },
  {
    present: "write",
    past: "wrote",
    pastParticiple: "written",
  },
];
