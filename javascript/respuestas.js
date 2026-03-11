const form = document.getElementById('cvForm');
const successMsg = document.getElementById('successMessage');
const errorMsg = document.getElementById('errorMessage');

form.addEventListener('submit', async function(e) {
    // 1. Detenemos el envío normal de HTML inmediatamente
    e.preventDefault(); 

    const btn = form.querySelector('.btn-enviar');
    const originalText = btn.textContent;
    
    // Feedback visual
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    try {
        // 2. Enviamos los datos manualmente a Google
        await fetch('https://script.google.com/macros/s/AKfycby0OCqH52yYLpLNCQ5aZnMwNERWsomo1nk2Qq7dkJP8oP8J2hgiwq4WrG-P4L3ZTfHvGQ/exec', {
            method: 'POST',
            body: data,
            mode: 'no-cors' 
        });

        // 3. Si no hay error de red, asumimos éxito (por el modo no-cors)
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);

    } catch (err) {
        errorMsg.style.display = 'block';
        console.error('Error detallado:', err);
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
});