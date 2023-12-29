<?php
// (A) SETTINGS - CHANGE TO YOUR OWN !
error_reporting(E_ALL & ~E_NOTICE);
define("DB_HOST", "localhost");
define("DB_NAME", "id18219527_packs");
define("DB_CHARSET", "utf8");
define("DB_USER", "id18219527_connect");
define("DB_PASSWORD", "{t7[GaQ9v?<r5{cp");

// (B) CONNECT TO DATABASE
try {
  $pdo = new PDO(
    "mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET . ";dbname=" . DB_NAME, 
    DB_USER, DB_PASSWORD
  );
} catch (Exception $ex) { exit($ex->getMessage()); }

// (C) GET USERS
$stmt = $pdo->prepare("SELECT * FROM `pkgs`");
$stmt->execute();
$pkgDetails = $stmt->fetchAll();


$counter = 0;

foreach ($pkgDetails as $u) {
  $counter = $counter +1;
  //printf("<div>%s %s</div>", $u['Version'], $u['URL']);
}
//always get latest version
$exits = 0;
foreach ($pkgDetails as $u) {
  $exits = $exits +1;
  if($exits==$counter){
 printf("%s", $u['URL']);
  }
 
}


// (D) CLOSE DATABASE CONNECTION
$pdo = null;
$stmt = null;