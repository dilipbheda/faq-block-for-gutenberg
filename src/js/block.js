( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	 var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	 var el = wp.element.createElement;
	 /**
	  * Editable block
	  */
	  var Editable = wp.blockEditor.RichText;
	 /**
	  * InspectorControls
	  */
	  var InspectorControls = wp.blockEditor.InspectorControls;

	 /**
	  * PanelColor
	  */
	  var PanelColor = wp.components.PanelBody;
	 /**
	  * ColorPalette
	  */
	  var ColorPalette = wp.blockEditor.ColorPalette;
	 /**
	  * BlockControls
	  */
	  var BlockControls = wp.blockEditor.BlockControls;
	 /**
	  * BlockControls
	  */
	  var AlignmentToolbar = wp.blockEditor.AlignmentToolbar;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	// Register guternber block.
	registerBlockType('faq-block-for-gutenberg/faq', {
		title: wp.i18n.__( 'FAQ', 'faq-block-for-gutenberg' ),
		icon: 'index-card',
		category: 'layout',
		attributes: {
			question: {
				type: 'array',
				source: 'children',
				selector: 'h4'
			},
			answer: {
				type: 'array',
				source: 'children',
				selector: '.answer'
			},
			backgroundColor: {
				type: 'string'
			},
			questionText: {
				type: 'string'
			},
			questionBg: {
				type: 'string'
			},
			answerText: {
				type: 'string'
			},
			answerBg: {
				type: 'string'
			},
			alignment: {
				type: 'string',
			},
		},

		edit: function ( props ) {
			var focusedEditable = props.focus ? props.focus.editable || 'question' : null;
			var attributes = props.attributes;
			var alignment = props.attributes.alignment;
			var isSelected = props.isSelected;

		// Block alignment control.
		var onChangeAlignment = function ( newAlignment ) {
			props.setAttributes( { alignment: newAlignment } );
		};

		// Question onchange. 
		var onChangeQuestion = function ( value ) {
			props.setAttributes( { question: value } );
		};

		// the function which handles what happens when focus is on the question
		var onFocusQuestion = function ( focus ) {
			props.setFocus( _.extend( {}, focus, { editable: 'question' } ) );
		};

		// the function which handles what happens when the answer is changed
		var onChangeAnswer = function ( value ) {
			props.setAttributes( { answer: value } );
		};

		// the function which handles what happens when focus is on the answer
		var onFocusAnswer = function ( focus ) {
			props.setFocus( _.extend( {}, focus, { editable: 'answer' } ) );
		};
		
		var ShowAnswer = function ( event ) {
			var NextDiv = event.target.closest( '.wp-block-faq-block-for-gutenberg-faq' ).querySelector( '.answer' );
			if ( event.target.parentNode.parentNode.classList.length > 0 && ! event.target.parentNode.parentNode.classList.contains( 'question' ) ) {	
				NextDiv = null;
			}
			if ( NextDiv != null ) {
				if ( event.target.classList.length > 0 && ! event.target.classList.contains( 'question' ) ) {
					NextDiv = null;
				}
			}
			if ( NextDiv != null ) {
				var ClassList =  NextDiv.classList || [];
				if ( ( ClassList.length > 0 ) && ( ClassList.contains( 'editor-rich-text' ) || ClassList.contains( 'block-editor-rich-text__editable' ) ) ) {
					if ( ClassList.contains( 'edit-answer' ) ) {
						ClassList.remove( 'edit-answer' );
						event.target.closest( '.question' ).classList.remove( 'active' );
					} else {
						ClassList.add( 'edit-answer' );
						event.target.closest( '.question' ).classList.add( 'active' );
					}
				}
			}
		};
		
		return el(
			'div',
			null,
			isSelected && el(
				BlockControls,
				{ key: 'controls' },
				el(
					AlignmentToolbar,
					{
						value: alignment,
						onChange: onChangeAlignment
					}
					)
				),

			el(
				InspectorControls,
				{ key: 'inspector' },
				el( PanelColor, 
					{ title: wp.i18n.__( 'Background color', 'faq-block-for-gutenberg' ), initialOpen: true }, 
					el( ColorPalette, 
					{
						value: props.attributes.backgroundColor, 
						onChange: function ( value ) {
							props.setAttributes( { backgroundColor: value } );
						}
					}
					)
					),
				el( PanelColor, 
					{ title: wp.i18n.__( 'Question Font Color', 'faq-block-for-gutenberg' ), initialOpen: false }, 
					el( ColorPalette, 
					{
						value: props.attributes.questionText, 
						colors: ['#F00'], 
						onChange: function ( value ) {
							props.setAttributes( { questionText: value } );
						}
					}
					),
					),
				el( PanelColor, 
					{ title: wp.i18n.__( 'Question Background', 'faq-block-for-gutenberg' ), initialOpen: false }, 
					el( ColorPalette,
					{
						value: props.attributes.questionBg, 
						colors: ['#000'], 
						onChange: function ( value ) {
							props.setAttributes( { questionBg: value } );
						}
					}
					),
					),
				el( PanelColor, 
					{ title: wp.i18n.__( 'Answer Font Color', 'faq-block-for-gutenberg' ), initialOpen: false }, 
					el( ColorPalette, 
					{
						value: props.attributes.answerText, 
						colors: ['#F00'], 
						onChange: function ( value ) {
							props.setAttributes( { answerText: value } );
						}
					}
					),
					),
				el( PanelColor, 
					{ title: wp.i18n.__( 'Answer Background', 'faq-block-for-gutenberg' ), initialOpen: false }, 
					el( ColorPalette,
					{
						value: props.attributes.answerBg, 
						colors: ['#000'], 
						onChange: function ( value ) {
							props.setAttributes( { answerBg: value } );
						}
					}
					),
					),
				el( 'hr', null ),
				),
			el(
				'div',
				{ className: props.className, key: 'editor', style:{ background: attributes.backgroundColor }, onClick: ShowAnswer },
				el(Editable, {
					tagName: 'div',
					className: 'question',
					placeholder: wp.i18n.__( 'Question:', 'faq-block-for-gutenberg' ),
					value: attributes.question,
					onChange: onChangeQuestion,
					focus: focusedEditable === 'question',
					onFocus: onFocusQuestion,
					style: { background: attributes.questionBg, color: attributes.questionText, textAlign: alignment }
				}),
				el(Editable, {
					tagName: 'div',
					className: 'answer',
					placeholder: wp.i18n.__( 'Answer:', 'faq-block-for-gutenberg' ),
					value: attributes.answer,
					onChange: onChangeAnswer,
					focus: focusedEditable === 'answer',
					onFocus: onFocusAnswer,
					style: { background: attributes.answerBg, color: attributes.answerText, textAlign: alignment }
				}),
				)
			);
	},
	save: function save(props) {
		/**
		 * Get classname
		 */
		 var className = props.className;
		/**
		 * Get Quesion
		 */
		 var question = props.attributes.question;
		/**
		 * Get Answer 
		 */
		 var answer = props.attributes.answer;
		/**
		 * Get ID
		 */
		 var id = props.attributes.id;
		/**
		 * Get background color
		 */
		 var backgroundColor = props.attributes.backgroundColor;
		/**
		 * Get Question
		 */
		 var questionText = props.attributes.questionText;
		/**
		 * Get Question background
		 */
		 var questionBg = props.attributes.questionBg;
		/**
		 * Get answer
		 */
		 var answerText = props.attributes.answerText;
		/**
		 * Alignment
		 */
		 var alignment = props.attributes.alignment;
		/**
		 * Background
		 */
		 var answerBg = props.attributes.answerBg;
		// Return content
		return el(
			'div',
			{ className: className, 'data-id': id, style:{ background: backgroundColor } },
			el(
				'div',
				{ className: 'question', style:{ background: questionBg, textAlign:alignment, color: questionText } },
				el(
					'h4',
					{
						style:{ color: questionText }
					},
					null,
					question
					)
				),
			el(
				'div',
				{ className: 'answer', style:{ background: answerBg, color: answerText, textAlign:alignment } },
				answer
				)
			);
	}
});
} )(
window.wp
);
