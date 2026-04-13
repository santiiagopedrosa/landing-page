const KEYS = {
    INSCRIPTIONS: "inscriptions",
    FEEDBACKS: "feedbacks",
};

export function getInscriptions() {
  return JSON.parse(localStorage.getItem(KEYS.INSCRIPTIONS) || []);
}

export function saveInscriptions(data) {
    localStorage.setItem(KEYS.INSCRIPTIONS, JSON.stringify(data));
}

export function getFeedbacks() {
    return JSON.parse(localStorage.getItem(KEYS.FEEDBACKS)) || [];
}

export function saveFeedbacks(data) {
    localStorage.setItem(KEYS.FEEDBACKS, JSON.stringify(data));
}