document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get input values
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    // Simple validation
    if(username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
document.querySelectorAll('.textbox input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.borderBottomColor = '#FFA500';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.borderBottomColor = '#fff';
    });
});


