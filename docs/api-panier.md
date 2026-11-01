# API du panier (brouillon)

Document à valider avec le serveur Flask. Toutes les réponses sont en JSON.

## Routes

| Méthode | Adresse | Rôle |
|---|---|---|
| GET | `/api/produits` | Liste des produits |
| GET | `/api/panier` | Panier de l'utilisateur connecté |
| POST | `/api/panier` | Ajoute un article |
| PUT | `/api/panier` | Change une quantité |
| DELETE | `/api/panier` | Retire un article |
| POST | `/api/commandes` | Crée la commande et vide le panier |
| POST | `/api/connexion` | Connecte un utilisateur |
| POST | `/api/inscription` | Crée un compte |
| POST | `/api/deconnexion` | Déconnecte l'utilisateur |

Si l'utilisateur n'est pas connecté, les routes du panier et des commandes répondent `401`.

## Formats

`GET /api/panier` répond :

```json
{
  "articles": [
    {
      "id_produit": 1,
      "nom": "Chaussures ceramique",
      "prix": 180,
      "image": "https://i.imgur.com/HNA5jOF.jpeg",
      "taille": "39",
      "quantite": 2
    }
  ],
  "nombre": 2,
  "total": 360
}
```

`POST /api/panier` et `PUT /api/panier` reçoivent :

```json
{ "id_produit": 1, "taille": "39", "quantite": 2 }
```

`DELETE /api/panier` reçoit :

```json
{ "id_produit": 1, "taille": "39" }
```

`POST /api/commandes` reçoit :

```json
{
  "nom": "Nom complet",
  "email": "nom@exemple.fr",
  "adresse": "1 rue de l'Exemple",
  "code_postal": "75000",
  "ville": "Paris"
}
```

Le serveur calcule le total avec les prix de la base de données, jamais avec un prix envoyé par le navigateur.

## Valeurs fixes

- `categorie` : `homme`, `femme`, `enfant`, `chaussures`
- Tailles des vêtements : `XS`, `S`, `M`, `L`, `XL`
- Tailles des chaussures : `37`, `38`, `39`, `40`, `41`
