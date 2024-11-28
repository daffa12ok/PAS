document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
    q1: "Bersifat autotrof",  
    q2: "Askospora",  
    q3: "Meningkatkan luas permukaan untuk penyerapan nutrisi",  
    q4: "Agaricus",  
    q5: "Hifa ektotrof berada di permukaan akar, sedangkan endotrof menembus dinding sel akar",  
    q6: "Plasmogami",  
    q7: "Plasmogami",  
    q8: "Ascokarp",  
    q9: "Zigospora dihasilkan melalui plasmogami dan kariogami",  
    q10: "Mengurangi jumlah kromosom menjadi haploid",  
    q11: "Zigospora",  
    q12: "Menyediakan air dan mineral untuk tanaman",  
    q13: "Sporulasi",  
    q14: "Makanan berupa hasil fotosintesis",  
    q15: "Memiliki spora yang dapat bergerak (zoospora)",  
    q16: "Zygomycota",  
    q17: "Trichoderma melindungi akar dari serangan patogen",  
    q18: "Haploid",  
    q19: "Mereka sangat sensitif terhadap polusi udara",  
    q20: "Reproduksi seksual membutuhkan kariogami dan meiosis, sedangkan aseksual tidak"
  };

  let score = 0;
  const form = document.getElementById("quizForm");
  const resultDiv = document.getElementById("result");

  // Periksa setiap jawaban
  for (const question in answers) {
    const userAnswer = form.elements[question];

    if (userAnswer) {
      let selectedAnswer = "";

      // Jika input adalah radio button
      if (userAnswer.type === "radio") {
        const selectedRadio = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedRadio) {
          selectedAnswer = selectedRadio.value;
        }
      } else if (userAnswer.type === "text" || userAnswer.type === "textarea") {
        // Jika input adalah text atau textarea
        selectedAnswer = userAnswer.value.trim();
      }

      // Bandingkan jawaban pengguna dengan jawaban yang benar
      if (selectedAnswer === answers[question]) {
        score++;
      }
    }
  }

  // Tampilkan hasil
  const totalQuestions = Object.keys(answers).length;
  resultDiv.innerHTML = `Kamu menjawab benar ${score} dari ${totalQuestions} soal.`;
});
