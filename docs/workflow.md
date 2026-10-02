# Worflow Git 

## Branches
* `main` : branche de production. Elle contient uniquement le code prêt à être déployé dans le monde réel
* `dev` : branche de développement. Les fonctionnalités terminées y sont regroupées avant la mise en production
* `feature/*` : branche éphémère de fonctionnalité
* `fix/*` : branche éphémère de fix

## Workflow schématisé

**feature/example** --> PR --> **dev** --> PR --> **main** --> PRODUCTION

Les règles sont simples :
- On ne peut pas pousser directement sur `main`
- On ne peut pas pousser directement sur `dev`
- Toute modification de ces branches passe par une PR
- Une branche `feature` est créée à partir de `dev`
- `dev` est fusionnée à `main` lorsqu'une version est opérationnelle pour le déploiement
- Les `features` sont supprimées après leur merge
