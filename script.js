const form = document.querySelector('.form');

form.addEventListener('submit', e => e.preventDefault());

function calc() {
  const name = document.querySelector("#name").value;
  let matricula = document.querySelector("#matricula").value;
  let pBimestre = document.querySelector("#primeirobimestre");
  let sBimestre = document.querySelector("#segundobimestre");
  let tBimestre = document.querySelector("#terceirobimestre");
  let qBimestre = document.querySelector("#quartobimestre");
  let output = document.querySelector("#output");

  let pB = Number(pBimestre.value);
  let sB = Number(sBimestre.value);
  let tB = Number(tBimestre.value);
  let qB = Number(qBimestre.value);

  let media = (pB + sB + tB + qB) / 4;

  output.innerHTML = ``;

  if (media >= 6) {
    output.innerHTML += `<p>Você foi Aprovado(a), pode comemorar!! ${name},sua média final foi ${media}</p>`;
  } else {
    output.innerHTML += `<p> Adivinha quem vai passar o natal com a professora?<br> Isso mesmo ${name}, sua média final foi ${media}</p>`;
  }
}

