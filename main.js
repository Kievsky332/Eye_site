function func(){
    const pips = document.querySelector("#CLOSE-OPEN").value;
    const razm  = document.querySelector("#razminka").value;
    const hide  = document.querySelector("#sorav").innerHTML;
    alert("Начинаем - нажми ОК !");
    //Таймер морганий
    function pip(){
        var audio = new Audio('pip.mp3');
        audio.play(); 
    }

    //таймер разминок
    function razminka(){
        clearInterval(pip1);
        clearInterval(zz);
        var audio = new Audio('razz.mp3');
        audio.play(); 
    }

    let pip1 = setInterval(pip, pips*1000);
    let zz = setInterval(razminka, razm*1000);
    
}
function stop(){
    console.log(123);
}