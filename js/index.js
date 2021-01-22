function calcul() {
    let result;
    let indicesLot;

    let capital = document.getElementById("capitale").value;
    let pips = document.getElementById("pips").value;
    let percent = document.getElementById("percent").value;

    let capitalPercent = capital * percent/100;

    let lot = capitalPercent/pips/10;
    lot = lot*100;
    lot = Math.round(lot);
    lot = lot/100;

    if (isNaN(lot)) {
        result = "Valeurs entrées incorrect.";
        indicesLot = "Valeurs entrées incorrect.";
    } else {
        result = lot.toString();
        indicesLot = (lot*10).toString();
    }

    document.getElementById("result").innerText= result;
    document.getElementById("lot-indice").innerText= indicesLot;
}


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
   calcul()
}, false);


document.getElementById('menu-1').addEventListener('click', function () {
    document.getElementById('menu-1').classList.toggle('active');
    document.getElementById('menu-2').classList.toggle('active');

    document.getElementById('p1').classList.toggle('enable');
    document.getElementById('p2').classList.toggle('enable');

    document.getElementById('p1').classList.toggle('able');
    document.getElementById('p2').classList.toggle('able');
});

document.getElementById('menu-2').addEventListener('click', function () {
    document.getElementById('menu-2').classList.toggle('active');
    document.getElementById('menu-1').classList.toggle('active');

    document.getElementById('p1').classList.toggle('enable');
    document.getElementById('p2').classList.toggle('enable');

    document.getElementById('p1').classList.toggle('able');
    document.getElementById('p2').classList.toggle('able');
});
