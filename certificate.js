const canvas = document.getElementById('certificateCanvas');
const ctx = canvas.getContext('2d');

const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const nameInput = document.getElementById('nameInput');
const percent = localStorage.getItem('quizPercentage') || '0';

// Tricolor base colors with low opacity for subtle background
const saffron = 'rgba(255, 153, 51, 0.15)';
const white = 'rgba(255, 255, 255, 0.15)';
const green = 'rgba(19, 136, 8, 0.15)';

function drawSubtleTricolorBackground() {
    const height = canvas.height;
    const width = canvas.width;
    const bandHeight = height / 3;

    // Top band - light saffron
    ctx.fillStyle = saffron;
    ctx.fillRect(0, 0, width, bandHeight);

    // Middle band - light white
    ctx.fillStyle = white;
    ctx.fillRect(0, bandHeight, width, bandHeight);

    // Bottom band - light green
    ctx.fillStyle = green;
    ctx.fillRect(0, 2 * bandHeight, width, bandHeight);

    // Draw soft vignette (dark edges)
    let gradient = ctx.createRadialGradient(
        width / 2, height / 2, width / 2 * 0.5,
        width / 2, height / 2, width / 2
    );
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.15)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw subtle Ashoka Chakra in middle white band with light stroke
    drawAshokaChakra(width / 2, bandHeight + bandHeight / 2, 60, 'rgba(0,0,128,0.1)', 1);
}

function drawAshokaChakra(cx, cy, radius, strokeStyle = '#000080', lineWidth = 3) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;

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
    ctx.fillStyle = strokeStyle;
    ctx.fill();
}

function generateCertificate() {
    const name = nameInput.value.trim();
    if (!name) {
        alert('Please enter your name to generate the certificate.');
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Subtle tricolor background + vignette
    drawSubtleTricolorBackground();

    // Decorative border with gradient stroke
    let borderGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    borderGradient.addColorStop(0, '#FF9933'); // saffron
    borderGradient.addColorStop(0.5, '#138808'); // green
    borderGradient.addColorStop(1, '#000080'); // navy blue

    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 8;
    ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);

    ctx.textAlign = 'center';

    // Title: Certificate of Achievement
    ctx.fillStyle = '#000080'; // navy blue
    ctx.font = 'bold 56px Georgia';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 5;
    ctx.fillText('Certificate of Achievement', canvas.width / 2, 120);

    ctx.shadowColor = 'transparent'; // reset shadow

    // Subtitle
    ctx.font = 'italic 28px Georgia';
    ctx.fillStyle = '#444';
    ctx.fillText('This certificate is proudly presented to', canvas.width / 2, 190);

    // Name (largest font)
    ctx.font = 'bold 72px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    // Gradient fill for name
    let nameGradient = ctx.createLinearGradient(canvas.width / 2 - 200, 0, canvas.width / 2 + 200, 0);
    nameGradient.addColorStop(0, '#FF9933');  // saffron
    nameGradient.addColorStop(0.5, '#138808'); // green
    nameGradient.addColorStop(1, '#000080');  // navy blue
    ctx.fillStyle = nameGradient;
    ctx.fillText(name, canvas.width / 2, 280);

    // Description text
    ctx.font = '24px Georgia';
    ctx.fillStyle = '#222';
    ctx.fillText('For demonstrating your knowledge on Independence Day.', canvas.width / 2, 350);

    // Score
    ctx.font = '22px Georgia';
    ctx.fillStyle = '#555';
    ctx.fillText(`Your Score: ${percent}%`, canvas.width / 2, 390);

    // Date
    ctx.font = '20px Georgia';
    ctx.fillStyle = '#666';
    const dateStr = new Date().toLocaleDateString();
    ctx.fillText(`Date: ${dateStr}`, canvas.width / 2, 430);

    // Very small disclaimer at bottom center
    ctx.font = '12px Arial';
    ctx.fillStyle = '#888';
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
