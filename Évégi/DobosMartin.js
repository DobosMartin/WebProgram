alert("Ez egy veszélyes oldal biztos folyatod? Le is bukhatsz.");

var kor = prompt("Hány éves vagy?");

switch (true) {
	case (kor > 18):
		alert("Túl öreg vagy, nem nézheted meg az oldalt");
		break;
	case (kor < 18):
		alert("Üdv az oldalon");
		break;
}

