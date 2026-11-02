class Parquimetro {
  constructor() {
    this.tabela = [
      { tempo: 30, valor: 1.00 },
      { tempo: 45, valor: 1.50 },
      { tempo: 60, valor: 2.00 },
      { tempo: 75, valor: 2.50 },
      { tempo: 90, valor: 3.00 },
      { tempo: 105, valor: 3.50 },
      { tempo: 120, valor: 4.00 }
    ];
  }

  calcularTempo(valor) {
    let tempo = 0;
    for (const item of this.tabela) {
      if (valor >= item.valor) {
        tempo = item.tempo;
      } else {
        break;
      }
    }
    return tempo;
  }


  calcularTroco(valor) {
    let valorPago = 0;

    for (const item of this.tabela) {
      if (valor >= item.valor) {
        valorPago = item.valor;
      } else {
        break;
      }
    }
    const troco = Math.round((valor - valorPago) * 100) / 100;
    return troco;

  }
}

const parquimetro = new Parquimetro();
const inputValor = document.getElementById('valor');
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const valor = parseFloat(inputValor.value);
  const tempo = parquimetro.calcularTempo(valor);

  if (tempo === 0) {
    resultado.textContent = 'Valor insuficiente para estacionar :(';
  } else {
    const troco = parquimetro.calcularTroco(valor);
    let mensagem = `Você pode estacionar por ${tempo} minutos.`;
  if (troco > 0) {
    mensagem += `\nTroco: R$ ${troco.toFixed(2)}` .replace(".", ",");
  }

  resultado.textContent = mensagem;
}
});
