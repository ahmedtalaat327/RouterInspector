<?php 
 
require __DIR__ . '/vendor/autoload.php';
use Kreait\Firebase\Factory;

//var_dump(openssl_get_cert_locations());

$factory = (new Factory)
->withServiceAccount('mriuserprofile-firebase-adminsdk-b6znz-7599ef3deb.json')
->withDatabaseUri('https://mriuserprofile-default-rtdb.firebaseio.com/');

$database = $factory->createDatabase();

$fetchData = $database->getReference('MyUsers')->getValue();

//print(json_encode($fetchData));



 echo json_encode($fetchData);

 //print_r($_GET);
/*
$jsonStr = Array (
    "0" => Array (
        "id" => "01",
        "title" => "Hello",
    ),
    "1" => Array (
        "id" => "02",
        "title" => "Yoyo",
    ),
    "2" => Array (
        "id" => "03",
        "title" => "I like Apples",
    ));
$completeRes =  json_encode($jsonStr);
echo ($completeRes);
*/
/*
if($fetchData>0){
    foreach($fetchData as $row){
       // printf("%s \n", $row['Email']);
        
        
       

        
    if($row['Email']!=null){

    echo json_encode($row['Email']) ;
    }
    }
}
 
*/


exit;
?>