<?php
/**
 * Plugin Name:       Virtual Labs
 * Plugin URI:        https://github.com/carlouni/virtual-labs
 * Description:       Displays a list of APNIC virtual labs.
 * Version:           0.0.1
 * Requires at least: 5.5
 * Requires PHP:      7.2
 * Author:            Gonzalo Carlo Cardenas Magno
 * Author URI:        https://github.com/carlouni
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 */

$plugin_uri = plugin_dir_url(__FILE__);
$react_app_uri = "{$plugin_uri}assets/js/main.js";
add_shortcode('virtual_labs', function() use($react_app_uri){
    return <<<EOT
<div id="apnic-virtual-labs"></div>
<script src="$react_app_uri"></script>
EOT;
 });