function kremesek(){
    const kremesek=document.getElementById('kremesek');
    kremesek.innerHTML="";
    for (i = 0; i < db; i++) {
        kremesek.innerHTML += "<img src='kepek/icon.jpg'>"; 
    }
    kremesek.innerHTML += "<br>("+db+" db)";
    document.getElementById('osszkaloria').value = 625;
    
}

