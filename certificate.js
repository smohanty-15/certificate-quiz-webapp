const canvas = document.getElementById('certificateCanvas');
const ctx = canvas.getContext('2d');

const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const nameInput = document.getElementById('nameInput');
const percent = localStorage.getItem('quizPercentage') || '0';

// Indian tricolor colors
const saffron = '#FF9933';
const white = '#FFFFFF';
const green = '#138808';

function drawTricolorBackground() {
    const height = canvas.height;
    const width = canvas.width;
    const bandHeight = height / 3;

    // Top band - Saffron
    ctx.fillStyle = saffron;
    ctx.fillRect(0, 0, width, bandHeight);

    // Middle band - White
    ctx.fillStyle = white;
    ctx.fillRect(0, bandHeight, width, bandHeight);

    // Bottom band - Green
    ctx.fillStyle = green;
    ctx.fillRect(0, 2 * bandHeight, width, bandHeight);

    // Draw the Ashoka Chakra in the center of white band
    drawAshokaChakra(width / 2, bandHeight + bandHeight / 2, 60);
}

function drawAshokaChakra(cx, cy, radius) {
    ctx.strokeStyle = '#000080'; // Navy blue
    ctx.lineWidth = 3;

    // Outer circle
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // 24 spokes
    for (let i = 0; i < 24; i++) {
        let angle = (i * 15) * Math.PI / 180; // 360/24 = 15 degrees
        let xEnd = cx + radius * Math.cos(angle);
        let yEnd = cy + radius * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
    }

    // Inner circle
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.15, 0, 2 * Math.PI);
    ctx.fillStyle = '#000080';
    ctx.fill();
}

function generateCertificate() {
    const name = nameInput.value.trim();
    if (!name) {
        alert('Please enter your name to generate the certificate.');
        return;
    }

    // Clear canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    drawTricolorBackground();

    // Draw certificate border
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Title text
    ctx.fillStyle = '#000';
    ctx.font = 'bold 36px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Achievement', canvas.width / 2, 100);

    // Subtitle
    ctx.font = '20px Georgia';
    ctx.fillText('This certificate is proudly presented to', canvas.width / 2, 160);

    // Name
    ctx.font = 'bold 40px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.fillStyle = '#000080'; // Navy blue for name
    ctx.fillText(name, canvas.width / 2, 230);

    // Description
    ctx.font = '18px Georgia';
    ctx.fillStyle = '#000';
    ctx.fillText(`For demonstrating your knowledge on Independence Day.`, canvas.width / 2, 280);

    // Score
    ctx.font = '18px Georgia';
    ctx.fillText(`Your Score: ${percent}%`, canvas.width / 2, 320);

    // Date
    const dateStr = new Date().toLocaleDateString();
    ctx.font = '16px Georgia';
    ctx.fillText(`Date: ${dateStr}`, canvas.width / 2, 360);

    // Very small disclaimer at bottom center
    ctx.font = '10px Arial';
    ctx.fillStyle = '#555';
    ctx.textAlign = 'center';
    ctx.fillText(
        'This certificate does not hold any legal value; it is only a token of appreciation for your knowledge.',
        canvas.width / 2,
        canvas.height - 20
    );

    // Enable download button
    downloadBtn.disabled = false;
}

function downloadCertificate() {
    const link = document.createElement('a');
    link.download = 'Independence_Day_Certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

generateBtn.addEventListener('click', generateCertificate);
downloadBtn.addEventListener('click', downloadCertificate);
