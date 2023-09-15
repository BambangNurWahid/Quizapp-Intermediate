const questions = [
    {
        question: "(Aqila sangat antusias mengikuti lomba debat bahasa Indonesia), Variasi yang dapat menggatikan kata bercetak miring pada kalimat tersebut adalah?",
        answers: [
            {
                text: "Bersemangat.",
                correct: true,
            },
            {
                text: "Tertarik.",
                correct: false,
            },
            {
                text: "Senang.",
                correct: false,
            },
            {
                text: "Bangga",
                correct: false,
            },
        ],
    },
    {
        question: "(Tubuh yang tetap bergerak akan menghasilkan energi yang cukup dari hasil pembakaran atau ... makanan yang ada di dalam tubuh), Istilah yang tepat untuk melengkapi kalimat rumpang tersebut adalah",
        answers: [
            {
                text: "Oksalat",
                correct: false,
            },
            {
                text: "Oksidasi",
                correct: true,
            },
            {
                text: "Reduksi",
                correct: false,
            },
            {
                text: "Oksitoksin",
                correct: false,
            },
        ],
    },
    {
        question: "urutan bilangan 0,4; 35%; 3/8; 0,39 mulai dari yang terbesar adalah",
        answers: [
            {
                text: "0,39; 3/8; 35%; 0,4",
                correct: false,
            },
            {
                text: "0,39; 35%; 3/8; 0,4;",
                correct: false,
            },
            {
                text: "0,4; 0,39; 35%; 3/8;",
                correct: false,
            },
            {
                text: "0,4; 0,39; 3/8; 35%;",
                correct: true,
            },
        ],
    },
    {
        question: "Hasan menabung sebesar Rp600.000,00 pada sebuah bank yang memberikan suku bunga tunggal 6% pertahun. setelah beberapa waktu tabungan hasan menjadi Rp642.000,00. lama Hasan menabung di bank tersebut adalah",
        answers: [
            {
                text: "12 bulan.",
                correct: false,
            },
            {
                text: "14 bulan.",
                correct: true,
            },
            {
                text: "15bulan.",
                correct: false,
            },
            {
                text: "18bulan.",
                correct: false,
            },
        ],
    },
    {
        question: "Besaran-besaran pokok berikut yang menyusun besaran turunan usaha adalah",
        answers: [
            {
                text: "panjang, massa, dan jumlah zat",
                correct: false,
            },
            {
                text: "panjang, waktu, dan jumlah zat.",
                correct: false,
            },
            {
                text: "panjang, massa, dan waktu.",
                correct: true,
            },
            {
                text: "panjang, massa, dan suhu.",
                correct: false,
            },
        ],
    },
    {
        question: "suhu suatu benda diukur dengan termometer Reamur menunjukkan angka 72°R. jika suhu benda tersebut diukur dengan  termometer Fahrenheit, skalanya akan menunjukkan angka...",
        answers: [
            {
                text: "32°F",
                correct: false,
            },
            {
                text: "64°F",
                correct: false,
            },
            {
                text: "162°F",
                correct: false,
            },
            {
                text: "194°F",
                correct: true,
            },
        ],
    },
    {
        question: " Winata and Andrian .... a news program on television last week",
        answers: [
            {
                text: "Watch",
                correct: false,
            },
            {
                text: "Watches",
                correct: false,
            },
            {
                text: "Watched",
                correct: true,
            },
            {
                text: "Is watching",
                correct: false,
            },
        ],
    },
    {
        question: "Amanda...Some new information about the social program in the refuge in Centeral Java in our meeting last week.",
        answers: [
            {
                text: "Shares",
                correct: false,
            },
            {
                text: "Share",
                correct: false,
            },
            {
                text: "Shared",
                correct: true,
            },
            {
                text: "Sharing",
                correct: false,
            },
        ],
    },
    {
        question: "Dalam surat lamaran kerja, Kalimat penutup yang tepat adalah...",
        answers: [
            {
                text: "Besar harapan saya Bapak sudi menerimanya.",
                correct: false,
            },
            {
                text: "Terima kasih atas perhatiannya, semoga saya diterima.",
                correct: false,
            },
            {
                text: "Jika Bapak berkenan, saya haturkan banyak terima kasih.",
                correct: false,
            },
            {
                text: "Atas perhatiannya, saya sampaikan terima kasih banyak.",
                correct: true,
            },
        ],
    },
    {
        question: "Tanggapan penolakan yang tepat adalah...",
        answers: [
            {
                text: "Saya kurang sependapat dengan Bapak, karena saya kurang yakin",
                correct: true,
            },
            {
                text: "Wah, pendapat itu tidak benar",
                correct: false,
            },
            {
                text: "Saya tidak setuju sebab hal itu tidak benar",
                correct: false,
            },
            {
                text: "Saya tidak sependapat dengan Anda yang tidak masuk akal",
                correct: false,
            },
        ],
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();