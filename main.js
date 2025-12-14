function func(){
    const pips = document.querySelector("#CLOSE-OPEN").value;
    const razm  = document.querySelector("#razminka").value;
    const razm1 = Number(razm)
    alert("Начинаем - нажми ОК !");
    const pip1 = setInterval(pip, pips*1000);
    const zz = setTimeout(razminka, razm1*1000);
    //Таймер морганий
    function pip(){
        var audio = new Audio('pip.mp3');
        audio.play(); 
    }

    //таймер разминок
    function razminka(){
        var audio = new Audio('razz.mp3');
        audio.play();  
        setInterval(upyat ,(66+razm1)*1000);
        function upyat(){
                var audio = new Audio('razz.mp3');
                audio.play(); 
        }
    }

    
}
