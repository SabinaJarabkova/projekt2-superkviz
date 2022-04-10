

let poleOtazek = [
  { poradi: 'Otázka 1/4', obrazek: 'obrazky/moncicak.jpg', otazka: 'Co je ikonická hračka z 80. let?', odpoved0: 'Kočičák', odpoved1: 'Mončičák', odpoved2: 'Opičák', odpoved3: '', spravnaOdpoved: 'Mončičák' },

  { poradi: 'Otázka 2/4', obrazek: 'obrazky/pivo.jpg', otazka: 'Pro úspěšné absolvováni kurzu je potřeba...', odpoved0: 'Umět JavaScript', odpoved1: 'Chodit na pivo', odpoved2: 'Koukat na Netflix', odpoved3: '', spravnaOdpoved: 'Umět JavaScript' },

  { poradi: 'Otázka 3/4', obrazek: 'obrazky/snehurka.jpg', otazka: 'Zrcadlo, zrcadlo, kdo je nejkrásnější na světě?...', odpoved0: 'Ledová královna', odpoved1: 'Shrek', odpoved2: 'Sněhurka', odpoved3: '', spravnaOdpoved: 'Sněhurka' },

  { poradi: 'Otázka 4/4', obrazek: 'obrazky/charlie.jpg', otazka: 'Nejlepší zvíře na světe je...', odpoved0: 'Kočka', odpoved1: 'Pes', odpoved2: 'Morče', odpoved3: '', spravnaOdpoved: 'Pes' }


];

let poleOdpovedi = [];
let pocetSpravne = [];



let poradi = document.querySelector('#poradi');
let obrazek = document.querySelector('#obrazek');
let otazka = document.querySelector('#otazka');
let odpoved0 = document.querySelector('li[data-odpoved="0"]');
let odpoved1 = document.querySelector('li[data-odpoved="1"]');
let odpoved2 = document.querySelector('li[data-odpoved="2"]');
let odpoved3 = document.querySelector('li[data-odpoved="3"]');



let odpovedi = document.querySelector('#odpovedi');
let kviz = document.querySelector('#kviz');
let moznosti = document.querySelector('#moznosti');
let obsah = document.querySelector('#obsah');
let vysledek = document.querySelector('#vysledek');
let nadpisVysledek = document.querySelector('#vysledek h2');
let textVysledek = document.querySelector('#vysledek p')
let hodnoceni = document.querySelector('#hodnoceni h2');

let i = 0;



function priNacteni() {
  poradi.innerHTML = poleOtazek[i].poradi;
  obrazek.src = poleOtazek[i].obrazek;
  otazka.innerHTML = poleOtazek[i].otazka;
  odpoved0.innerHTML = poleOtazek[i].odpoved0;
  odpoved1.innerHTML = poleOtazek[i].odpoved1;
  odpoved2.innerHTML = poleOtazek[i].odpoved2;
  odpoved3.style.display = 'none';

}



function zvoleniMoznosti(event) {

  console.log(event.srcElement.id);


  if (event.srcElement.id == '0') {
      poleOdpovedi.push(poleOtazek[i].odpoved0);
  }
  else if (event.srcElement.id == '1') {
      poleOdpovedi.push(poleOtazek[i].odpoved1);
  }
  else if (event.srcElement.id == '2') {
      poleOdpovedi.push(poleOtazek[i].odpoved2);
  }
  else if (event.srcElement.id == '3') {
      poleOdpovedi.push(poleOtazek[i].odpoved3);
  }


  if (poleOdpovedi[i] == poleOtazek[i].spravnaOdpoved) {
      pocetSpravne.push('1');
  }

  i = i + 1;




  odpoved3.style.display = 'inherit';
  if (i < poleOtazek.length) {

      poradi.innerHTML = poleOtazek[i].poradi;
      obrazek.src = poleOtazek[i].obrazek;
      otazka.innerHTML = poleOtazek[i].otazka;
      odpoved0.innerHTML = poleOtazek[i].odpoved0;
      odpoved1.innerHTML = poleOtazek[i].odpoved1;
      if ((poleOtazek[i].odpoved2) == '') {
          odpovedi.removeChild(odpoved2);
      }
      else {
          odpoved2.innerHTML = poleOtazek[i].odpoved2;
      }


      if ((poleOtazek[i].odpoved3) == '') {
          odpovedi.removeChild(odpoved3);
      }
      else {
          odpoved3.innerHTML = poleOtazek[i].odpoved3;
      }




  }



  else {

      poradi.style.display = 'none';
      otazka.style.display = 'none';
      obsah.style.display = 'none';
      vysledek.classList.toggle('vysledek');

      nadpisVysledek.innerHTML = ('Tvoje hodnocení');
      textVysledek.innerHTML = `<h3>1. ${poleOtazek[0].otazka}</h3> Tvoje odpověď:  ${poleOdpovedi[0]} <br> Správná odpověď: ${poleOtazek[0].spravnaOdpoved} <h3>2. ${poleOtazek[1].otazka}</h3> Tvoje odpověď:  ${poleOdpovedi[1]} <br> Správná odpověď: ${poleOtazek[1].spravnaOdpoved}
      <h3>3. ${poleOtazek[2].otazka}</h3> Tvoje odpověď:  ${poleOdpovedi[2]} <br> Správná odpověď: ${poleOtazek[2].spravnaOdpoved} <h3>1. ${poleOtazek[3].otazka}</h3> Tvoje odpověď:  ${poleOdpovedi[3]} <br> Správná odpověď: ${poleOtazek[3].spravnaOdpoved} <br> <br>
      `;

      let uspesnost = (Math.floor((pocetSpravne.length * 100) / poleOtazek.length));

      hodnoceni.innerHTML = ('Správně: ' + pocetSpravne.length + ' ze ' + poleOtazek.length + '  otázek, úspěšnost je ' + uspesnost + ' %');


  }
}