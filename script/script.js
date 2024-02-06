let min = 1;
let max = 5;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Для продвинутих : правильна відповідь ${random}`)
let convert = document.querySelector('.p-end')









function Vgadayka() {
  let inputchislo = document.querySelector('.chislo').value;
  let vvlediChislo = parseFloat(inputchislo);




  if (vvlediChislo == random) {
    convert.innerHTML = `ВИ ВГАДАЛИ :${random}`;
    console.log(`ВИ ВГАДАЛИ :${random}`);
    console.log(vvlediChislo)
  }
  else {
    console.log(vvlediChislo)

    convert.innerHTML = `НЕ ВГАДАВ число буде :${random}`;
    console.log(`НЕ ВГАДАВ число буде :${random}`);
  }

  setTimeout(function () {
    location.reload(); // перезавантаження сторінки
  }, 5000); // 30 секунд в мілісекундах
}
