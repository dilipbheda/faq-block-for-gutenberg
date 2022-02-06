!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n,o,r,i,s,a,l,u,c;n=window.wp,o=n.blocks.registerBlockType,r=n.element.createElement,i=n.blockEditor.RichText,s=n.blockEditor.InspectorControls,a=n.components.PanelBody,l=n.blockEditor.ColorPalette,u=n.blockEditor.BlockControls,c=n.blockEditor.AlignmentToolbar,o("faq-block-for-gutenberg/faq",{title:n.i18n.__("FAQ","faq-block-for-gutenberg"),icon:"index-card",category:"layout",attributes:{question:{type:"array",source:"children",selector:"h4"},answer:{type:"array",source:"children",selector:".answer"},backgroundColor:{type:"string"},questionText:{type:"string"},questionBg:{type:"string"},answerText:{type:"string"},answerBg:{type:"string"},alignment:{type:"string"}},edit:function(t){var e=t.focus?t.focus.editable||"question":null,o=t.attributes,g=t.attributes.alignment,b=t.isSelected;return r("div",null,b&&r(u,{key:"controls"},r(c,{value:g,onChange:function(e){t.setAttributes({alignment:e})}})),r(s,{key:"inspector"},r(a,{title:n.i18n.__("Background color","faq-block-for-gutenberg"),initialOpen:!0},r(l,{value:t.attributes.backgroundColor,onChange:function(e){t.setAttributes({backgroundColor:e})}})),r(a,{title:n.i18n.__("Question Font Color","faq-block-for-gutenberg"),initialOpen:!1},r(l,{value:t.attributes.questionText,colors:["#F00"],onChange:function(e){t.setAttributes({questionText:e})}})),r(a,{title:n.i18n.__("Question Background","faq-block-for-gutenberg"),initialOpen:!1},r(l,{value:t.attributes.questionBg,colors:["#000"],onChange:function(e){t.setAttributes({questionBg:e})}})),r(a,{title:n.i18n.__("Answer Font Color","faq-block-for-gutenberg"),initialOpen:!1},r(l,{value:t.attributes.answerText,colors:["#F00"],onChange:function(e){t.setAttributes({answerText:e})}})),r(a,{title:n.i18n.__("Answer Background","faq-block-for-gutenberg"),initialOpen:!1},r(l,{value:t.attributes.answerBg,colors:["#000"],onChange:function(e){t.setAttributes({answerBg:e})}})),r("hr",null)),r("div",{className:t.className,key:"editor",style:{background:o.backgroundColor},onClick:function(t){var e=t.target.closest(".wp-block-faq-block-for-gutenberg-faq").querySelector(".answer");if(t.target.parentNode.parentNode.classList.length>0&&!t.target.parentNode.parentNode.classList.contains("question")&&(e=null),null!=e&&t.target.classList.length>0&&!t.target.classList.contains("question")&&(e=null),null!=e){var n=e.classList||[];n.length>0&&(n.contains("editor-rich-text")||n.contains("block-editor-rich-text__editable"))&&(n.contains("edit-answer")?(n.remove("edit-answer"),t.target.closest(".question").classList.remove("active")):(n.add("edit-answer"),t.target.closest(".question").classList.add("active")))}}},r(i,{tagName:"div",className:"question",placeholder:n.i18n.__("Question:","faq-block-for-gutenberg"),value:o.question,onChange:function(e){t.setAttributes({question:e})},focus:"question"===e,onFocus:function(e){t.setFocus(_.extend({},e,{editable:"question"}))},style:{background:o.questionBg,color:o.questionText,textAlign:g}}),r(i,{tagName:"div",className:"answer",placeholder:n.i18n.__("Answer:","faq-block-for-gutenberg"),value:o.answer,onChange:function(e){t.setAttributes({answer:e})},focus:"answer"===e,onFocus:function(e){t.setFocus(_.extend({},e,{editable:"answer"}))},style:{background:o.answerBg,color:o.answerText,textAlign:g}})))},save:function(t){var e=t.className,n=t.attributes.question,o=t.attributes.answer,i=t.attributes.id,s=t.attributes.backgroundColor,a=t.attributes.questionText,l=t.attributes.questionBg,u=t.attributes.answerText,c=t.attributes.alignment,g=t.attributes.answerBg;return r("div",{className:e,"data-id":i,style:{background:s}},r("div",{className:"question",style:{background:l,textAlign:c,color:a}},r("h4",{style:{color:a}},null,n)),r("div",{className:"answer",style:{background:g,color:u,textAlign:c}},o))}})}]);