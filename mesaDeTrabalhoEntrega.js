//1. Pense na melhor forma de representar tais contas, e por quê? (discutir coma
//equipe sobre as diferentes estruturas e qual é a mais conveniente)

function Conta(numConta, tipoConta, saldoConta, titularConta){
    this.numero = numConta;
    this.tipo = tipoConta;
    this.saldo = saldoConta;
    this.titular = titularConta;
}

// 2. Uma vez decidido qual será o tipo de dados para representar as contas das
// contas, crie uma conta de teste e verifique se as propriedades mencionadas
// acima são criadas corretamente.

let umaConta = new Conta(123456, "Poupança", 1500, "Monalisa");

console.log(umaConta);

//3. Agora que sabemos como representar usuários e suas contas, o cliente nosforneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.

let clientes = [
{
    "numero" : 5486273622,
    "tipo" : "Conta corrente",
    "saldo" : 27771,
    "titular" : "Abigael Natte",
},

{
    "numero" : 1183971869,
    "tipo" : "Conta poupança",
    "saldo" : 8675,
    "titular" : "Ramon Connell",
},

{
    "numero" : 9582019689,
    "tipo" : "Conta poupança",
    "saldo" : 27363,
    "titular" : "Jarret Lafuente",
},

{
    "numero" : 1761924656,
    "tipo" : "Conta poupança",
    "saldo" : 32415,
    "titular" : "Ansel Ardley",
},

{
    "numero" : 7401971607,
    "tipo" : "Conta poupança",
    "saldo" : 18789,
    "titular" : "Jacki Shurmer",
},

{
    "numero" : 630841470,
    "tipo" : "Conta corrente",
    "saldo" : 28776,
    "titular" : "Jobi Mawtus",
},

{
    "numero" : 4223508636,
    "tipo" : "Conta corrente",
    "saldo" : 2177,
    "titular" : "Thomasin Latour",
},

{
    "numero" : 185979521,
    "tipo" : "Conta poupança",
    "saldo" : 25994,
    "titular" : "Lonnie Verheijden",
},

{
    "numero" : 3151956165,
    "tipo" : "Conta corrente",
    "saldo" : 7601,
    "titular" : "Alonso Wannan",
},

{
    "numero" : 2138105881,
    "tipo" : "Conta poupança",
    "saldo" : 33196,
    "titular" : "Bendite Huggett",
},
];

console.log(clientes[1].titular);

// 4. A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)

let listaContas = [];

// console.log(listaDeUsuarios.push(new Conta(clientes[0].saldo)));


for (let i = 0; i < clientes.length; i++) {
    listaContas.push(new Conta(clientes[i].conta, clientes[i].tipoConta, clientes[i].saldo, clientes[i].titular) );
}

console.log(listaContas);

// 5. Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.
// 6. o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.

let Banco = {
    clientes: listaContas,
    consultarCliente: function(titular){
        console.log(this.clientes);
        console.log(titular);
    return this.consultarCliente("Alonso Wannan");
    },

// 7. Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar. O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem &quot;Depósito realizado, seu novo saldo é: xxx&quot; .

    deposito: function(titular, dinheiro){
        let clientes = this.consultarCliente(titular);
        clientes.saldo += dinheiro;
        console.log("Depósito realizado, " + titular + ", seu novo saldo é: " + dinheiro);
    }
},

//8. Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído. O método deve obter a conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx";

    // saque: function(titular, novoValor){
    //     clientes.saldo -= novoValor;
    //     if (clientes.saldo <= 0){
    //         console.log("Fundos insuficientes")
    //     }else{
    //         console.log("Extração feita com sucesso, seu novo saldo é: " + novoValor);
    //     }
    // }

    saque : function(titular, novoValor) {
        let clientes = this.consultarCliente(titular);
        clientes.saldo -= novoValor;
        if (clientes.saldo <= 0){
            console.log("Fundos insuficientes")
        }else{
            console.log("Extração feita com sucesso, " + titular + ", seu novo saldo é: " + novoValor);
        }
    }

