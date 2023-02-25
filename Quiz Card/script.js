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


document.querySelector(".btn_start").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex){
        document.querySelector(".quiz_box").classList.add("active");
        let soru = quiz.soruGetir();
        quiz.soruIndex += 1;
    } else {
        console.log("Quiz Bitti");
    }
})




