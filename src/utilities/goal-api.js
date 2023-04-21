import sendRequest from "./send-request";

const BASE_URL = '/api/goals'







export function createGoal(goalData){
    return sendRequest(BASE_URL, 'POST', goalData)
  }
  
// newly added 
export function getAll() {
    return sendRequest(BASE_URL)
}

// newly added 
export function updateGoal(edit) {
  return sendRequest(`${BASE_URL}/${edit._id}`, 'PUT', edit)
}

export function deleteGoal(id) {
  return sendRequest(BASE_URL, 'DELETE', id)
}


export function getGoal(id) {
  console.log(id)
  return sendRequest(`${BASE_URL}/${id.goalId}`);
  
}
