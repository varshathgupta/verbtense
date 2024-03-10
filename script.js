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
    { present: "take", past: "took", pastParticiple: "taken" },
    { present: "shake", past: "shook", pastParticiple: "shaken" },
    { present: "wake", past: "woke", pastParticiple: "woken" },
    { present: "think", past: "thought", pastParticiple: "thought" },
    { present: "seek", past: "sought", pastParticiple: "sought" },
    { present: "teach", past: "taught", pastParticiple: "taught" },
    { present: "sleep", past: "slept", pastParticiple: "slept" },
    { present: "creep", past: "crept", pastParticiple: "crept" },
    { present: "sneak", past: "snuck", pastParticiple: "snuck" },
    { present: "leap", past: "lept", pastParticiple: "lept" },
    { present: "keep", past: "kept", pastParticiple: "kept" },
    { present: "beat", past: "beat", pastParticiple: "beaten" },
    { present: "win", past: "won", pastParticiple: "won" },
    { present: "do", past: "did", pastParticiple: "done" },
    { present: "begin", past: "began", pastParticiple: "begun" },
    { present: "shoot", past: "shot", pastParticiple: "shot" },
    { present: "lead", past: "led", pastParticiple: "led" },
    { present: "feed", past: "fed", pastParticiple: "fed" },
    { present: "bring", past: "brought", pastParticiple: "brought" },
    { present: "catch", past: "caught", pastParticiple: "caught" },
    { present: "fight", past: "fought", pastParticiple: "fought" },
    { present: "freeze", past: "froze", pastParticiple: "frozen" },
    { present: "speak", past: "spoke", pastParticiple: "spoken" },
    { present: "steal", past: "stole", pastParticiple: "stolen" },
    { present: "choose", past: "chose", pastParticiple: "chosen" },
    { present: "write", past: "wrote", pastParticiple: "written" },
    { present: "meet", past: "met", pastParticiple: "met" },
    { present: "bet", past: "bet", pastParticiple: "bet" },
    { present: "forget", past: "forgot", pastParticiple: "forgotten" },
    { present: "get", past: "got", pastParticiple: "got" },
    { present: "come", past: "came", pastParticiple: "come" },
    { present: "sing", past: "sang", pastParticiple: "sung" },
    { present: "sting", past: "stung", pastParticiple: "stung" },
    { present: "cling", past: "clung", pastParticiple: "clung" },
    { present: "hang", past: "hung", pastParticiple: "hung" },
    { present: "dream", past: "dreamt", pastParticiple: "dreamt" },
    { present: "spend", past: "spent", pastParticiple: "spent" },
    { present: "lend", past: "lent", pastParticiple: "lent" },
    { present: "lay", past: "laid", pastParticiple: "laid" },
    { present: "make", past: "made", pastParticiple: "made" },
    { present: "stink", past: "stank", pastParticiple: "stunk" },
    { present: "drink", past: "drank", pastParticiple: "drunk" },
    { present: "sink", past: "sank", pastParticiple: "sunk" },
    { present: "hear", past: "heard", pastParticiple: "heard" },
    { present: "give", past: "gave", pastParticiple: "given" },
    { present: "spit", past: "spat", pastParticiple: "spat" },
    { present: "quit", past: "quit", pastParticiple: "quit" },
    { present: "sit", past: "sat", pastParticiple: "sat" },
    { present: "kneel", past: "knelt", pastParticiple: "knelt" },
    { present: "feel", past: "felt", pastParticiple: "felt" },
    { present: "rise", past: "rose", pastParticiple: "risen" },
    { present: "drive", past: "drove", pastParticiple: "driven" },
    { present: "ride", past: "rode", pastParticiple: "ridden" },
    { present: "hide", past: "hid", pastParticiple: "hidden" },
    { present: "find", past: "found", pastParticiple: "found" },
    { present: "flee", past: "fled", pastParticiple: "fled" },
    { present: "see", past: "saw", pastParticiple: "seen" },
    { present: "mean", past: "meant", pastParticiple: "meant" },
    { present: "send", past: "sent", pastParticiple: "sent" },
    { present: "show", past: "showed", pastParticiple: "shown" },
    { present: "fly", past: "flew", pastParticiple: "flown" },
    { present: "know", past: "knew", pastParticiple: "known" },
    { present: "shine", past: "shone", pastParticiple: "shone" },
    { present: "throw", past: "threw", pastParticiple: "thrown" },
    { present: "grow", past: "grew", pastParticiple: "grown" },
    { present: "draw", past: "drew", pastParticiple: "drawn" },
    { present: "go", past: "went", pastParticiple: "gone" },
    { present: "buy", past: "bought", pastParticiple: "bought" },
    { present: "hold", past: "held", pastParticiple: "held" },
    { present: "leave", past: "left", pastParticiple: "left" },
    { present: "tell", past: "told", pastParticiple: "told" },
    { present: "make", past: "made", pastParticiple: "made" },
    { present: "say", past: "said", pastParticiple: "said" },
    { present: "wear", past: "wore", pastParticiple: "worn" },
    { present: "arise", past: "arose", pastParticiple: "arisen" },
    { present: "eat", past: "ate", pastParticiple: "eaten" },
    { present: "fall", past: "fell", pastParticiple: "fallen" },
    { present: "dig", past: "dug", pastParticiple: "dug" },
    { present: "build", past: "built", pastParticiple: "built" },
    { present: "break", past: "broke", pastParticiple: "broken" },
    { present: "awake", past: "awoke", pastParticiple: "awoken" },
    { present: "cut", past: "cut", pastParticiple: "cut" },
    { present: "put", past: "put", pastParticiple: "put" },
    { present: "let", past: "let", pastParticiple: "let" },
    { present: "lie", past: "lay", pastParticiple: "lain" },
    { present: "lose", past: "lost", pastParticiple: "lost" },
    { present: "pay", past: "paid", pastParticiple: "paid" },
    { present: "sell", past: "sold", pastParticiple: "sold" },
    { present: "shut", past: "shut", pastParticiple: "shut" },
    { present: "sit", past: "sat", pastParticiple: "sat" },
    { present: "tear", past: "tore", pastParticiple: "torn" },
    { present: "weave", past: "wove", pastParticiple: "woven" },
    { present: "stand", past: "stood", pastParticiple: "stood" },
    { present: "swing", past: "swung", pastParticiple: "swung" },
    { present: "swear", past: "swore", pastParticiple: "sworn" },
    { present: "spring", past: "sprang", pastParticiple: "sprung" },
    { present: "hit", past: "hit", pastParticiple: "hit" },
    { present: "hurt", past: "hurt", pastParticiple: "hurt" },
    { present: "cost", past: "cost", pastParticiple: "cost" },
    { present: "read", past: "read", pastParticiple: "read" },
  ];
  