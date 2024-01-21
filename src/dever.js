var nome =['Natalia','Jorge','Lucas'];
var alunos = nome.map(function(item){
    return {
        nome:item,
        nota: 7
    }
    
})

alunos.push({
    nome:'Sergio',
    nota: 6
});
alunos.push({
    nome:'Lúcio',
    nota: 4
})

function notaMaior(item) {
    return item.nota === 6 || item.nota > 6;
  };

var aluno =alunos.filter(notaMaior);
console.log(aluno);