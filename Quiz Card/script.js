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
    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());
})

document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
    } else {
        console.log("quiz bitti");
    }
});

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}




