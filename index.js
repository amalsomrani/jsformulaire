
  function verif ()
  {  
    //**nom prenom
          a = formulaire.name.value;
         exp=/^[A-Z]{1}[a-z ]+$/;
        if(exp.test(a)==false ) 
     {
       alert ("Merci de saisir votre nom! la première lettre doit être majuscule! ")
       return false; 
       name.classList.add("erreur");
      }
   //**CIN
   if(formulaire.CIN.value.length !=8 || isNaN(formulaire.CIN.value))
    {alert ("champs CIN obligatoire;veuillez saisir correctement")

      return false;
     CIN.classList.add("erreur");
    }
    //** email
    else if ((formulaire.mail.value=="") ||-(formulaire.mail.value.indexof('@')==1)||
    (formulaire.mail.value.indexof('.')<0))
    {
      alert("champs mail est obligatoire vous devez le remplir correctement!")
      return false ;
     }

     //** niveau scolaire 
    else if ((!formulaire.r[0].checked)&&(formulaire.r[1].checked==false)&&(formulaire.r[2].checked==false))
    {alert ("choisir votre niveau scolaire!")
     return false; 
    }
    //**formation 
    else if (formulaire.mod.selectedIndex==0)
    {alert ("choisir une formation!!")
     return false ;
    }
    
    return true; 
  }