<?php

function likecount_option6(){
    $query6 =  mysql_query(" SELECT `user_id` from `option6` ");
    $num_rows6 = mysql_num_rows($query6);
    echo $num_rows6;    
}

function addlike_option6(){
   $ip = user();
    
    mysql_query("INSERT into `option6` (`user_id`) VALUES ('$ip')" );
    
    
}


?>