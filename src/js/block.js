( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	const { registerBlockType } = wp.blocks;

	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	const {
		useState
	} = wp.element

	/**
	 * WordPress dependencies
	 */
	const { __ } = wp.i18n;

	const {
		select,
		dispatch
	} = wp.data;

	const {
		RichText,
		useBlockProps,
		InspectorControls,
		ColorPalette,
		BlockControls,
		AlignmentToolbar
	} = wp.blockEditor || wp.editor;

	const { PanelBody } = wp.components;

	/**
	 * Clone FAQ block.
	 */
	const cloneSelectedBlocks = (e) => {
		e.preventDefault();
		const { duplicateBlocks } = dispatch('core/block-editor');
		const block_ids = select('core/block-editor').getSelectedBlockClientIds();
		duplicateBlocks(block_ids)
	};

	/**
	 * Delete FAQ block.
	 */
	const deleteSelectedBlocks = (e) => {
		e.preventDefault();
		const { removeBlocks } = dispatch('core/block-editor');
		const block_ids = select('core/block-editor').getSelectedBlockClientIds();
		removeBlocks(block_ids);
	};

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	// Register guternber block.
	registerBlockType('faq-block-for-gutenberg/faq', {
		title: __( 'FAQ', 'faq-block-for-gutenberg' ),
		icon: 'index-card',
		category: 'layout',
		attributes: {
			question: {
				type: 'string',
				source: 'html',
				selector: 'h4'
			},
			answer: {
				type: 'string',
				source: 'html',
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
			}
		},
		edit: function ( props ) {
			const [ focusedEditable, setfocusedEditable ] = useState(false);
			const isSelected = useState(true);
			const blockProps = useBlockProps();
			const attributes = props.attributes;
			const alignment = props.attributes.alignment;

			// Block alignment control.
			const onChangeAlignment = function ( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			};

			// Question onchange. 
			const onChangeQuestion = function ( value ) {
				props.setAttributes( { question: value } );
			};

			// the function which handles what happens when focus is on the question
			const onFocusQuestion = function ( focus ) {
				setfocusedEditable( 'question' );
			};

			// the function which handles what happens when the answer is changed
			const onChangeAnswer = function ( value ) {
				props.setAttributes( { answer: value } );
			};

			// the function which handles what happens when focus is on the answer
			const onFocusAnswer = function ( focus ) {
				setfocusedEditable( 'answer' );
			};
		
			const ShowAnswer = function ( event ) {
				let FaqBlockElement = event.target.closest( '.question' );
				if ( null === FaqBlockElement ) {
					return;
				}
				let FaqAnswer = FaqBlockElement.parentNode.querySelector( '.answer' );
				if ( FaqAnswer ) {
					let ClassList =  FaqAnswer.classList || [];
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

			return(
				<div { ...blockProps }>
					{
						isSelected && (
							<>
								<BlockControls key="controls">
									<AlignmentToolbar
										value={ alignment }
										onChange={ onChangeAlignment }
									/>
								</BlockControls>

								<InspectorControls key="inspector">
									<PanelBody title={ __( 'Background color', 'faq-block-for-gutenberg' ) } initialOpen={true}>
										<ColorPalette
											value={ props.attributes.backgroundColor }
											onChange={( value ) => props.setAttributes( { backgroundColor: value } )}
										/>
									</PanelBody>

									<PanelBody title={ __( 'Question Font Color', 'faq-block-for-gutenberg' ) } initialOpen={false}>
										<ColorPalette
											colors={['#F00']}
											value={ props.attributes.questionText }
											onChange={( value ) => props.setAttributes( { questionText: value } )}
										/>
									</PanelBody>

									<PanelBody title={ __( 'Question Background', 'faq-block-for-gutenberg' ) } initialOpen={false}>
										<ColorPalette
											colors={['#000']}
											value={ props.attributes.questionBg }
											onChange={( value ) => props.setAttributes( { questionBg: value } )}
										/>
									</PanelBody>

									<PanelBody title={ __( 'Answer Font Color', 'faq-block-for-gutenberg' ) } initialOpen={false}>
										<ColorPalette
											colors={['#F00']}
											value={ props.attributes.answerText }
											onChange={( value ) => props.setAttributes( { answerText: value } )}
										/>
									</PanelBody>

									<PanelBody title={ __( 'Answer Background', 'faq-block-for-gutenberg' ) } initialOpen={false}>
										<ColorPalette
											colors={['#000']}
											value={ props.attributes.answerBg }
											onChange={( value ) => props.setAttributes( { answerBg: value } )}
										/>
									</PanelBody>
								</InspectorControls>
								<div className={props.className} key="editor" style={{ background: attributes.backgroundColor }} onClick={ShowAnswer}>
									<RichText
										{ ...blockProps }
										allowedFormats={ [ 'core/bold', 'core/italic' ] }
										key='question'
										tagName='div'
										className='question'
										placeholder={ __( 'Question:', 'faq-block-for-gutenberg' ) }
										value={ attributes.question }
										onChange={ onChangeQuestion }
										focus={ focusedEditable === 'question' }
										onFocus={onFocusQuestion}
										style={{ background: attributes.questionBg, color: attributes.questionText, textAlign: alignment }}
									/>
									<RichText
										{ ...blockProps }
										key='answer'
										tagName='div'
										className='answer'
										placeholder= { __( 'Answer:', 'faq-block-for-gutenberg' ) }
										value={ attributes.answer }
										onChange={ onChangeAnswer }
										focus={ focusedEditable === 'answer' }
										onFocus={ onFocusAnswer }
										style={{ background: attributes.answerBg, color: attributes.answerText, textAlign: alignment }}
									/>
								</div>
								<div className="faq-block-action-button">
									<a href="" className="faq-block-action-clone" onClick={cloneSelectedBlocks}>{__( 'Click to clone', 'faq-block-for-gutenberg' )}</a>
									<a href="" className="faq-block-action-remove" onClick={deleteSelectedBlocks}>{__( 'Remove', 'faq-block-for-gutenberg' )}</a>
								</div>
							</>
						)
					}
				</div>
			);
	},
	save: function save(props) {
		const className = props;
		const {
			id,
			question,
			answer,
			backgroundColor,
			questionText,
			questionBg,
			answerText,
			alignment,
			answerBg
		} = props.attributes;

		return(
			<div className={className} data-id={id} style={{ background: backgroundColor }}>
				<div className="question" style={{ background: questionBg, textAlign:alignment, color: questionText }}>
					<h4 style={{ color: questionText }} dangerouslySetInnerHTML={{ __html: question }}></h4>
				</div>
				<div className="answer" style={{ background: answerBg, color: answerText, textAlign:alignment }} dangerouslySetInnerHTML={{ __html: answer }}></div>
			</div>
		);
	}
});
}(window.wp));
