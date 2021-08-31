# Backend

Pour son installation : 

Dans un premier temps il vous faut lancer une application comme MAMP qui vous permettra d'accèder à la base de données.

Puis depuis le terminal dans le dossier backend faire un _"npm install"_ .

Il vous faut ensuite installer nodemon avec la commande _"npm install -g nodemon"_ après vous pouvez lancer le server en tapant _"nodemon server"_

Le serveur sera écouté sur le port : "http://localhost:3000/"

# La base de données

Le server mis en place la base de données se créer et se connecte automatiquement avec se message _"sync db"_

Pour les droits d'administrateur il faut aller dans la table user et mettre la colonne "isAdmin" à 1. Si vous avez installé MAMP il suffit pour ça de cliquer sur la map monde qui vous redirigera sur une page internet. Allez dans l'onglet tools, puis "PHPMYADMIN" et séléctionner votre base de données. Sinon il vous est possible de voir vos table dans le dossier _"backend/data"_

# Frontend

Pour son installation :

Dans le terminal il suffit d'entrer la commande _"npm install"_.

Pour lancer le serveur entrer la commande _"npm run serve"_.

L'application sera écouté sur le port : http://localhost:8080/ 
