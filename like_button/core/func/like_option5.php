<?php

function likecount_option5(){
    
    $query5 =  mysql_query(" SELECT `user_id` from `option5` ");
    $num_rows5 = mysql_num_rows($query5);
    echo $num_rows5;
    
}

function addlike_option5(){
   $ip = user();
    
   mysql_query("INSERT into `option5` (`user_id`) VALUES ('$ip')" );
    
}


?>