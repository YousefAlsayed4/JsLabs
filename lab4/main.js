/*Eat(meals): (3 meals -> 100 health rate,  

    2 meals -> 75 health rate, 1 meal-> 50 health rate) 

Buy(items): (1 item -> decrees Money 10 LE)	 
*/

// function constrator

function Person(fullName,Money, sleepMood,healthRate) {
    this.fullName=fullName;
    this.Money=Money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate    
}

Person.prototype.sleep =function (hours) {
    if (hours==7) {
       this.sleepMood="happy";       
    } 
    if (hours<7) {
        this.sleepMood="tired"    
    }   
    if (hours>7) {
        this.sleepMood="lazy"    
    }
}
Person.prototype.Eat =function (meals) {
    if (meals==3) {
       this.healthRate=100;       
    } 
    if (meals==2) {
        this.healthRate=75;    
    }   
    if (meals==1) {
        this.healthRate=50;    
    }
}
Person.prototype.buy =function (items) {
    this.money -= items * 10;
}


//using classes

class Person{
    constructor(fullName,Money,sleepMood,healthRate){
        this.fullName=fullName;
        this.Money=Money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate
    };

    sleep(hours){
        if (hours==7) {
            this.sleepMood="happy";       
         } 
         if (hours<7) {
             this.sleepMood="tired"    
         }   
         if (hours>7) {
             this.sleepMood="lazy"    
         }
    };

    Eat(meals){
        if (meals==3) {
            this.healthRate=100;       
         } 
         if (meals==2) {
             this.healthRate=75;    
         }   
         if (meals==1) {
             this.healthRate=50;    
         }
    };

    buy(items){
        this.money -= items * 10;
    } 
}


//oloo

const Person={
    init(fullName,Money,sleepMood,healthRate){
        this.fullName=fullName;
        this.Money=Money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate
    },


sleep(hours){
    if (hours==7) {
        this.sleepMood="happy";       
     } 
     if (hours<7) {
         this.sleepMood="tired"    
     }   
     if (hours>7) {
         this.sleepMood="lazy"    
     }
},

Eat(meals){
    if (meals==3) {
        this.healthRate=100;       
     } 
     if (meals==2) {
         this.healthRate=75;    
     }   
     if (meals==1) {
         this.healthRate=50;    
     }
},

buy(items){
    this.Money -= items * 10;
}
}

//factory function

function Person (fullName,Money,sleepMood,healthRate) {
       return {
       fullName,
       Money,
       sleepMood,
       healthRate,

       sleep(hours) {
        if (hours === 7) {
          this.sleepMood = "happy";
        } else if (hours < 7) {
          this.sleepMood = "tired";
        } else {
          this.sleepMood = "lazy";
        }
      },
      eat(meals) {
        if (meals === 3) {
          this.healthRate = 100;
        } else if (meals === 2) {
          this.healthRate = 75;
        } else if (meals === 1) {
          this.healthRate = 50;
        }
      },
      buy(items) {
        this.money -= items * 10;
      },
    };
}
   
     
