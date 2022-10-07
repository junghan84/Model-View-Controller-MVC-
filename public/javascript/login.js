const loginFormHandler = async(event) => {
   event.preventDefault();

   const username = document.querySelector("#username-login").value.trim();
   console.log(username);
   const password = document.querySelector("#password-login").value.trim();
   console.log(password)

   if(username && password){
      const response = await fetch('/api/users/login', {
         method:'POST',
         // body: JSON.stringify({username, password}),
         body: JSON.stringify({
            username: username, 
            password: password
         }),
         headers:{'Content-type': 'application/json'},
      });

      if(response.ok){
         document.location.replace('/dashboard');
      } else {
         alert('Failed to log in.');
      }
   }
};


document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

