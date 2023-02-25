// OOP: Nesne Tabanlı Programlam a
// Object

//Soru 1
let soru1 = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}


//Soru 2
let soru2 = {
    soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Nuget",
        c: "Npm"
    },
    dogruCevap: "b",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}

//Soru 1 Emir
console.log(soru1.soruMetni);
console.log(soru1.cevabiKontrolEt("c"));

//Soru 2 Emir
console.log(soru2.soruMetni);
console.log(soru2.cevabiKontrolEt("b"));

// Sınıf => nesne * 30
// ES5, 