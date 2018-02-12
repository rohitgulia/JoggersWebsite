<?php

function likecount_option3(){
    
    $query3 =  mysql_query(" SELECT `user_id` from `option3` ");
    $num_rows3 = mysql_num_rows($query3);
    echo $num_rows3;
    
}

function addlike_option3(){
   $ip = user();
    
    mysql_query("INSERT into `option3` (`user_id`) VALUES ('$ip')" );
    
}


?>