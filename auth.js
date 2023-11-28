document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const enteredSignupUsername = document.getElementById('signupUsername').value;
    const enteredSignupPassword = document.getElementById('signupPassword').value;
  
    if (localStorage.getItem(enteredSignupUsername)) {
      alert('You are already signed up! Logging you in.');
      document.getElementById('loginUsername').value = enteredSignupUsername;
      document.getElementById('loginPassword').value = enteredSignupPassword;
      document.getElementById('loginForm').submit();
    } else {
      localStorage.setItem(enteredSignupUsername, enteredSignupPassword);
      alert('Signup successful! You are now logged in.');
      document.getElementById('authForms').style.display = 'none';
      document.getElementById('signoutBtn').style.display = 'block';
    }
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const enteredLoginUsername = document.getElementById('loginUsername').value;
    const enteredLoginPassword = document.getElementById('loginPassword').value;
  
    const storedPassword = localStorage.getItem(enteredLoginUsername);
  
    if (storedPassword === enteredLoginPassword) {
      alert('Login successful!');
      document.getElementById('authForms').style.display = 'none';
      document.getElementById('signoutBtn').style.display = 'block';
    } else {
      alert('Invalid username or password');
    }
  });
  
  document.getElementById('signoutBtn').addEventListener('click', function() {
    localStorage.removeItem(document.getElementById('loginUsername').value);
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('signoutBtn').style.display = 'none';
    alert('You have been signed out.');
  });
  
  