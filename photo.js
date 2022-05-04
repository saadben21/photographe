// let marginUpBar = document.querySelector('.dropdown-toggle');
// let navBarTaille = document.getElementById("nav");

// marginUpBar.addEventListener('click', function(){
//     navBarTaille.style.marginBottom = "75px"
// });

function connexion() {
    let use = "saadben@live.fr";
    let mdp = '123';

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user == use && password == mdp) {
        alert("Bienvenue" +" "+ user);
        window.location.href = "./index.html";
        return true;
    } else if (user == '' && password == '') {
        alert('Entrez votre nom et mdp');
        return false;
    } else {
        alert('votre mdp est mort');
        return false;
    }
}
  function showComment(){
      let name = document.getElementById('name').value;
      let message = document.getElementById('messageText').value;
        // clear input.value
      document.getElementById('name').value = '';
      document.getElementById('messageText').value = '';
    //   add date format
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let textH4 = document.createElement('h4');
        let h4 =document.getElementsByTagName("h4")
        h4[0].appendChild(textH4);
        textH4.innerHTML = name + ":"+' ' + message +'<br> '+day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec;
        textH4.classList.add("text"); 
  }
    
    
      
    