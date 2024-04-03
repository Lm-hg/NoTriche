var express=require("express");
const bodyParser = require('body-parser');
const cors=require('cors');

const { createClient } =require('@supabase/supabase-js');
const supabaseUrl = 'https://rryldjiwdkyudbcfoyvd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyeWxkaml3ZGt5dWRiY2ZveXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NTEyNzAsImV4cCI6MjAxNzQyNzI3MH0.vKEY_kySabVR7Ly1rd0yO0zPoe8gwEqOh0KH-BfyGZY"
const supabase = createClient(supabaseUrl, supabaseKey)

//instantiation
var server=express();
 
server.use(cors())
//l'utilisation du bloc try catch, permet juste de m'indiquer les erreurs susceptibles d'intervenir 
server.get('/', async function(req, res) {
    try {
        // Récupérer les paramètres de requête nom et prenoms
        const nom = req.query.nom;
        const prenoms = req.query.prenom;
      
        // Insérer les données dans la base de données
        const { data, error } = await supabase
            .from('users')
            .insert([
                { nom: nom, prenoms: prenoms },
            ])
            .select();

        // Vérifier s'il y a une erreur lors de l'insertion des données
        if (error) {
            console.error("Erreur lors de l'insertion des données :", error.message);
            res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'insertion des données.' });
        } else {
            // Envoyer une réponse indiquant que les données ont été insérées avec succès
            console.log("Données insérées avec succès :", data);
            res.status(200).json({ message: 'Données insérées avec succès.', insertedData: data });
        }
    } catch (error) {
        // Capturer toute erreur survenue lors du traitement de la requête
        console.error("Erreur lors du traitement de la requête :", error.message);
        res.status(500).json({ error: 'Une erreur s\'est produite lors du traitement de la requête.' });
    }
});


//les tricheurs du ctrl V
server.get('/triche', async function(req, res){
    try {
        const nom = req.query.name;
        const Cv = "ctrl +V";

        // je récupère le nom que m'a envoyé par get le front et je recherche l'id correspondant à ce dernier
        const { data: suspect, error: suspectError } = await supabase
            .from('users')
            .select('id')
            .eq('nom', nom);

        if (suspectError) {
            throw suspectError;
        }

        if (!suspect || suspect.length === 0) {
            throw new Error('Aucun utilisateur trouvé avec ce nom.');
        }

        const id = suspect[0].id;

        // Insertion des données du suspect dans la table 'suspects'
        const { data: insertData, error: insertError } = await supabase
            .from('suspects')
            .insert([
                { id_user: id, comportements: Cv }
            ]);

        if (insertError) {
            throw insertError;
        }

        return res.status(200).json({ message: 'Données du suspect insérées avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la manipulation des données :', error.message);
        return res.status(500).json({ error: 'Erreur lors de la manipulation des données.' });
    }
});


//les copieurs
server.get('/triche1', async function(req, res){
    try {
        const nom = req.query.name;
        const Cc = "ctrl + C";

        // je récupère le nom que m'a envoyé par get le front et je recherche l'id correspondant à ce dernier
        const { data: suspect, error: suspectError } = await supabase
            .from('users')
            .select('id')
            .eq('nom', nom);

        if (suspectError) {
            throw suspectError;
        }

        if (!suspect || suspect.length === 0) {
            throw new Error('Aucun utilisateur trouvé avec ce nom.');
        }

        const id = suspect[0].id;

        // Insertion des données du suspect dans la table 'suspects'
        const { data: insertData, error: insertError } = await supabase
            .from('suspects')
            .insert([
                { id_user: id, comportements: Cc }
            ]);

        if (insertError) {
            throw insertError;
        }

        return res.status(200).json({ message: 'Données du suspect insérées avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la manipulation des données :', error.message);
        return res.status(500).json({ error: 'Erreur lors de la manipulation des données.' });
    }
});

//raffraichir 
server.get('/triche2', async function(req, res){
    try {
        const nom = req.query.name;
        const Cr = "ctrl +R";

        // je récupère le nom que m'a envoyé par get le front et je recherche l'id correspondant à ce dernier
        const { data: suspect, error: suspectError } = await supabase
            .from('users')
            .select('id')
            .eq('nom', nom);

        if (suspectError) {
            throw suspectError;
        }

        if (!suspect || suspect.length === 0) {
            throw new Error('Aucun utilisateur trouvé avec ce nom.');
        }

        const id = suspect[0].id;

        // Insertion des données du suspect dans la table 'suspects'
        const { data: insertData, error: insertError } = await supabase
            .from('suspects')
            .insert([
                { id_user: id, comportements: Cr }
            ]);

        if (insertError) {
            throw insertError;
        }

        return res.status(200).json({ message: 'Données du suspect insérées avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la manipulation des données :', error.message);
        return res.status(500).json({ error: 'Erreur lors de la manipulation des données.' });
    }
});

//clic droit 
server.get('/triche4', async function(req, res){
    try {
        const nom = req.query.name;
        const Cd = "click droit";

        // je récupère le nom que m'a envoyé par get le front et je recherche l'id correspondant à ce dernier
        const { data: suspect, error: suspectError } = await supabase
            .from('users')
            .select('id')
            .eq('nom', nom);

        if (suspectError) {
            throw suspectError;
        }

        if (!suspect || suspect.length === 0) {
            throw new Error('Aucun utilisateur trouvé avec ce nom.');
        }

        const id = suspect[0].id;

        // Insertion des données du suspect dans la table 'suspects'
        const { data: insertData, error: insertError } = await supabase
            .from('suspects')
            .insert([
                { id_user: id, comportements: Cd }
            ]);

        if (insertError) {
            throw insertError;
        }

        return res.status(200).json({ message: 'Données du suspect insérées avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la manipulation des données :', error.message);
        return res.status(500).json({ error: 'Erreur lors de la manipulation des données.' });
    }
});


//nouvel onglet, les "va copier ia"
server.get('/triche3', async function(req, res){
    try {
        const nom = req.query.name;//nom récupéré
        const onglet = "chatgpt";

        // je récupère le nom que m'a envoyé par get le front et je recherche l'id correspondant à ce dernier
        const { data: suspect, error: suspectError } = await supabase
            .from('users')
            .select('id')
            .eq('nom', nom);

        if (suspectError) {
            throw suspectError;
        }

        if (!suspect || suspect.length === 0) {
            throw new Error('Aucun utilisateur trouvé avec ce nom.');
        }

        const id = suspect[0].id;

        // Insertion des données du suspect dans la table 'suspects'
        const { data: insertData, error: insertError } = await supabase
            .from('suspects')
            .insert([
                { id_user: id, comportements: onglet }
            ]);

        if (insertError) {
            throw insertError;
        }

        return res.status(200).json({ message: 'Données du suspect insérées avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la manipulation des données :', error.message);
        return res.status(500).json({ error: 'Erreur lors de la manipulation des données.' });
    }
});


server.listen(8080, function(){
    console.log("ça marche bien");
})
