var myArr=[];
document.getElementById('signup-btn').addEventListener('click', ()=>{
   let fullName=document.getElementById('signup-name').value;
   let signUpemail=document.getElementById('signup-email').value;
   let signUppassword=document.getElementById('signup-password').value;
  

    let signupData={
        fuullName:fullName,
        email:signUpemail,
        password:signUppassword
    }
    myArr.push(signupData);
  
    console.log(myArr);

           var h1=document.getElementById('h1');
            h1.innerHTML="👏 Successfully Sign up";
            h1.style.backgroundColor='green';
            h1.style.color='#fff';
            h1.style.padding="5px";
            h1.style.borderRadius='5px';
   
});




document.getElementById('signin-btn').addEventListener('click', ()=>{
    
    isDataEqual();
})

function isDataEqual(){
    let signEmail=document.getElementById('signin-email').value;
     let signPassword=document.getElementById('signin-password').value;
    myArr.forEach((data) =>{
        if(signEmail==data.email && signPassword == data.password ){
            let h1=document.getElementById('h1');
            h1.innerHTML="😍 Successfully login";
            h1.style.backgroundColor='green';
            h1.style.color='#fff';
            h1.style.padding="5px";
            h1.style.borderRadius='5px';
            // console.log(signPassword,signEmail + '  ' + 'Successfully login');
        }else{
            var h1=document.getElementById('h1');
            h1.innerHTML= "😢 Sorry try again";
            h1.style.backgroundColor='grey';
            
             h1.style.color='red';
             h1.style.padding="5px";
             h1.style.borderRadius='5px';
            // console.log(signPassword,signEmail + '  ' + 'Not match User');
        }
    });
}


