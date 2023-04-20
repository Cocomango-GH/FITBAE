import sendRequest from "./send-request";

const BASE_URL = '/api/goal'







export function createGoal(goalData){
    return sendRequest(BASE_URL, 'POST', goalData)
  }
  
// newly added 
export function showGoal(goalData) {
    return sendRequest(BASE_URL, 'GET', goalData)
}

// newly added 
export function updateGoal(goalData) {
  return sendRequest(BASE_URL, 'PUT', goalData)
}

export function deleteGoal(goalData) {
  return sendRequest(BASE_URL, 'DELETE', goalData)
}
