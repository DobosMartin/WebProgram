    const font = 0.45359237;

    function energiaKalkulalas(){
        var tevekenyseg = document.getElementById('tevekenyseg').value;
        var sulyKg = document.getElementById('kg').value;
        var perc;
        var t = tevekenysegKcal(tevekenyseg);
        var s = energiaFogyasSzorzo(sulyKg);
        var eredmenyP = document.getElementById('kcal');
        perc = document.getElementById('perc').value;
        eredmenyP.textContent =  Math.round((t*s)*perc)+' kcal';
    }

    function tevekenysegKcal(tevekenyeg){
       tev = document.getElementById('tevekenyseg').value;
       var x = 1;
       if(tev == "seta")
       {
           x = 1.1;
       }
       if(tev == "kocogas")
       {
           x = 1.5;
       }
       if(tev == "futas")
       {
           x = 1.8;
       }
       
       return x;
    }

    function energiaFogyasSzorzo(sulyInKg){
     var sulyInFont = (sulyInKg/font);
     var szorzo = Math.round((sulyInFont/20));
     return szorzo;
    }
