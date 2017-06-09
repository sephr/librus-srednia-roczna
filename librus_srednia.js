var x, y;
$('.stretch a').each(function() {
    if ($(this).prop('title').includes("Kategoria: roczna")) {
        x += parseInt($(this).html());
        y++;
    }
});
console.log("Twoja średnia wynosi " + x / y);
alert("Twoja średnia wynosi " + x / y);
