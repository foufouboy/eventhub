# Docker
Le projet possède deux configurations Docker :

* **Développement** : Vite, hot reload et volumes.
* **Production** : frontend React compilé avec un build multistage et servi par Nginx.

## Développement
Lancer l'ensemble des services :  
`docker compose up --build`

Le frontend est accessible sur :  
`http://localhost:5173`

Le backend est accessible sur :  
`http://localhost:3000`

Pour lancer les services en arrière-plan :  
`docker compose up -d --build`

Voir les logs :  
`docker compose logs -f`

Arrêter les services :  
`docker compose down`

Arrêter les services et supprimer également les volumes :
`docker compose down -v`

## Production

Construire et lancer la configuration de production :
`docker compose -f docker-compose.prod.yml up --build`

*En production, le frontend est construit avec Vite puis servi par Nginx.*

Voir les logs :
`docker compose -f docker-compose.prod.yml logs -f`

Arrêter la production :
`docker compose -f docker-compose.prod.yml down`
