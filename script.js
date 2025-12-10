let questions = [
    {
        q: "kiya average 70 kg ke insaan ke  jism me itna carbon hota hai ke usse aik car battery ban jaye?",
        options: ["16g", "1kg", "pencil ki lead jitna", "16kg"],
        correct: 1
    },
    {
        q: "Human body me tol ribs kitni hoti hain?",
        options: ["20", "24", "16", "32"],
        correct: 1
    },
    {
        q: "Blood ka red color kis wajah se hota hai?",
        options: ["Iron", "Calcium", "Oxygen", "Vitamin C"],
        correct: 0
    },
    {
        q: "Brain ka protection kaun karta hai?",
        options: ["Skull", "Ribs", "Spine", "Muscles"],
        correct: 0
    },
    {
        q: "Human heart ke kitne chambers hote hain?",
        options: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        q: "kiya din me 8 glass paani peena zaroori hai ?",
        options: ["han", "doctor ka order", "jism ka signal dekho", "gym walo ke liye "],
        correct: 2
    },
    {
        q: "Body ko energy kaun deta hai?",
        options: ["Carbs", "Water", "Calcium", "Salt"],
        correct: 0
    }
];

let index = 0;

function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.q;

    let optBox = document.getElementById("options");
    optBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.className = "mcq-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        optBox.appendChild(btn);
    });
}

function checkAnswer(i) {
    let feedback = document.getElementById("feedback");

    if (i === questions[index].correct) {
        feedback.innerText = "Wah kia baat hai! 🎉 Sahi jawab!";
        feedback.style.color = "green";
        document.getElementById("nextBtn").style.display = "block";
    } else {
        feedback.innerText = "Fari 😭 galat jawab hai, dobara try karo!";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    index++;
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";

    if (index < questions.length) {
        loadQuestion();
    } else {
        window.location.href = "/surprise";
    }
}

function spawnHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 90 + "%";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }, 500);
}

window.onload = () => {
    if (document.getElementById("question")) {
        loadQuestion();
    }
}
