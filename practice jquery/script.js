$(document).ready(function () {
    let icons = ["🍎","🍌","🍇","🍓","🍍","🥝","🍒","🍉"];
    let cards = icons.concat(icons); // pasangan
    cards.sort(() => 0.5 - Math.random()); // acak

    let firstCard = null;
    let secondCard = null;
    let score = 0;
    let timeLeft = 60;
    let lockBoard = false;

    // render kartu
    cards.forEach(icon => {
        $("#game-board").append(`<div class="card" data-icon="${icon}">?</div>`);
    });

    // klik kartu
    $(".card").click(function () {
        if (lockBoard || $(this).hasClass("matched") || $(this).hasClass("flipped")) return;

        $(this).addClass("flipped").text($(this).data("icon"));

        if (!firstCard) {
            firstCard = $(this);
        } else {
            secondCard = $(this);
            lockBoard = true;

            if (firstCard.data("icon") === secondCard.data("icon")) {
                firstCard.addClass("matched");
                secondCard.addClass("matched");
                score += 10;
                $("#score").text(`Skor: ${score}`);
                resetTurn();
            } else {
                setTimeout(() => {
                    firstCard.removeClass("flipped").text("?");
                    secondCard.removeClass("flipped").text("?");
                    resetTurn();
                }, 800);
            }
        }
    });

    function resetTurn() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    // timer
    let timer = setInterval(function () {
        timeLeft--;
        $("#timer").text(`Waktu: ${timeLeft} detik`);
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(`Waktu habis! Skor akhir: ${score}`);
            $(".card").off("click");
        }
    }, 1000);
});
