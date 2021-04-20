function add_transaction() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var mydatetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  var wallet_id = document.getElementById("id").value;
  var transaction_id = document.getElementById("transaction id").value;
  var transaction_type = document.getElementById("transaction type").value;
  var category = document.getElementById("category").value;
  var amount = document.getElementById("amount1").value;
  var description = document.getElementById("description").value;
  var raw = JSON.stringify({
    datetime_: `${mydatetime}`,
    wallet_id: `${wallet_id}`,
    transaction_id: `${transaction_id}`,
    transaction_type: `${transaction_type}`,
    category: `${category}`,
    amount: `${amount}`,
    description_: `${description}`,
  });
  alert("Transaction created. " + raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/transaction/addnew", requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
}

function list_transaction() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  document.getElementById("list_transaction").innerHTML = "";
  document.getElementById("transaction id").value = "";
  document.getElementById("transaction type").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount1").value = "";
  document.getElementById("description").value = "";
  
  var ul = document.getElementById("list_transaction");
  // var wallet = document.getElementById("parent_id").value;
  // alert(`http://localhost:4000/transaction/by_wallet?wallet_id='${wallet}'`)
  fetch("http://localhost:4000/transaction/by_wallet?wallet_id=1", requestOptions)
    .then((response) => response.json())
    .then((data) => {
          data.forEach(function (item) {
          var myDateTime = `${item.datetime_}`;
          var myDate = myDateTime.substr(0, 10);
          var myTime = myDateTime.substr(11, 8);
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(`${item.transaction_id} ${myDate} ${myTime} ${item.transaction_type} ${item.category} $${item.amount} ${item.description_}`));
          ul.appendChild(li);
      })
    });
  }
