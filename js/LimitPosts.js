/**
 * jQuery functions file for Limit Posts plugin
 *
 * Author: Colin Beeby
 */
$j = jQuery.noConflict();

$j(function(){
	
	//The current row in the rules tableRow
	var currentRow;
	
	//Handle the Add New Limit button
	$j('#add_new_limit').on('click', function(e){
		e.preventDefault();
		resetAddEditForm();
		$j('#add_role_submit').css('display', 'block');
		$j('#edit_role_submit').css('display', 'none');
		tb_show('New Limit Posts rule','TB_inline?height=230&width=275&inlineId=add-edit-tb');
		return false;
	});
	
	//Reset the add edit form back to default values
	function resetAddEditForm(){
		$j("#user_roles_select option[value='Contributor']").prop('selected', true);
		$j('#limit_number').val('5');
		$j("#post_types_select option[value='Post']").prop('selected', true);
		$j('#period_number').val('24');
		$j("#period_denominator option[value='Hours']").prop('selected', true);
	}
	
	//Handle the submit on the add/edit form
	$j('#add_role_submit').on('click', function(e){
		e.preventDefault();
		addNewLimitRule();
		tb_remove();
		return false;
	});
	
	//Add a new limit rule
	function addNewLimitRule(){	
		var tableRow = getRuleAsTableRow();
		
		$j('#rules_list').find('tbody').append(tableRow);
	}
	
	function getRuleAsTableRow(){
		var tableRow = $j('<tr>');
		
		var counter = existingRulesCount();
		
		var userRole = $j('#user_roles_select').find(':selected').text();
		var limit = $j('#limit_number').val();
		var postType = $j('#post_types_select').find(':selected').text();
		var periodNumber = $j('#period_number').val();
		var periodDenominator = $j('#period_denominator').find(':selected').text();
		
		tableRow.append('<td>'+ userRole +'<input type="hidden" name="limit_posts[rule][' + counter + '][role]" value="'+userRole+'"></td>');
		tableRow.append('<td>'+ limit +'<input type="hidden" name="limit_posts[rule][' + counter + '][limit]" value="'+limit+'"></td>');
		tableRow.append('<td>'+ postType +'<input type="hidden" name="limit_posts[rule][' + counter + '][post_type]" value="'+postType+'"></td>');
		tableRow.append('<td>'+periodNumber+'&nbsp;'+periodDenominator+'<input type="hidden" name="limit_posts[rule][' + counter + '][period_number]" value="'+periodNumber+'"><input type="hidden" name="limit_posts[rule][' + counter + '][period_denominator]" value="'+periodDenominator+'"></td>');
		tableRow.append('<td><span class="edit_rule button-primary">Edit</span> <span class="remove_rule button-primary">Remove</span></td>');
		
		return tableRow;
	}
	
	//Get a count of the number of existing limit rules
	function existingRulesCount(){
		var numberOfRows = $j('#rules_list tbody tr').length;
		
		return numberOfRows;
	}
	
	
	
	//Handle the edit rule button
	$j(document.body).on('click', '.edit_rule', function(e){
		e.preventDefault();
		
		currentRow = $j(this).parent().parent();
		
		populateAddEditForm();
		
		$j('#add_role_submit').css('display', 'none');
		$j('#edit_role_submit').css('display', 'block');
		
		tb_show('Edit Limit Posts rule', 'TB_inline?height=230&width=275&inlineId=add-edit-tb');
	});
	
	//Populate the add edit form with existing values
	function populateAddEditForm(){
		var existingValues = new Array(); 
		
		$j(currentRow).find('input').each(function(index,value){
			existingValues[index] = $j(value).val();
		});
		
		$j('#user_roles_select option[value="'+existingValues[0]+'"]').prop('selected', true);
		$j('#limit_number').val(existingValues[1]);
		$j('#post_types_select option[value="'+existingValues[2]+'"]').prop('selected', true);
		$j('#period_number').val(existingValues[3]);
		$j('#period_denominator option[value="'+existingValues[4]+'"]').prop('selected', true);
	}
	
	//Handle the remove rule button
	$j(document.body).on('click', '.remove_rule', function(e){
		e.preventDefault();
		
		$j(this).parent().parent().remove();
		
		return false;
	});	
	
	//Handle the submit on the add/edit form
	$j('#edit_role_submit').on('click', function(e){
		e.preventDefault();
		updateLimitRule();
		tb_remove();
		return false;
	});
	
	function updateLimitRule(){
		var tableRow = getRuleAsTableRow();
		
		$j(currentRow).replaceWith(tableRow);
	}
	
});