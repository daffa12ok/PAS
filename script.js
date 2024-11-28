document.getElementById("submitBtn").addEventListener("click", function() {
  const answers = {
q1: "Plasmogami",  
q2: "Kariotogami",  
q3: "Bersifat heterotrof dan tidak dapat berfotosintesis",  
q4: "Hifa",  
q5: "Zygomycota",  
q6: "Plasmogami",  
q7: "Plasmogami",  
q8: "Ascokarp",  
q9: "Zigospora dihasilkan melalui plasmogami dan kariogami",  
q10: "Mengurangi jumlah kromosom menjadi haploid",  
q11: "Zygomycota",  
q12: "Menyediakan air dan mineral untuk tanaman",  
q13: "Meiosis",  
q14: "Makanan berupa hasil fotosintesis",  
q15: "Memiliki spora yang dapat bergerak (zoospora)",  
q16: "Ascomycota",  
q17: "Trichoderma melindungi akar dari serangan patogen",  
q18: "Haploid",  
q19: "Mereka sangat sensitif terhadap polusi udara",  
q20: "Reproduksi seksual membutuhkan kariogami dan meiosis, sedangkan aseksual tidak",
  };

  let score = 0;
  const form = document.getElementById("quizForm");
  const resultDiv = document.getElementById("result");

  // Periksa setiap jawaban
  for (const question in answers) {
    const userAnswer = form.elements[question].value;
    if (userAnswer === answers[question]) {
      score++;
    }
  }

  // Tampilkan hasil
  const totalQuestions = Object.keys(answers).length;
  resultDiv.innerHTML = `Kamu menjawab benar ${score} dari ${totalQuestions} soal.`;
});
