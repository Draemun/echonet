function attemptLogin() {
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');
    
    errorDiv.style.display = 'none';
    
    if (password === 'Eternity') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-interface').style.display = 'block';
    } else {
        errorDiv.style.display = 'block';
        document.getElementById('password').value = '';
    }
    return false;
}
