var x = 0;
var y = 0;
$('a').each(function () {
	title = $(this).prop('title');
	if(title.includes("Kategoria: roczna")) {
	x += parseInt($(this).html());
	y++;
	}
});
alert("Twoja œrednia wynosi " + x/y);