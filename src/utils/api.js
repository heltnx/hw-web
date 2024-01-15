// Cache pour stocker les données JSON une fois récupérées
let realisationsData = null;

// Fonction pour récupérer les données de realisations
export const fetchRealisationsData = async () => {
  try {
    // Si les données n'ont pas encore été récupérées, effectuer une requête
    if (!realisationsData) {
      const response = await fetch('/realisations.json');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Invalid JSON response. Content: ${text}`);
      }

      realisationsData = await response.json();
    }
    return realisationsData; // Renvoyer les données (du cache ou nouvellement récupérées)
  } catch (error) {
    console.error('Error fetching realisations data:', error);
    return []; // Renvoyer un tableau vide en cas d'erreur
  }
};
