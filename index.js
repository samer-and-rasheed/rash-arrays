const http = require('http');
//create a server object:
http.createServer(function (req, res) {
    res.write('hello papa'); 
    res.end(); 
  }).listen(3000);
  

const arr = [
    { name: 'elif', birthday: '20.9.2008', nationality: 'turkey' },
    { name: 'nico', birthday: '18.5.2008', nationality: 'turkey' },
    { name: 'selbi', birthday: '16.8.2008', nationality: 'germany' },
    { name: 'marwa', birthday: '9.10.2008', nationality: 'germany' },
    { name: 'timo', birthday: '19.8.2008', nationality: 'syria' },
    { name: 'carlos', birthday: '28.10.2008', nationality: 'syria' },
];
const arr2 = ["elif", "timo", "carlos", "selbi", "marwa", "nils"]
function sortAsc() {
    arr2.sort();
}
function sortDesc() {
    arr2.sort();
    arr2.reverse();
}

function search(name) {
    return arr2.indexOf(name);
}

function replace(oldName, newName) {
    const index = search(oldName);
    if (index > -1) {
        arr2[index] = newName;
        console.log(arr2);    }
    else {

        console.log('name is not found');
    }
}

function loop() {
for (let i = 0;i < arr2.length;i++) {

    console.log('student  '+ i +' '+arr2[i])
    console.log(`student ${i} : ${arr2[i]}`)
}
}

function loopWithForEach() {
    const names = [];
    arr.forEach(function(item) {
        names.push(`birthday of ${item.name} is ${item.birthday}`)
    })
    const obj = {values:names}
    const js = JSON.stringify(obj);
    return js;

}


 //loopWithForEach();
