console.log('Hello from typescript !');

interface EntityParam {
    id:number;
    name:string;
    param1:boolean;
}

interface Entity {
    id:number;
    name:string;
    boolParam:boolean;
    collectionParam: Array<EntityParam>;
}


async function fetchType<T>(url: string): Promise<T> {
    let tentative = 1;
    while (tentative <= 5) { // Effectuer jusqu'à 5 tentatives
      try {
        const response = await fetch(url); // Attendre la réponse du fetch
        if (response.ok) {
          let resultat: T;
          if (response.body === null) {
            resultat = null as any; // Typecast pour null si le corps de la réponse est null
          } else if (typeof response.json === 'function') {
            resultat = await response.json() as T; // Convertir en JSON si possible
          } else if (typeof response.text === 'function') {
            resultat = await response.text() as T; // Convertir en texte si possible
          } else if (typeof response.blob === 'function') {
            resultat = await response.blob() as T; // Convertir en Blob si possible
          } else {
            throw new Error('Type de contenu non pris en charge'); // Lancer une erreur si le type de contenu n'est pas pris en charge
          }
          return resultat; // Retourner la valeur en succès
        } else {
          console.error(`Erreur HTTP : ${response.status}`); // Afficher l'erreur HTTP
          console.error(`Erreur HTTP : ${response.statusText}`); // Afficher l'erreur HTTP
        }
      } catch (erreur) {
        console.error('Erreur :', erreur); // Afficher l'erreur en cas d'échec du fetch
      }
  
      // Attendre avant de faire une nouvelle tentative
      await new Promise<void>(resolve => setTimeout(resolve, 1000));
      tentative++;
    }
  
    throw new Error('Échec après 5 tentatives'); // Lancer une erreur après 5 tentatives
}
  
// Exemple d'appel de la fonction pour effectuer le fetch et traiter le contenu
const url = 'http://localhost:8081/entities'; // Remplacez par votre URL de fetch

// Utilisation de la fonction avec un type de contenu attendu (par exemple un objet JSON)
fetchType<Entity>(url)
    .then(resultat => {
        console.log('Valeur en succès :', resultat); // Afficher la valeur en succès
    })
    .catch(erreur => {
        console.error(erreur.message); // Afficher l'erreur en cas d'échec du fetch
    });
  