const canvas = document.getElementById('certificateCanvas');
const ctx = canvas.getContext('2d');

function generateCertificate(name) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Completion", canvas.width / 2, 150);

    ctx.font = "20px Arial";
    ctx.fillText("This is proudly presented to", canvas.width / 2, 220);

    ctx.font = "40px Arial";
    ctx.fillText(name, canvas.width / 2, 300);

    ctx.font = "20px Arial";
    ctx.fillText("For successfully passing the quiz", canvas.width / 2, 380);

    ctx.font = "16px Arial";
    ctx.fillText("Date: " + new Date().toLocaleDateString(), canvas.width / 2, 450);

    // Print percentage
    const percent = localStorage.getItem('quizPercentage') || '';
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + percent + "%", canvas.width / 2, 500);
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    generateCertificate(name);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL();
    link.click();
});
