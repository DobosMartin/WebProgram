function szamol()
{
    var a = Math.floor(Math.random() * 6 + 1);
    var b = Math.floor(Math.random() * 6 + 1);
	var e=a+b;
	document.getElementById("a").innerHTML =a;
	document.getElementById("b").innerHTML =b;
	document.getElementById("e").innerHTML =e;
	document.kocka.elso.value=a;
	document.kocka.masodik.value=b;
	document.kocka.eredmeny.value=e;
}