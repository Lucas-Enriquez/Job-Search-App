export const applyToJob = async (token, id) => {
  const url = `https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/apply/${id}`;
  const fetchRes = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await fetchRes.json();
  console.log(data);
  console.log("You have applied succesfully");
};