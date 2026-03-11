<?php
namespace ONOUT_LPWP\Controllers;

use ONOUT_LPWP\Controller;

class MenuPageController extends Controller
{
  /**
   *
   */
  public function handle()
  {
      add_action('admin_menu', array($this, 'menu'));
  }

  public function menu()
  {
    add_menu_page(
      esc_html__('LaunchPad', 'launchpad'),
      esc_html__('LaunchPad', 'launchpad'),
      'manage_options',
      'onout_lpwp',
      [$this, 'page'],
      'dashicons-admin-site-alt3',
      81
    );
  }

  public function page()
  {
    $this->handleRequest();
    $this->view->display('/settings.php');
  }

  public function handleRequest()
  {
    if (isset($_POST['onout_lpwp_save_setting'])) {
      if (!isset($_POST['launchpad_nonce']) || !wp_verify_nonce($_POST['launchpad_nonce'], 'launchpad_save_settings')) {
        wp_die('Security check failed');
      }
      if (isset( $_POST['onout_lpwp_as_homepage'] ) and ( $_POST['onout_lpwp_as_homepage'] == 'on' ) ) {
        update_option('onout_lpwp_as_homepage', 'true');
      } else {
        delete_option('onout_lpwp_as_homepage');
      }
      if (isset( $_POST['onout_lpwp_page_slug'] )) {
        update_option('onout_lpwp_slug', untrailingslashit( sanitize_title( $_POST['onout_lpwp_page_slug'] ) ));
      }
      if (isset( $_POST['onout_lpwp_master_address'] ) ) {
        update_option('onout_lpwp_master_address', sanitize_text_field( $_POST['onout_lpwp_master_address'] ) );
      }
    
      ?>
      <div id="message" class="notice notice-success is-dismissible">
        <p><?php esc_html_e('Settings saved','onout-lpwp'); ?></p>
      </div>
      <?php
    }
  }


}