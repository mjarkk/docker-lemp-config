<?php

if (isset($_GET['clean'])) {
  echo $_GET['clean'];
  die('');
}

if (isset($_GET['sql'])) {
  try {
    $conn = new PDO("mysql:host=db", 'root', 'markdepro');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "TRUE"; 
  }
  catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
  die('');
}