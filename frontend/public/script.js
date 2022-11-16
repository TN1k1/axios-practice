const fetchUsers = () => {
    axios
      .get('/endpoint')
      .then(response => {
        const user = response.data;
        console.log(`GET list users`, user)
        document.getElementById("person").innerHTML = user.name;
      })
      .catch(error => console.error(error))
  }
  
  fetchUsers()