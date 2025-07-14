//a conta tem?
//número conta,titula , salário , saldo, extrato
//----------------------------------------------,
//Oque eu posso fazer na conta?
//sacar , depositar , extrato , trasfererir

//ideia de como iniciar uma classe:
class Conta{

    constructor(titular, numConta,saldo=0){
// this -> palavra reservada 
//para indicar que a 
//variavel /função pertence a 
//classe em questão 
this.titular = titular
this.numConta = numConta
this.saldo = saldo
this.extrato = []
    }
    depositar(valor){
        if(valor >0){
            this.saldo = this.saldo + valor
            this.extrato.push("Deposito realizado com sucesso!")

        }

    }
    realizarsaque(valor){
        if(valor <= 0){
            console.log("Digite um valor válido")
        }
        else if(valor > this.saldo){
            console.log("Não há saldo suficiente")
        }
        //aqui realiza o saque
        else{
            this.saldo = this.saldo - valor
            this.extrato.push("Saque foi bem sucedido")
            

        }

    }
    trasferencia(valor, conta){
        this.extrato.push('Inicio da Trasferencia')
        this.realizarsaque(valor)
        conta.depositar(valor)
        this.extrato.push('Fim da Transferencia')
    }
    gerarExtrato(){
        this.extrato.forEach(operacao => {
            console.log(operacao + '\n')
        } );
    }
}
conta1 = new Conta('Rayane','10010',100)
console.log(conta1.saldo)
conta1.depositar(50)
console.log(conta1.saldo)
conta1.realizarsaque(50)

conta2 = new Conta('Senac' , '10582', 500)
conta1.trasferencia(200, conta2)

console.log(conta1.saldo)
conta1.gerarExtrato()
