document.addEventListener('DOMContentLoaded', function() {

    const moodSelect = document.getElementById("opciones");
    const moodImg = document.getElementById("moodImage");
    const responseIA = document.getElementById("responseIA");
    const inputNota = document.getElementById("nota")
    const submitBtn = document.getElementById("enviarNota");
    const spanError = document.getElementById("spanError")

    const moodImages = {
        muyBien : './img/shy.png',
        bien : './img/smile.png',
        neutral : './img/neutral.png',
        mal : './img/sick.png',
        muyMal : './img/sad.png',
    }

    moodSelect.addEventListener('change', function () {
        const seleccionMood = moodSelect.value;
        const urlImage = moodImages[seleccionMood];

        if (urlImage) {
            moodImg.innerHTML = `<img src="${imageUrl}" alt="${selectedMood}">`;
        } else {
            moodImg.innerHTML = "";
        }
    })


    submitBtn.addEventListener('click', async function() {
        const selectedMood = moodSelect.value;
        const note = inputNota.value;

        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mood: selectedMood,
                note: note
            })
        });

        const data = await response.json();
        alert(`Sentiment: ${data.sentiment}`);
    });
});