const homescreen = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
  />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <title>Node To Do Example</title>
</head>
<body>
<div class="container">
<center>
  <h3>Node js To do APP</h3>
  </center>
<div class="row">
<form action="/newitem" method="POST" class="col s12">
<div class="row">
<div class="input-field col s10">
<input name="tasks" placeholder="enter your tasks" autocomplete="off" />
</div>
<div class="col s2 add_button">
<button class="btn-large waves-effect  waves-light red"><i class="material-icons">add</i>Add New Item</button>
</div>



</div>
</form>
</div>
</div>
  
</body>
</html>
`;

module.exports = homescreen;
