

 let $db_uri = main_server+'/pages/mridbconn.php';
 let $retunString = "non";
// NOTE: RUN WITH HTTP://, NOT FILE://
  function loadUsers(){
/*
  
  
  fetch($db_uri)
  .then(response => response.text())
  .then((response) => {
      $retunString = response;
      console.log($retunString)
  })
  .catch(err => console.log(err))

  return $retunString;
  */
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

};
