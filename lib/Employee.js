
class Employee{
    constructor(name, email, id){
        [this.name, this.email, this.id] = [name, email, id];
        this.role = 'Employee';
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getID(){
        return this.id;
    }

    getRole(){
        return this.role;
    }
}


module.exports = Employee;