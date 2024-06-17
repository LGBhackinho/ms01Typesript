interface Tache {
    labelTask: string;
    description?: string;
    date: number;
}

//permet de definir un type provenant d un autre type
let dateM : any = "29/07/sdfsdf"
let date2 : number = dateM as number; 

let task: Tache = {
    labelTask: 'tache 1',
    description:'tache',
    date:date2,
}
console.log(task)