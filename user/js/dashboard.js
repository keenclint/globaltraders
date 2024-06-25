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
        document.getElementById("user").innerText = username;
        document.getElementById("balance").innerText = `$${data.balance.toLocaleString()}.00`;
        document.getElementById("deposits").innerText = `$${data.deposits.toLocaleString()}.00`;
        document.getElementById("Tdeposit").innerText = `$${data.withdrawals.toLocaleString()}.00`;
        document.getElementById("lastD").innerText = `$${data.last_deposit.toLocaleString()}.00`;
        document.getElementById("Etotal").innerText = `$${data.earned.toLocaleString()}.00`;

        document.getElementById("lastW").innerText = `$${data.last_withdraw.toLocaleString()}.00`;
        document.getElementById("total_withdrawals").innerText = `$${data.withdrawals.toLocaleString()}.00`;
      } else {
        // Redirect to the login.html page if the user is not logged in
        window.location.href = "login.html";
      }
  
    }





    fetch(`${loginEndpoint}/user/${username}`) // Replace URL with your API endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();

    })
    .then(res => {
      // Once data is fetched, handle and display it
      const data = JSON.parse(res.data)
      document.getElementById("reg_on").innerHTML = data.register_date

    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });