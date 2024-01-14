class Personagem{

    constructor(nome, idade, tipo, habilidade){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.habilidade = habilidade;
        
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.habilidade}`);
    }
}

let Guerreiro = new Personagem ("HSOP", "26", "guerreiro", "espada");
let Ninja = new Personagem ("OPKD", "24", "ninja", "shuriken");


Guerreiro.atacar();
Ninja.atacar();