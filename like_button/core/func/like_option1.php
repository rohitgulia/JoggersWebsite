<?php



function likecount_option1(){
    
    $query1 =  mysql_query(" SELECT `user_id` from `option1` ");
    $num_rows1 = mysql_num_rows($query1);
    echo $num_rows1;
    
}

function addlike_option1(){
   $ip = user();
    
    mysql_query("INSERT into `option1` (`user_id`) VALUES ('$ip')" );
    
    
}


?>