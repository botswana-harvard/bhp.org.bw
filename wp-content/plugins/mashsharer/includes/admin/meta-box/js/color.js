jQuery( function ( $ )
{
	'use strict';

	/**
	 * Update color picker element
	 * Used for static & dynamic added elements (when clone)
	 */
	function update()
	{
		var $this = $( this ),
			$container = $this.closest( '.mashsb-rwmb-color-clone' ),
			data = $.extend(
				{
					change: function()
					{
						$( this ).trigger( 'color:change' );
					},
					clear: function()
					{
						$( this ).trigger( 'color:clear' );
					}
				},
				$this.data( 'options' ) );

		// Clone doesn't have input for color picker, we have to add the input and remove the color picker container
		if ( $container.length > 0 )
		{
			$this.appendTo( $container ).siblings( '.wp-picker-container' ).remove();
		}

		// Show color picker
		$this.wpColorPicker( data );
	}

	$( ':input.mashsb-rwmb-color' ).each( update );
	$( '.mashsb-rwmb-input' ).on( 'clone', 'input.mashsb-rwmb-color', update );
} );
