<div class="wrap">
	<h2><?php _e('Limit Posts Settings ', self::$textDomain); ?><a title="add new limit rule" class="add-new-h2" id="add_new_limit">Add New Limit</a></h2>
	<?php add_thickbox(); ?>
	<div id="add-edit-tb" style="display:none">
		<form id="add-edit-limit-form" method="post">
		<ul>
			<li>
				<p class="description narrative">Any user whose role is&nbsp;</p>
				<select id="user_roles_select">
					<?php echo $this->getUserRoles(); ?>
				</select>
			</li>
			<li>
				<p class="description narrative">will be limited to publishing&nbsp;</p>
				<input type="number" name="limit_number" id="limit_number" min="0" max="9999" value="5">
			</li>
			<li>
				<div style="clear:both"></div>
				<p class="description narrative">posts of type&nbsp;</p>
				<select id="post_types_select">
					<?php echo $this->getPostTypes(); ?>
				</select>
			</li>
			<li>
				<p class="description narrative">within&nbsp;</p>
				<input type="number" name="period_number" id="period_number" min="0" max="9999" value="24">
				<select id="period_denominator" name="period_denominator">
					<option value="Seconds">Seconds</option>
					<option value="Minutes">Minutes</option>
					<option value="Hours" selected>Hours</option>
					<option value="Days">Days</option>
					<option value="Months">Months</option>
					<option value="Years">Years</option>
				</select>
			</li>
		</ul>
		<input type="submit" value="add" class="button-primary" id="add_role_submit">
		<input type="submit" value="Update" class="button-primary" id="edit_role_submit">
		</form>
	</div> <!--add-edit-tb-->
	<form method="post" action="options.php">
		<?php settings_fields('limit_posts_options'); ?>
		<?php $limitPostsRules = $this->getPluginOptions(); ?>
		<table class="wp-list-table widefat fixed striped" id="rules_list">
			<thead>
				<tr>
					<th>User Role</th>
					<th>Limit</th>
					<th>Post Type</th>
					<th>Period</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>User Role</th>
					<th>Limit</th>
					<th>Post Type</th>
					<th>Period</th>
					<th>Actions</th>
				</tr>
			</tfoot>
			<tbody>
			<?php
			$count = 0;
			if(isset($limitPostsRules['rule'])){
				foreach($limitPostsRules['rule'] as $k => $v){
					echo '<tr>';
					echo '<td>'.$v['role'].'<input type="hidden" name="limit_posts[rule]['.$count.'][role]" value="'.$v['role'].'"></td>';
					echo '<td>'.$v['limit'].'<input type="hidden" name="limit_posts[rule]['.$count.'][limit]" value="'.$v['limit'].'"></td>';
					echo '<td>'.$v['post_type'].'<input type="hidden" name="limit_posts[rule]['.$count.'][post_type]" value="'.$v['post_type'].'"></td>';
					echo '<td>'.$v['period_number'].'&nbsp;<input type="hidden" name="limit_posts[rule]['.$count.'][period_number]" value="'.$v['period_number'].'">'.$v['period_denominator'].'<input type="hidden" name="limit_posts[rule]['.$count.'][period_denominator]" value="'.$v['period_denominator'].'"></td>';
					echo '<td><span class="edit_rule button-primary">Edit</span> <span class="remove_rule button-primary">Remove</span></td>';
					echo '</tr>';
					$count++;
				}
			}
			?>
			</tbody>
		</table>
		<p class="submit">
			<input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" />
		</p>			
	</form>
</div> <!-- wrap -->