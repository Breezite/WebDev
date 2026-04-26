document.addEventListener('DOMContentLoaded', () =>{
   const form = document.querySelector('form');
   form.addEventListener('submit', function(event){
      event.preventDefault();

      const error= document.getElementById('error');
      error.innerHTML='';
      let errors=[];

      const firstName=document.getElementsByName('firstName')[0]?.value.trim();
      const lastName=document.getElementsByName('lastName')[0]?.value.trim();
      const dob=document.getElementsByName('dob')[0]?.value.trim();
      const phone=document.getElementsByName('phone')[0]?.value.trim();

      if(firstName.length <2 || lastName.length <2){
         errors.push("First name or last name are too short")
      }

      const born =new Date(dob);
      const today=new Date();
      if(born >= today){
         errors.push("Can't be born in the future");
      }
      if(phone.length <8 || phone.length >15){
         errors.push("Please enter a valid phone number");
      }

      if(errors.length >0){
         error.innerHTML =errors.join('<br>');       
      }
      else{
         form.innerHTML="<p>Application Submitted. Good Luck!</p>";
      }
   });
});