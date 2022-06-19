// Como podemos melhorar o esse código usando TS? 

//Minha resolução é usar enum para padronizar as profissões, depois um interface Pessoa para...
//...englobar os objetos: nome, idade e profissão, linkar cada as variavéis com Pessoa e corrigir a tipagem:

enum Profissao {
    Atriz,
    Padeiro,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

let pessoa1 : Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz,
}

let pessoa2 : Pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro

}

let pessoa3 : Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 : Pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}