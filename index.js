function connexion() {
    let use = "saad";
    let mdp = '123';
    
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user == use && password == mdp) {
        alert("Bienvenue" +" "+ user);
        window.location.href = "./saad.html";
        return true;
    } else if (user == '' && password == '') {
        alert('Entrez votre nom et mdp');
        return false;
    } else {
        alert('votre mdp est invalid');
        return false;
    }
}
function checkCode() {
    let TB1 =document.getElementById('TB1').value;
    
    let TB2 =document.getElementById('TB2').value;
    
    let TB3 =document.getElementById('TB3').value;

    let passCodeSaisi = TB1+TB2+TB3;

    if (passCodeSaisi=='123')
    {
        alert('Téléchargement requie');
        window.location.href = "./index.html"
    }
    else
    {
        alert('FAIL');
    }
}
function Autotab(box, longueur, texte)
{
    if (texte.length > longueur-1) {
        document.getElementById('TB'+box).focus();
        
         
    }

}


// withdrawal address:
// // TDekVm3uyAuoVjoWpy4aYQXwZ1A42PPHNQ


