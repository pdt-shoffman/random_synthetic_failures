$('#logo').on('click', function() {

    var alertbox = `
	<div id="alert" class="alert alert-danger alert-dismissible fade show" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		Invalid password for <strong>${email}</strong>. Please try again.
	</div>
	`;

    $('#alert-container').html(alertbox);

});

