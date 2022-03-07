function Belepes(){
    var nev= document.getElementById('firstName').value ;
    var jelszo = document.getElementById('password').value;
    if(nev == "admin" ||jelszo=="a" ){
        document.location.href = "main.html";
    }
    else{
        alert('nem,nem');
    }
   

}