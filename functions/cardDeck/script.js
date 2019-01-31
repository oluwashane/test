
var suits = ["spades","hearts","clubs","diams"];
var cardFace = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var cards = [];
var players = [];

function startDeal() {
    players = [];
    cards = [];
    var num = Number(document.getElementById("players").value);
    for(var i = 0; i < 0; i++ ) {
        players[i] = []
    }
    buildCards();
    shuffleCards(cards);
    //console.log(cards);
    deal(cards);
}

function buildCards() {
    for(s in suits) {
        var bgColor = (suits[s] == "hearts" || suits[s] == "diams")? "red" : "black";
        for(c in cardFace) {
            var card = {
                suit:suits[s],
                num:cardFace[c],
                bgColor: bgColor,
            }
            cards.push(card);
        }
    }
}

function shuffleCards(a) {
    for(var x = a.length - 1; x > 0; x--) {
        var holder = Math.floor(Math.random()*(x + 1));
        var temp = a[x];
        a[x] = a[holder];
        a[holder] = temp;
    }
    return a;
}

function deal(cards) {
    var num = players.length
    var output = document.getElementById("message")
    var p = 0;
    for(var i = 0; i < cards.length; i++) {
        players[p].push(cards[i]);
        p++;
        if(p >= num){p = 0};
    }

    for(var i = 0; i < num; i++){
        output.innerHTML += "Players : "+(i + 1) + "<br>";
        for(var x = 0; x < players[i].length; x++) {
            var p = players[i][x];
            output.innerHTML += "<span style =\"color"+p.bgColor+"\">"+p.num+"&"+p.suit+";</span>";
        }
        output.innerHTML += "<br>"
    }
}