
person = {name:'john',age:30,city:'newyork'}

function display(){
    const myarray = Object.values(person)
    document.getElementById('demo').innerHTML = myarray;
}
