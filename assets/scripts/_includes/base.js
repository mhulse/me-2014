$(function() {
	
	$('#headroom').headroom({
		'tolerance': 5,
		'offset': 80,
		'classes': {
			'initial': 'hr_animated',
			'pinned': 'hr_slide-down',
			'unpinned': 'hr_slide-up',
			'top': 'hr_top',
			'notTop': 'hr_top'
		}
	});
	
});
