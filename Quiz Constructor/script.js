// OOP: Nesne Tabanlı Programlam a

// soru Parametresi
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

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
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "c"),
    new Soru("2-Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "c"),
    new Soru("4-Hangisi .Net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b")
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);


document.querySelector(".btn-start").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex){
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    } else {
        console.log("Quiz Bitti");
    }
})




