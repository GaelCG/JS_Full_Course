let user = {
    id: 1,
    name: 'John',
    age: 30
};
for (let key in user) {
    console.log(key, user[key]);
}

for(let key in user){
    console.log(key, user[key]);
}