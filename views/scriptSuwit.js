// Pilihan komputer

function getPilihanKomputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'batu';
    if (comp >= 0.34 && comp <= 0.64) return 'kertas';
    return 'gunting'
}

function getHasil(comp, player) {
    if (player == comp) return 'DRAW';
    if (player == 'batu') return (comp == 'kertas') ? 'LOSE' : 'WIN';
    if (player == 'kertas') return (comp == 'batu') ? 'WIN' : 'LOSE';
    if (player == 'gunting') return (comp == 'kertas') ? 'WIN' : 'LOSE';
}

// const pilihan = document.querySelectorAll('li img');
// pilihan.forEach(function(pil) {
//     pil.addEventListener('click', function() {
//         const pilihanKomputer = getPilihanKomputer();
//         const pilihanPlayer = pil.className;
//         const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//         // const imgKomputer = document.querySelector('.areaComputer')
//         // imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//     })
// })



const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function() {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    console.log('comp : ' + pilihanKomputer);
    console.log('player ' + pilihanPlayer);
    console.log(hasil);

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
})

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function() {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    console.log('comp : ' + pilihanKomputer);
    console.log('player ' + pilihanPlayer);
    console.log(hasil);

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
})

const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function() {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    console.log('comp : ' + pilihanKomputer);
    console.log('player ' + pilihanPlayer);
    console.log(hasil);

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
})