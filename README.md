### README.md

# Geometry Lab - JS

Un projet d'apprentissage sur la manipulation de figures géométriques en JavaScript, utilisant Mocha et Chai pour les tests unitaires.

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/rmess/Chai-example.git
cd Chai-example
npm install
```

## Utilisation

Le projet contient plusieurs classes permettant de manipuler des formes :
* Triangle : Calcul d'aire (Héron), périmètre et détection de type.
* Rectangle : Calcul d'aire et périmètre.
* Cube : Volume et surface.

## Tests

Les tests sont écrits avec Mocha et Chai. Pour les lancer, utilisez la commande suivante :

```bash
npm test
```

### Sortie actuelle des tests :

```text
> chai-example@1.0.0 test
> mocha

  Testing the Cube Functions
    ✔ 1. The side length of the Cube
    ✔ 2. The surface area of the Cube
    ✔ 3. The volume of the Cube

  Rectangle
    ✔ devrait créer un rectangle avec des dimensions valides
    ✔ devrait lever une erreur si une dimension est négative

  getArea()
    ✔ devrait calculer l'aire correctement

  getPerimeter()
    ✔ devrait calculer le périmètre correctement

  Triangle
    Constructor
      ✔ devrait créer un triangle avec des côtés valides
      ✔ devrait lever une erreur si un côté est négatif
      ✔ devrait lever une erreur si un côté est zéro
      ✔ devrait lever une erreur si les côtés ne forment pas un triangle valide
    perimeter()
      ✔ devrait calculer le périmètre correctement
      ✔ devrait calculer le périmètre pour un triangle équilatéral
      ✔ devrait calculer le périmètre pour un triangle isocèle
    area()
      ✔ devrait calculer l'aire d'un triangle rectangle (3, 4, 5)
      ✔ devrait calculer l'aire d'un triangle équilatéral
      ✔ devrait calculer l'aire d'un triangle isocèle
      ✔ devrait calculer l'aire d'un triangle scalène
    type()
      ✔ devrait identifier un triangle équilatéral
      ✔ devrait identifier un triangle isocèle (a = b)
      ✔ devrait identifier un triangle isocèle (b = c)
      ✔ devrait identifier un triangle isocèle (a = c)
      ✔ devrait identifier un triangle scalène

  23 passing (7ms)
```

## Licence

ISC

