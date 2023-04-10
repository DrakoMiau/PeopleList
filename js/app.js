const people = [
    new Person('Deiver', 'Bernal'),
    new Person('Paula', 'Lopez')
];
function addPerson() {
    let newPerson = new Person(document.getElementById('name').value, document.getElementById('lastName').value);
    if (document.getElementById('name').value != '' && document.getElementById('lastName') != '') {
        people.push(newPerson);
        showPeople();
    } else{
        console.log('No hay informacion que agregar')
    }

}
function showPeople() {
    let text = '';
    for (let person of people) {
        console.log(person);
        text += `<li>${person.name} ${person.lastName}</li>`;
    }
    document.getElementById('list').innerHTML = text;
}
