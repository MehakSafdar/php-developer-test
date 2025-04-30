// Empty file. Add your JS logic here
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email') || '';
    if (!email) {
        console.warn('No email provided in query string');
    }
    
    const form = document.getElementById('webhookForm');
    const fullnameInput = document.getElementById('fullname');
    const submitBtn = document.getElementById('submitBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const thankYouMessage = document.getElementById('thankYouMessage');
    fullnameInput.addEventListener('input', function() {
        validateFullName();
    });
    
    function validateFullName() {
        const fullnameValue = fullnameInput.value.trim();
        const words = fullnameValue.split(/\s+/).filter(word => word.length > 0);
        
        if (words.length >= 2) {
            fullnameInput.classList.remove('is-invalid');
            fullnameInput.classList.add('is-valid');
            submitBtn.disabled = false;
            return true;
        } else {
            fullnameInput.classList.remove('is-valid');
            fullnameInput.classList.add('is-invalid');
            submitBtn.disabled = true;
            return false;
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateFullName()) {
            return;
        }
        
        loadingIndicator.classList.remove('d-none');
        submitBtn.disabled = true;
        
        const fullname = fullnameInput.value.trim();
        
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const timestamp = `${year}-${month}-${day}`;
        
        const data = {
            fullname: fullname,
            email: email,
            timestamp: timestamp
        };
        
        // Send data to webhook
        fetch('https://hooks.bushwickdigital.com/webhook/d49038e3-6365-4519-ad4f-d03784b3c121', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('devtest:devtest')
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Hide form and show thank you message
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        })
        .finally(() => {
            // Hide loading indicator
            loadingIndicator.classList.add('d-none');
            submitBtn.disabled = false;
        });
    });
});