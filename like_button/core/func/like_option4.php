<?php

function likecount_option4(){
    
    $query4 =  mysql_query(" SELECT `user_id` from `option4` ");
    $num_rows4 = mysql_num_rows($query4);
    echo $num_rows4;
    
}

function addlike_option4(){
   $ip = user();
    
   mysql_query("INSERT into `option4` (`user_id`) VALUES ('$ip')" );
    
    
}


?>