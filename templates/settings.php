<div class="wrap">
  <div class="">
    <h2><?php echo esc_html(get_admin_page_title()); ?></h2>
        <h2 class="nav-tab-wrapper definance-nav-tabs wp-clearfix">
      <a href="#definance-tab-1" class="nav-tab nav-tab-active">
        <?php esc_html_e('Main Setting', 'definance'); ?>
      </a>
    </h2>

    <div class="panel-tab-active" id="onout-lpwp-tab-1">
      <div class="">
        <form action="#" method="post" class="wp-onout-launchpad-form">
          <input type="hidden" name="onout_lpwp_save_setting" value="yes" />
          <?php wp_nonce_field('launchpad_save_settings', 'launchpad_nonce'); ?>
          <table class="form-table">
            <tbody>
              <tr>
                <th scope="row">
                  <label><?php echo esc_html('Permalink', 'onout_lpwp'); ?></label>
                </th>
                <td>
                  <code><?php echo esc_url( home_url('/') );?></code>
									<input 
                    name="onout_lpwp_page_slug" 
                    id="onout_lpwp_page_slug" 
                    type="text" 
                    value="<?php echo esc_attr( onout_lpwp_page_slug() );?>"
                    class="regular-text code"
                    <?php disabled( get_option( 'onout_lpwp_as_homepage' ), 'true' ); ?>
                  />
									<code>/</code>
									<a 
                    href="<?php echo onout_lpwp_page_url();?>" 
                    class="button <?php if( get_option( 'onout_lpwp_as_homepage' ) ) { echo ' disabled';}?>"
                    target="_blank"
                  >
                    <?php esc_html_e( 'View page', 'onout_lpwp' );?>
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label><?php echo esc_html('Home page'); ?></label>
                </th>
                <td>
                  <div>
                    <input
                      type="checkbox"
                      name="onout_lpwp_as_homepage"
                      id="onout_lpwp_as_homepage"
                      <?php echo (get_option('onout_lpwp_as_homepage', 'false') == 'true') ? 'checked' : '' ?> 
                    />
                    <label for="onout_lpwp_as_homepage"><?php echo esc_html('Show at front home page'); ?></label>
                    <script type="text/javascript">
                      (($) => {
                        $('#onout_lpwp_as_homepage').on('change', function (e) {
                          if ($('#onout_lpwp_as_homepage')[0].checked) {
                            $('#onout_lpwp_page_slug').attr('disabled', true)
                          } else {
                            $('#onout_lpwp_page_slug').attr('disabled', false)
                          }
                        })
                      })(jQuery)
                    </script>
                  </div>
                </td>
              </tr>
              <!--
              <tr>
                <th scope="row">
                  <label><?php echo esc_html('Master address'); ?></label>
                </th>
                <td>
                  <input
                    type="text"
                    name="onout_lpwp_master_address"
                    id="onout_lpwp_master_address"
                    value="<?php esc_attr_e(get_option('onout_lpwp_master_address', '0x....'))?>"
                  />
                  <p class="description">
                    <?php esc_html_e('Put here your master address'); ?>
                  </p>
                </td>
              </tr>
              -->
              <tr>
                <th scope="row"></th>
                <td>
                  <input
                    type="submit"
                    class="button button-primary"
                    value="<?php esc_attr_e('Save', 'onout_lpwp'); ?>" />
                  <span class="spinner"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</div>