// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Forma de resolução 1
let employee = {
    code: 10,
    name: 'John'
};

employee.code = 10;
employee.name = "John";

//Forma de resolução 2
let employee2: {code: number , name: string} = {
    code: 10,
    name: 'Maria',
}

//Forma de resolução 3
interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 30,
    name: 'Giovanni'
}