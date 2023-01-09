export class Students {
    name?:string;
    age?:number;
    city?:string;

    constructor(name?:string,age?:number,city?:string){
        
        this.name=name;
        this.age=age;
        this.city=city;

    }
    

    getName(){
        return this.name;
    }
    setName(name:string){
        this.name=name;
    }
    getAge(){
        return this.age;
    }
    setAge(age:number){
        this.age=age;
        
    }
    getCity(){
        return this.city;
    }
    setCity(city:string){
        this.city=city;

    }
}
export class Manager extends Students{
    constructor(name:string,age:number,city:string){
        super(name,age,city);
    }
}
