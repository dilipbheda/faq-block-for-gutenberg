document.addEventListener('DOMContentLoaded', function(event) {
	var toggleSelector = document.querySelectorAll('div.question');
	if ( toggleSelector ) {
		toggleSelector.forEach(function(currentElement, index) {
			currentElement.addEventListener('click', function() {
				var _classList = this.classList;
				this.classList.toggle('active');
			});
		});
	}
});