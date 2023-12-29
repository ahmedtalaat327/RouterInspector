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

$response = json_encode($fetchData);
header( "Content-Type: application/json" );
echo $response;
exit;

/*
if($fetchData>0){
    foreach($fetchData as $row){
       // printf("%s \n", $row['Email']);
        
        
       

        
    $data["Email"] = $row['Email'];

    print(json_encode($data));

    }
}
 */



 
?>