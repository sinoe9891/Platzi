<?php
$a = 1;

$a = $a + 5;

var_dump($a);

$b = 1;
$b += 5;

var_dump($b);

$c = 2;
$c *= 5;

var_dump($c);

$d = 'Hello ';
$d .= 'World';

var_dump($d);

// También existen los siguientes operadores de asignación
$a1 = 3;
$b1 = 4;
$c1 = 6;
$d1 = 8;

$a1 -= 3; // sustracción
$b1 *= 5; // multiplicación
$c1 /= 5; // división
$d1 %= 2; // modulo

var_dump($a1);
var_dump($b1);
var_dump($c1);
var_dump($d1);
