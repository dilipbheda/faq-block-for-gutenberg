jQuery( document ).ready( function( $ ) {
  	//Question handler
	$( 'div.question' ).on( 'click', function() {
		var _this = $( this );
		_this.hasClass( 'active' ) ? _this.removeClass( 'active' ) : _this.addClass( 'active' );
		$( this ).next( 'div.answer' ).fadeToggle( 'slow', 'linear' );
	} );
} );
