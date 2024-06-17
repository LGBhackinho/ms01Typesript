
interface TachesAutre {
    labelTask: string;
    description?: string;
    date: Date;
    days:number;
}

let task10: TachesAutre = {
    labelTask: 'tache 1',
    description:'tache',
    date:new Date,
    days:7,
}
let task20: TachesAutre = {
    labelTask: 'tache 2',
    description:'tache2',
    date:new Date,
    days:5,
}
let task30: TachesAutre = {
    labelTask: 'tache 3',
    description:'tache3s',
    date:new Date,
    days:2,
}

let taskList10: Array<TachesAutre> = []
taskList10.push(task10);
taskList10.push(task20);
taskList10.push(task30);

let daysTotal = 0;

for (const task of taskList10) {
    if (task.days > 4){
        daysTotal = somme(daysTotal,task.days)
        
    }
    
}
console.log(`Le nombre total de jour est ${daysTotal}`);

function somme(Total:number , daysAdd:number):number {
    return Total+daysAdd
}







