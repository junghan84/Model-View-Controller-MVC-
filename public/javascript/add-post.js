const newFormHandler = async (event) => {
   event.preventDefault();
 
   const title = document.querySelector('#post-title').value.trim();
   const content = document.querySelector('#content').value.trim();
   
   console.log(title);
   console.log(content);

 
 const response = await fetch ('/api/posts',{
   method:'Post',
   body:JSON.stringify({
      title,
      content
   }),
   headers:{'Content-type': 'application/json'},
   
 }) 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert(response.statusText);
     }
   };

 
 document
   .querySelector('.new-post-form')
   .addEventListener('submit', newFormHandler);
