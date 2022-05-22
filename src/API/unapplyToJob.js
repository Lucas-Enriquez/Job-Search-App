export const unapplyToJob = async (job, token) => {
  const url = `https://backendnodejstzuzulcode.uw.r.appspot.com/api/jobs/unapply/${job}`
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    const data = await res.json();
    console.log(data)

  } catch (error) {
    console.log(error)
  }
}