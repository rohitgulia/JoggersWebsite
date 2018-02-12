<?php

function user_name(){

 $ip = $_SERVER['SERVER_ADDR'];

    if (PHP_OS == 'WINNT'){
        $ip = getHostByName(getHostName());
    }

    if (PHP_OS == 'Linux'){
        $command="/sbin/ifconfig";
        exec($command, $output);
        // var_dump($output);
        $pattern = '/inet addr:?([^ ]+)/';

        $ip = array();
        foreach ($output as $key => $subject) {
            $result = preg_match_all($pattern, $subject, $subpattern);
            if ($result == 1) {
                if ($subpattern[1][0] != "127.0.0.1")
                $ip = $subpattern[1][0];
            }
        //var_dump($subpattern);
            
        }
    }
  return $ip;
}


function likecount(){
    
    $query =  mysql_query(" SELECT `likes` from `page` ");
    $num_rows = mysql_num_rows($query);
    echo $num_rows;
    
}

function addlike(){
   $ip = user_name();
    
    mysql_query("INSERT into `page` (`likes`, `name`) VALUES ('1','$ip')" );
    
    
}


?>