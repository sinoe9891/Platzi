<?php
/**
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define( 'DB_NAME', 'curso_wordpress' );

/** Tu nombre de usuario de MySQL */
define( 'DB_USER', 'root' );

/** Tu contraseña de MySQL */
define( 'DB_PASSWORD', '' );

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define( 'DB_HOST', 'localhost' );

/** Codificación de caracteres para la base de datos. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', 'Vjv+4I{m3gIj|UOCN3^W{Hcv]a2m*jEuEFco_@p5q5EWHYb@c9O, $Co:BLe0^|W' );
define( 'SECURE_AUTH_KEY', '3>v^IVLU(mOerpoYxQtj.cSAO#5(=@}qNv*n|w>r/+^QI*e%CB1cF6vVSo >jrJv' );
define( 'LOGGED_IN_KEY', '[oy(JE_uS.r:l+EfGatcnL5Rwa?1-7a-n3wO)`UEQ>@bn)&}T,jV~9|IejR%;y8C' );
define( 'NONCE_KEY', 'BaJ!`jE#lhYpYg==eSlVPOw .9>VD9:BSAceB+qN<n^Rx^Kr8WDEDZerrR&a8|3f' );
define( 'AUTH_SALT', '+2A2U BMvlN?5-l-T1f[2;!<5rSdNRG}LbBOPbh?-F]1HTkZ=FU1VMYUG=oN#H&z' );
define( 'SECURE_AUTH_SALT', 'P/`lBM9gdV[E6VCXI1bV?mE~L1=KGUW/ LZF.IAkR3w+aw$&%Gw0NPzY!^=`M/dN' );
define( 'LOGGED_IN_SALT', '0-WEbiwTzQdnR rAbh5O;2I|a{h(@p$FzoI?C1C-8<2:qSvyD,7g<JMXxkr9ysMn' );
define( 'NONCE_SALT', 'ekd9W^5!kPj60JB5A);&O.UPC*be1:MquKNP^lw)#{+o~H$yOBzG,vb@lqj+.0O9' );
	define('FS_METHOD','direct');
/**#@-*/
if ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')

  $_SERVER['HTTPS']='on';
/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix = 'platzi_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

