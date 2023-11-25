function classificacaoRankeada(saldoVitorias,saldoDerrotas){
 const saldoTotal = saldoVitorias - saldoDerrotas;
 
 let nivel = "";

 if (saldoTotal <10){
    nivel = "Ferro";
 }else if (saldoTotal>10 && saldoTotal < 20){
    nivel = "Bronze";
 }else if (saldoTotal >21 && saldoTotal < 50){
    nivel = "Prata";
 }else if (saldoTotal >51 && saldoTotal < 80){
    nivel = "Ouro";
 }else if (saldoTotal >81 && saldoTotal <90){
    nivel = "Diamante";
 }else if (saldoTotal >91 && saldoTotal <100){
    nivel = "Lendário";
 }else if (saldoTotal > 91 && saldoTotal<101){
    nivel = "imortal";
 }
return{
    saldoTotal,
    nivel,
};
}

function exibirClassificacao(resultado){
console.log(
    'O Herói tem de saldo de ${resultado.saldoTotal} está no nível de ${resultado.nível}'
);

}
 
 // Exemplo de uso 
 const heroi = classificacaoRankeada(35,25);
 exibirClassificacao(heroi);
