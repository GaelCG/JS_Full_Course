const user = {
    name: "John",
    lastname: "Doe",
    getFullName: function() {
        return `${this.name} ${this.lastname}`;
    }
}
console.log(user.getFullName()); // John Doe