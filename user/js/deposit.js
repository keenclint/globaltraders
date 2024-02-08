const isLoggedIn = localStorage.getItem("gtraders");
const username = localStorage.getItem("gtraders_id");
//const btc = localStorage.getItem("btc")
//const eth = localStorage.getItem("eth")

const loginEndpoint = 'https://global-traders.onrender.com';



fetch(`${loginEndpoint}/dashboard/${username}`) // Replace URL with your API endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      //return response.json();
      return response.json();

    })
    .then(data => {
      // Once data is fetched, handle and display it
      displayUserData(data);
      console.log("log is",data)

    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

  function displayUserData(res) {
      if (isLoggedIn === "true" && username) {
        const data = JSON.parse(res.data)
        document.getElementById("balance").innerText = `$${data.balance}.00`;
        
      } else {
        // Redirect to the login.html page if the user is not logged in
        window.location.href = "login.html";
      }
  
    }
