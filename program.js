function User(name, email){
    this.name = name;
    this.email = email;
}

var user = new User("Juan", "juan@makeitreal.camp");
console.log(user.name);
console.log(user.email);