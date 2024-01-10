class Person{
 #healthRate

    constructor(fullName,Money,sleepMood){
        this.fullName=fullName;
        this.Money=Money;
        this.sleepMood=sleepMood;
       
    };

    sleep(hours){
        if (hours==7) {
          console.log (this.sleepMood="happy") ;       
         } 
         if (hours<7) {
             this.sleepMood="tired"    
         }   
         if (hours>7) {
             this.sleepMood="lazy"    
         }
    };
    gethealthRate(){
        return this.#healthRate
    }
    sethealthRate(value){
       while (value<100  && value>0) {
        this.#healthRate=value
        break;
       }   
    }
    

    Eat(meals){
        if (meals==3) {
            this.sethealthRate(100);       
         } 
         if (meals==2) {
             this.sethealthRate(75);    
         }   
         if (meals==1) {
             this.sethealthRate(50);    
         }
    };

    buy(items){
        this.Money -= items * 10;
    } 
}
// Salary: Property must be 1000 or more
//• Health rate: Property must be between 0 and 100

class Employee extends Person{
    //declare private members
 #salary
 static id=0

constructor(fullName, Money,sleepMood,workmood,ismanager){

    super(fullName , Money , sleepMood ) 
    this.id=++Employee.id;
    this.workmood=workmood;
    this.ismanager=ismanager 

    this.email=`${this.fullName} @iti.gov.eg`
}

getsalary(){
    return this.#salary
}
setsalary(value){
    this.#salary=value
    if (value<1000) {
        this.#salary=1000  
    }

}


Work(workmood){
    if (this.workmood===8) {
        console.log("happy")    
    }
    else if (this.workmood>8) {

      console.log("tierd")  
    }
    else if (this.workmood<8) {

        console.log("lazy")  
      }
}


}
/*
//const yousef=new Employee(fullName="yousef alsayed",Money= 25000,sleepMood= 8,healthRate=100,id=2020,workmood=9,salary=20000)
//const yousef = new Employee("yousef alsayed", 25000, 8, 100, 2020, 9, 20000);

// Call the correct methods
yousef.sleep(3);
yousef.Eat(4);

// Call the method from the Employee class
yousef.Work(12);

console.log(yousef.email);
yousef.setsalary(1500)
console.log(yousef.getsalary())
console.log(yousef);
*/
class Office{

constructor(name,employess){
    this.name=name;
    this.employess=employess;

}

getallemployee(){
    return this.employess;
}

getEmployee(empId){
    for (const employee of this.employess) {
        if (employee.id===empId){
          if (employee.ismanager) {
            console.log({
                id:employee.id,
                email:employee.email,
                workmood:employee.workmood,
                ismanager:employee.ismanager
            }
            )
        }else{
            console.log(employee)
        
          }
          break;
            
        }
        else{
            console.log("employee not found")
        }
    }


}

hire(emp){
    this.employess.push(emp)
}

fire(empId){

    for (let i = 0; i < this.employess.length; i++) {
        const employee = this.employess[i];
        if (employee.id === empId) {
            this.employess.splice(i, 1);
            console.log(`Employee with ID ${empId} has been fired.`);
        } else {
            console.log(`Employee with ID ${empId} not found.`);
        } 
     }
    }
}


const emp1=new Employee("Yousef Alsayed",25000,"good","tierd","True")

const emp2=new Employee("ahmed mohamed",30000,"good","tierd","false")

const emp3=new Employee("mohamed ahmed",35000,"good","tierd","True")


var emps=[emp1,emp2]

const off =new Office("the office",emps)

//console.log(off)
//console.log(off.getallemployee());
console.log(off.getEmployee(2));
off.hire(emp3);
off.fire(1)
console.log(off.getallemployee())

const employees = [];
let continueLoop = true;
while (continueLoop) {
   
    const choice = window.prompt(`
    Menu:   
    1. Add Manager 
    2. Add Normal Employee 
    3. Quit 
    Enter the number of choice: 
    `);

    switch (choice.toLowerCase()) {
        case "1":
            const managerName = prompt("Enter manager's name: ");
            const managerAge = prompt("Enter manager's age: ");
            const manager = new Employee(managerName, managerAge);
            employees.push(manager);
            alert("Manager added successfully.");
            break;
        case "2":
            const employeeName = prompt("Enter employee's name: ");
            const employeeAge = prompt("Enter employee's age: ");
            const employee = new Employee(employeeName, employeeAge);
            employees.push(employee);
            alert("Normal employee added successfully.");
            break;
        case "3":
            alert("Quitting the application.");
            continueLoop=false
            break;
        default:
            console.log("Invalid choice. Please enter 'mngr', 'nrml', or 'q'.");

    }
    console.log(employees)
}










