interface Details {
    name: string,
    designation: string,
    age: number,
    wife?: string
}

interface Developer extends Details{
    language: string[],
    salary: number
}

const employee: Developer = {
    name: 'Mizan',
    designation: 'Code world',
    age: 25,
    language: ['javascript', 'C', 'typescript'],
    salary: 20000
}