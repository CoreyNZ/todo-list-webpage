// will only execute once the DOM is ready for Javascript code to execute. 
$(document).ready(function(e) {
	var selectedTask;
	var editTask;
	
	
	//the icon 'ui-icon-circle-plus' is provided by jQuery UI
	$('.sortlist').sortable({
		//both lists have the class 'sortlist' so can be connectedWith just sortlist
		connectWith :'.sortlist',
		//changes cursor to a pointer
		cursor : 'pointer', 
		//highlights the space in the list where a user can drop an item
		placeholder : 'ui-state-highlight',
		//elements on the list that won't work as handles for dragging the item
		cancel : '.delete,.done,.edit'	
	});
	
	$('.sortlist').on('click','.delete',function(){
		selectedTask = $(this);
		$('#delete-dialog').dialog('open');
	});
	
	
	$('.sortlist').on('click','.edit',function(){
		editTask = $(this);
		$('#edit-dialog').dialog('open');
	});
	
	
	
	$('#delete-dialog').dialog({
		modal: true, autoOpen: false,
		buttons : {
			"Yes": function () {
				
				//need to do something here.
				selectedTask.parent('li').effect('pulsate',function() {
					$(this).remove();
				});
				
				$(this).dialog('close');
			},
			
			"No": function () { 
				$(this).dialog('close');}	
			}
	});
	
	
	$('#edit-dialog').dialog({
		modal: true, autoOpen: false,
		buttons : {
			"Yes": function () {
				
				//need to do something here.
				selectedTask.parent('li').effect('pulsate',function() {
					$(this).remove();
				});
				
				$(this).dialog('close');
			},
			
			"No": function () { 
				$(this).dialog('close');}	
			}
	});
	
	
	
	
	
	
	
	
	$('#add-todo').button({
		icons: { primary: "ui-icon-circle-plus"}}).click(
			function() {
				$('#new-todo').dialog('open');
				//$('#new-todo').dialog('close');
			});
		
			
	// ui-icon-plus -> jQuery icon for edit
			
			
	$('#todo-list').on('click','.done',function() {
		var $taskItem = $(this).parent('li');
		$taskItem.slideUp(250, function() {
			var $this = $(this);
		    //remove selected HTML element or elements from the page (still exists in memory)
			$this.detach();
			$('#completed-list').prepend($this);
			$this.slideDown();
				});
			});
			
	$('#new-todo').dialog({
		modal : true, autoOpen :false,
		buttons : {
			"Add task" : function(){
				var taskName = $('#task').val();
				if (taskName === '') { return false; }
				var taskHTML = '<li><span class="done">%</span>';
				taskHTML += '<span class="delete">x</span>';
				taskHTML += '<span class="edit"></span>';
				taskHTML += '<span class="task"></span></li>';
				var $newTask = $(taskHTML);
				$newTask.find('.task').text(taskName);
				$newTask.hide();
				$('#todo-list').prepend($newTask);
				$newTask.show('clip',250).effect('highlight',1000);
				$(this).dialog('close');
				//Clear the dialog box
				$('#task').val('');
			},
			"Cancel" : function() { 
				$(this).dialog('close');
				$('#task').val('');
			}
		}
	
	});
		

}); // end ready