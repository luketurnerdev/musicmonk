const postNewRoutineToDb = async (userId, data) => {
  //axios await stuff
  console.log(userId);
  console.log(data.steps);

  await axios.post(`http://localhost:3000/users/${userId}/routines`, {
    userId: userId,
    title: data.title,
    steps: data.steps
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return data;
}

module.exports = {postNewRoutineToDb};