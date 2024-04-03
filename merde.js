var formulaire=document.querySelector("#formulaire")
formulaire.addEventListener('submit',function(e){
    e.preventDefault()
    var nom=document.querySelector('#nom').value;
    var prenom=document.querySelector('#prenom').value;
    var url="http://localhost:8080/?nom=" + encodeURIComponent(nom) + "&prenom=" + encodeURIComponent(prenom)
    var req=new XMLHttpRequest()
    req.open("GET",url,true)
    req.send()
    req.onload = function() {
        if (req.status === 200) {
           
                console.log("La requête a été effectuée avec succès !");
                //on va activer l'extension
                chrome.tabs.query({active:true, currentWindow:true},function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id,{action:"activation",nom:nom,prenom:prenom})
                });
                formulaire.style.display="none";
            
        } else {
            console.log("Erreur lors de la requête !");
        }
    };
    console.log(prenom);
    console.log(nom);
})