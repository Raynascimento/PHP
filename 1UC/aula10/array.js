
lista = ['brigadeiro','cocada','quindim']

notasDoces = [10,7.5,]

brigadeiro = ['brigadeiro', 10]

doces = [['brigadeiro',10],['cocada',7.5],['quindim',5]]


//console.log(doces)

console.table(doces) //a configuração table é recomendada somente para imprimir lista da lista 
//toda vez que se tratar de lista usar []
doces.push(['paçoca',8])
// incluir um item na lista 
console.table(doces)

doces.pop([2])
//.pop sempre tira o ultimo elemento posto.
console.table(doces)
qualDoces = doces.pop() 
//essa é basicamente uma mémoria pois , apesar de o item ter sido retirado da lista , ainda é possivel usa-lo, se quiser.
//fora isso o item deixara de existir

