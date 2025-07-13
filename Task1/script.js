
// Newsletter subscribe button handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#subscribe form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            if (email) {
                // Save to localStorage
                let subscribers = JSON.parse(localStorage.getItem('apexplanet_subscribers') || '[]');
                subscribers.push(email);
                localStorage.setItem('apexplanet_subscribers', JSON.stringify(subscribers));
                alert('Thank you for subscribing!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});
