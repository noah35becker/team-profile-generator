
class Employee{
    constructor(id, name, email){
        [this.id, this.name, this.email] = [id, name, email];
        this.role = 'Employee';
    }

    getID(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}


module.exports = Employee;