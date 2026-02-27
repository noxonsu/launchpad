<?php
/**
Plugin Name: LaunchPad
Description: LaunchPad
Author:  onout.tools
Requires PHP: 7.1
Text Domain: launchpad-wp
Domain Path: /lang
Version: 2.26.0227
 */
/* Define Plugin Constants */
defined( 'ABSPATH' ) || exit;
define( 'ONOUT_LPWP_TEMPLATE_DIR', __DIR__ . '/templates' );
define( 'ONOUT_LPWP_BASE_DIR', __DIR__ );
define( 'ONOUT_LPWP_BASE_FILE', __FILE__ );
define( 'ONOUT_LPWP_VER', '1.3.1' );
define( 'ONOUT_LPWP_URL', plugin_dir_url( __FILE__ ) );
/**
 * Plugin Init
 */
require __DIR__ . '/App/autoload.php';

// Perma link
function onout_lpwp_default_slug(){
	return 'launchpad';
}

function onout_lpwp_page_slug(){
	$slug = onout_lpwp_default_slug();
	if( get_option('onout_lpwp_slug') ) {
		$slug = get_option('onout_lpwp_slug');
	}
	return esc_html( $slug );
}

function onout_lpwp_page_url(){
	$page_url = home_url('/' . onout_lpwp_page_slug() . '/');
	return esc_url( trailingslashit( $page_url ) );
}


add_filter( 'query_vars', function( $vars ){
	$vars[] = 'onout_lpwp_page';

  return $vars;
} );

function onout_lpwp_add_rewrite_rules() {
	$slug = 'launchpad';
	if ( get_option('onout_lpwp_slug') ) {
		$slug = get_option('onout_lpwp_slug');
	}
  global $wp_rewrite; 
  $wp_rewrite->flush_rules(); 
	add_rewrite_rule( $slug . '/?$', 'index.php?onout_lpwp_page=1','top' );

}
add_action('init', 'onout_lpwp_add_rewrite_rules');


function onout_lpwp_include_template( $template ) {
	if ( get_query_var( 'onout_lpwp_page' ) ) {
		$template = ONOUT_LPWP_TEMPLATE_DIR . DIRECTORY_SEPARATOR . "home.php";
	}
	return $template;
}
add_filter( 'template_include', 'onout_lpwp_include_template');
/// < Perma link

// tempate as de finance page
function onout_lpwp_page_template( $page_template ){
    if ( get_page_template_slug() == 'onout_lpwp_pagetemplate' ) {
      $page_template = ONOUT_LPWP_TEMPLATE_DIR . DIRECTORY_SEPARATOR . "home.php";
    }
    return $page_template;
}
add_filter( 'page_template', 'onout_lpwp_page_template' );

function onout_lpwp_custom_template($single) {

  global $post;
  $meta = get_post_meta($post->ID);
  if (isset($meta['_wp_page_template']) and isset($meta['_wp_page_template'][0]) and ($meta['_wp_page_template'][0] == 'onout_lpwp_pagetemplate')) {
    $single = ONOUT_LPWP_TEMPLATE_DIR . DIRECTORY_SEPARATOR . "home.php";
  }

  return $single;
}

add_filter('single_template', 'onout_lpwp_custom_template');

function onout_lpwp_add_template_to_select( $post_templates, $wp_theme, $post, $post_type ) {
    $post_templates['onout_lpwp_pagetemplate'] = __('LaunchPad');
    return $post_templates;
}
add_filter( 'theme_page_templates', 'onout_lpwp_add_template_to_select', 10, 4 );
add_filter( 'theme_post_templates', 'onout_lpwp_add_template_to_select', 10, 4 );