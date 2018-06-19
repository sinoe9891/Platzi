<?php
//ejemplo1
$v1 = 10;
$v2 = 12;

$result = $v1 == $v2;
var_dump($result);
//ejemplo2
$c1 = 10;
$c2 = '10';

$result1 = $c1 == $c2;
var_dump($result1);
//ejemplo3
$d1 = '10';
$d2 = '10';

$result2 = $d1 === $d2;
var_dump($result2);
//ejemplo4
$f1 = '10';
$f2 = '10';

$result3 = $f1 != $f2;
var_dump($result3);

//ejemplo5
$g1 = '10';
$g2 = '11';

$result4 = $g1 !== $g2;
var_dump($result4);

//ejemplo5
//$h1 = 10;
//$h2 = 10;

//$result5 = $h1 <=> $h2;
//var_dump($result5);
