function dobokocka()
{
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var osszeg = document.getElementById("összeg");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var osszeguk = d1 + d2;
    dob1.innerHTML = d1;
    dob2.innerHTML = d2;
    osszeg.innerHTML = "Összegük: "+osszeguk+".";
}