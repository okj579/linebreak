CKEDITOR.plugins.add("linebreak",{lang:"en,de",icons:"shy_entity,wbr_tag",hidpi:!0,onLoad:function(){CKEDITOR.addCss("span.shy {background:#afe0ef;padding: 0 1px;} span.shy:after {content:'-';}")},init:function(n){n.addCommand("insertShyEntity",{exec:function(n){var e=CKEDITOR.dom.element.createFromHtml("<span class='shy'>&shy;</span>");n.insertElement(e)}}),n.addCommand("insertWbrTag",{allowedContent:"wbr",exec:function(n){var e=CKEDITOR.dom.element.createFromHtml("<wbr>");n.insertElement(e)}}),n.ui.addButton("ShyEntity",{label:n.lang.linebreak.label_shy,toolbar:"linebreak",icon:this.path+"icons/shy_entity.png",command:"insertShyEntity"}),n.ui.addButton("WbrTag",{label:n.lang.linebreak.label_wbr,toolbar:"linebreak",icon:this.path+"icons/wbr_tag.png",command:"insertWbrTag"}),CKEDITOR.on("instanceReady",function(n){n.editor.dataProcessor.writer.selfClosingEnd=">"})}});