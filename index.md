![](./logo.PNG)
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="./UpdateParent.js"></script>
    <script src="./UpdateTransaction.js"></script>
    <link rel="stylesheet" href="./style.css" />
    <title></title>
  </head>
  <body>
    <H1>NUS Money Application</H1>
    

    <div class="container">
      <!-- <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1> -->

      <div class="inc-exp-container">
        <div>
          <h4>Your Wallet Balance</h4>
          <input type=number id="balance" class="money plus">
        </div>
      </div>
 
      <h3>Parent Details</h3>
      <form id="form">
        <div class="form-control">
            <select id="select" onchange="show(this)">
              <option value="">Select Name...</option>
            </select>
        </div>
        <div class="mypanel">
          <form>
              <label>Parent ID:</label>
              <input type=number id="id"><br>
              <label>User Name:</label>
              <input type=text id="user_name"><br>
              <label>Email:</label>
              <input type=text id="email"><br>
              <label>Mobile:</label>
              <input type=number id="mobile"><br>
              <label>Facebook ID:</label>
              <input type=text id="fb_id"><br><br>
              <label>Child Name:</label>
              <input type=text id="child_name"><br>
              <label>Child Age:</label>
              <input type=number id="age"><br><br>
          </form>
      </div>
        <button class = "btn" onclick="list_parent()">List Parent / Clear</button>
        <button class = "btn" onclick="show_parent()">Select</button>
        <button class = "btn" onclick="update_parent()">Update</button>
      </form>

      <h3>Wallet Details</h3>
      <ul id="list" class="list">
      </ul>
      <div class="mypanel">
        <form> 
            <label>Currency:</label>
            <input type=text id="currency"><br>
            <label>Balance:</label>
            <input type=number id="wallet_balance"><br>
            <label>Rewards Points:</label>
            <input type=number id="rewards_points"><br>
        </form>
      </div>

      <h3>Transaction Details</h3>
      <ul id="list" class="list">
      </ul>
      <div class="mypanel">
        <form>
            <!-- <label>Date:</label>
            <input type=date id="datetime"><br> -->
            <label>Transaction ID:</label>
            <input type=number id="transaction id"><br>
            <label>Transaction Type:</label>
            <input type=text id="transaction type"><br>
            <label>Category:</label>
            <input type=text id="category"><br>
            <label>Amount:</label>
            <input type=text id="amount1"><br>
            <label>Description:</label>
            <input type=text id="description"><br>
        </form>
      </div>
      <div>
          <button class = "btn" onclick="list_transaction()">List Transaction</button>
          <button class = "btn" onclick="add_transaction()">Add</button>
          <button class = "btn" onclick="delete_transaction()">Delete</button>
      </div> 
      <ul id="list_transaction" class="list">
      </ul>
    </div>
  </body>
</html>
