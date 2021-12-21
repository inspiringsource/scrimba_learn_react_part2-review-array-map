const names = ["alice", "bob", "charlie", "danielle"]
let answer = []


console.log(names.map(name => name[0].toUpperCase() + name.slice(1)));
answer = names.map(name => name[0].toUpperCase() + name.slice(1));

console.log(answer);