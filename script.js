
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    
    if(message && message.action==="activation"){
        const nom=message.nom
        console.log(nom);
        document.addEventListener('keydown', function(e){

        //ctrl +C
        if (e.key === 'c' && e.ctrlKey ) {
            var url1="http://localhost:8080/triche/?name="+ encodeURIComponent(nom);
            var xhr1 = new XMLHttpRequest();
            xhr1.open("GET", url1, true);
            
            xhr1.send();
        }
        //ctrl + V
        if (e.key === 'v' && e.ctrlKey) {
            var url2="http://localhost:8080/triche1/?name="+ encodeURIComponent(nom);
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url2, true);
            
            xhr2.send();
        }
        //ctrl +R
        if (e.key === 'r' && e.ctrlKey ) {
            var url3="http://localhost:8080/triche2/?name="+ encodeURIComponent(nom);
            var xhr3 = new XMLHttpRequest();
            xhr3.open("GET", url3, true);
            
            xhr3.send();
        }

        })
        //lorsqu'il quitte la page, probablement pour consulter l'ia, je ne vois pas d'autre raison pour quitter la page alors qu'il est en devoir
         document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {

            var url4="http://localhost:8080/triche3/?name="+ encodeURIComponent(nom);
            var xhr4 = new XMLHttpRequest();
            xhr4.open("GET", url4, true);
            
            xhr4.send();        
        }
        });
        //un clic droit
        document.addEventListener('contextmenu',function(){
            var url5="http://localhost:8080/triche4/?name="+ encodeURIComponent(nom);
            var xhr5 = new XMLHttpRequest();
            xhr5.open("GET", url5, true);
            
            xhr5.send(); 

        })
    }
})


