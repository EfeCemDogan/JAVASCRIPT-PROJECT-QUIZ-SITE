// OOP: Nesne Tabanlı Programlam a
// Object

//Soru 1
// let soru1 = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }


//Soru 2
// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// Sınıf, Construcktor => nesne * 30
// ES5, 



// soru Parametresi
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabıKontrolEt = function(cevap) {
        return cevap === this.dogruCevap
    }
}


// Soru 1 
let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"}, "c")

// Soru 2 
let soru2 = new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b")

// Sorular
let sorular = [
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b")
]

// // Sorular Grubunu Çağırma Emiri
// console.log(sorular[0].soruMetni);

// // Soruları Döngüde yazdırma Emri
// for(let s of sorular) {
//     console.log(s.soruMetni);
// }

//Soru 1 Emri
console.log(soru1.soruMetni);
console.log(soru1.cevapSecenekleri);
console.log(soru1.dogruCevap);
console.log(soru1.cevabıKontrolEt("c"));
console.log(soru2.cevabıKontrolEt("b"));

// //Soru 2 Emri
// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// console.log(soru2.dogruCevap);