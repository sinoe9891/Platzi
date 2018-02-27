<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Variables</title>
</head>
<body>
  <p>Las variables pueden comenzar con una letra o un numero.
  </p>
  <p>
    <?php
    //int
    $intVar = 1;
    var_dump($intVar);
    ?>
  </p>
  <p>En Este ejercicio verifica que es de tipo flotante 1.2</p>
  <p>
    <?php
    // float
    $floatVar = 1.2;
    var_dump($floatVar);
    ?>
  </p>
  <p>Creamos una variables de cadena de caracteres y lo igualamos a un texto y verificamos con var_dump y nos muestra que es una cadena y entre parentesis nos da el tamaño de la cadena.</p>
  <p>
    <?php
    // string
    $stringVar = 'Sample Text';
    var_dump($stringVar);
    ?>
  </p>
  <p><strong>Este es muy usado, este tipo de dato nos permite manejar solamente el valor de verdadero o falso.</strong></p>
  <p>
    <?php
    // bool
    $boolVar = true;
    var_dump($boolVar);
    ?>
  </p>
  <p><b>Esto nos permite definir una variable que no tiene valor.</b></p>
  <p>
    <?php
    // null
    $nullVar = null;
    var_dump($nullVar);
    ?>
  </p>
  <p>
    <?php
    // null
    $arrayVar = ['valor1', 12, 1.3];
    var_dump($arrayVar);
    ?>
  </p>

</body>
</html>
