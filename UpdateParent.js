function show_parent() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  var user_name = document.getElementById("select").value;
  var select_user = select.options[select.selectedIndex].value
  fetch("http://localhost:4000/parent", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (item) {
        if (`${item.user_name}` === `${select_user}`) {
          document.getElementById("id").value = `${item.id}`;
          document.getElementById("user_name").value = `${item.user_name}`;
          document.getElementById("email").value = `${item.email}`;
          document.getElementById("mobile").value = `${item.mobile}`;
          document.getElementById("fb_id").value = `${item.fb_id}`;
          document.getElementById("child_name").value = `${item.child_name}`;
          document.getElementById("age").value = `${item.age}`;
          document.getElementById("currency").value = `${item.abbreviation}`;
          document.getElementById("wallet_balance").value = `${item.balance}`;
          document.getElementById("rewards_points").value = `${item.rewards_points}`;
          document.getElementById("balance").value = `${item.balance}`;
        }
      });
    })
    .catch((error) => console.log("error", error));
}

function list_parent() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  var element = document.getElementById("select");
  element.innerHTML = '';
  fetch("http://localhost:4000/parent", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (item) {
        element.innerHTML = element.innerHTML +
          '<option value="' + `${item.user_name}` + '">' + `${item.user_name}` + '</option>';
      });
    })
    .catch((error) => console.log("error", error));
    document.getElementById("id").value = "";
    document.getElementById("user_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("fb_id").value = "";
    document.getElementById("child_name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("currency").value = "";
    document.getElementById("wallet_balance").value = "";
    document.getElementById("rewards_points").value = "";
    document.getElementById("list_transaction").innerHTML = "";
    document.getElementById("balance").value = "";
}

function update_parent() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var id = document.getElementById("id").value;
    var user_name = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var fb_id = document.getElementById("fb_id").value;
    var raw = JSON.stringify({
      id: `${id}`,
      user_name: `${user_name}`,
      email: `${email}`,
      mobile: `${mobile}`,
      fb_id: `${fb_id}`
    });
    alert("Parent updated. " + raw);
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("http://localhost:4000/parent/update", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
