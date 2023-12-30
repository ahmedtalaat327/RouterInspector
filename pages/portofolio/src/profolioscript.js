

 let $db_uri = main_server+'/pages/mridbconn.php';
 let $retunString = "nill";

 async function loadUsers(form){

 
  //api option
  await fetch(
    $db_uri, {
    method: 'GET',
    dataType: 'json'
  })
  .then(async response => {
    console.log(response);
    try {
     const data = await response.json();
     $retunString = data;
     console.log('response data?', data);
     
       //if response succeeded and validation done!
     if(form!=undefined){
      HTMLFormElement.prototype.submit.call(form);
      }

   } catch(error) {
     console.log('Error happened here!');
     console.error(error);

    
  }
  })
  

   
  
/*
 $.ajax({
    url: $db_uri,
    dataType: 'html',
    method : 'POST',
    data:{},
    success: function(result){
      if(result['success']) { 
        $retunString = (result['value1']);
      }},
    error: function (result) { 
       console.log("error handled")
     
    }
});
        console.log($retunString);
return  $retunString;
*/
/*
var xhr = new XMLHttpRequest();
xhr.open('GET',$db_uri,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4&&xhr.status==200){
    $retunString = xhr.responseText;
    console.log($retunString);
  }
}

xhr.send();

return $retunString;
*/
};
