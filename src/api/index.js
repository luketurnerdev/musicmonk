import axios from 'axios';

const postNewRoutineToDb = async (userId, data) => {
  await axios.post(`${process.env.GATSBY_SERVER_URL}/users/${userId}/routines`, {
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
  await axios.get(`${process.env.GATSBY_SERVER_URL}/users/${userId}/routines`)
  .then(resp => {
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
  await axios.delete(`${process.env.GATSBY_SERVER_URL}/users/${userId}/routines/${routineId}`)
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
const editOneRoutineInDb = async (userId, routineId, newData) => {
  console.log(`edit function received user ${userId}, routine: ${routineId} and new data:`)
  console.log(newData);
  let resolved;
  await axios.put(`${process.env.GATSBY_SERVER_URL}/users/${userId}/routines/${routineId}`, newData)
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


export {postNewRoutineToDb, getAllRoutinesForUser, deleteOneRoutineFromDb, editOneRoutineInDb};