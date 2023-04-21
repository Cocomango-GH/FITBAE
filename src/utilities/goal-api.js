import sendRequest from "./send-request";

const BASE_URL = '/api/goal'







export function createGoal(goalData){
    return sendRequest(BASE_URL, 'POST', goalData)
  }
  
// newly added 
export function getAll() {
    return sendRequest(BASE_URL)
}

// newly added 
export function updateGoal(goalData) {
  return sendRequest(BASE_URL, 'PUT', goalData)
}

export function deleteGoal(id) {
  return sendRequest(BASE_URL, 'DELETE', id)
}


// export function getById(id) {
//   return sendRequest(`${BASE_URL}/${id}`);
// }
