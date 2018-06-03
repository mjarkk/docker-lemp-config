<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Info</title>
  <style>
    body {
      font-size: 18px;
      font-family: sans-serif;
      padding: 20px;
    }
    * {
      padding: 0px;
      margin: 0px;
    }
  </style>
</head>
<body>
  <h1>Yay the webserver works</h1>
  <p>PHPmyadmin: <a href="http://localhost:81/">localhost:81</a></p>
  <p>MailDev: <a href="http://localhost:82/">localhost:82</a></p>
  <p>Mysql IP: <b><?php echo gethostbyname("db"); ?></b> or use the hostname: <b>db</b></p>
</body>
</html>