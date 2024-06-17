interface Taches {
    labelTask: string;
    description?: string;
    date: Date;
    days:number;
}



let task1: Taches = {
    labelTask: 'tache 1',
    description:'tache',
    date:new Date,
    days:7,
}
let task2: Taches = {
    labelTask: 'tache 2',
    description:'tache2',
    date:new Date,
    days:5,
}
let task3: Taches = {
    labelTask: 'tache 3',
    description:'tache3s',
    date:new Date,
    days:2,
}

let taskList: Array<Taches> = []
taskList.push(task1);
taskList.push(task2);
taskList.push(task3);

for (const task of taskList) {
    if (task.days > 4){
        console.log(task.labelTask);
        console.log(task.description);
        console.log(task.days);
        console.log(task.date);
    }
    
}




const result = taskList.filter((task) => task.days > 4);

for (const task of result) {
    console.log(task.description);
}

