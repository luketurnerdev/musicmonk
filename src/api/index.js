import axios from 'axios';

const postNewRoutineToDb = async (userId, data) => {
  await axios.post(`http://localhost:3000/users/${userId}/routines`, {
    userId: userId,
    title: data.title,
    steps: data.steps
  })
  .then(function (resp) {
    console.log(resp);
    return resp.data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
}

const getAllRoutinesForUser = async (userId) => {
  let resolved;
  await axios.get(`http://localhost:3000/users/${userId}/routines`)
  .then(resp => {
    console.log(resp.data);
    resolved = resp.data;
  })
  .catch(err => {
    console.log(err);
    resolved = err;
  })

  return resolved;
}

const deleteOneRoutineFromDb = async (userId, routineId) => {
  let resolved;
  await axios.delete(`http://localhost:3000/users/${userId}/routines/${routineId}`)
  .then(resp => {
    console.log(resp.data);
    resolved = resp.data;
  })
  .catch(err => {
    console.log(err);
    resolved = err;
  })

  return resolved;
}


export {postNewRoutineToDb, getAllRoutinesForUser, deleteOneRoutineFromDb};