const fetchData = (...req) =>
  fetch(...req)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });

export default fetchData;
