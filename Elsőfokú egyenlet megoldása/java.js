function szamol()
{
	var a=parseFloat(document.elsofoku.a.value);
	var b=parseFloat(document.elsofoku.b.value);
	var c=parseFloat(document.elsofoku.c.value);
	if(a==0)
	{
		//document.write("Az a értéke 0.");
		document.getElementById("ki").innerHTML="Az a értéke 0.";
	}
	else
	{
	var x=(c-b)/a;
	document.getElementById("ki").innerHTML=x;
	}
}