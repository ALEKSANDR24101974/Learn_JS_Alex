console.log("privet")
const grom = '78.8 volt'
let grum = parseFloat(grom)
console.log(grum)
let grim = '90986889vhguhk'
console.log(parseFloat(grim))
let grym = new Date()
console.log(grym)
console.log(grym.valueOf())
grum = Number(grum)
console.log(grum + grim)
grum = grum.toString()
console.log(grum)
//glava -4 upravl ctr81
//let randomF = random(5,300);
//let f1= getRandomValues(10);
let f0 = Math.random();
console.log(f0);
//console.log(f1);
//console.log(randomF);
let amor = 50;
let belamor = 1;
while (belamor <= 10 && belamor >= 1) {
    belamor++;
    amor++;
    console.log(amor, belamor)
}
for (belamor = 0; belamor < 10; belamor++) {
    let matem = (Math.random() + 1) * 23;
    if (matem > 30) console.log(matem);
    else { console.log(matem + "-хуйня") }
}

