// OOP: Nesne Tabanlı Programlam a

// soru Parametresi
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    console.log(this);
}

Soru.prototype.cevabıKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

// Soru 1 
let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"}, "c")

// Soru 2 
let soru2 = new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b")

// Sorular
let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b")
]


console.log(soru1.cevabıKontrolEt("c"));
