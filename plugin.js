CKEDITOR.plugins.add("linebreak", {
    lang: "en,de",
    requires: 'widget',
    icons: "shy_entity,wbr_tag",
    hidpi: false,
    onLoad: function() {
        CKEDITOR.addCss("span.cke_shy,span.cke_wbr {background:#afe0ef;}")
    },
    init: function(editor) {
        editor.widgets.add('shyEntity', {
            pathName: '&amp;shy;',
            template: function(){
                var innerElement = new CKEDITOR.htmlParser.element('span', {
                    'class': 'cke_shy',
                    'title': editor.lang.linebreak.label_shy
                });
                innerElement.add(new CKEDITOR.htmlParser.text('-'));
                return innerElement.getOuterHtml();
            }(),
            downcast: function() {
                return new CKEDITOR.htmlParser.text('&shy;');
            }
        });
        editor.widgets.add('wbrTag', {
            pathName: 'wbr',
            template: function(){
                var innerElement = new CKEDITOR.htmlParser.element('span', {
                    'class': 'cke_wbr',
                    'title': editor.lang.linebreak.label_wbr
                });
                innerElement.add(new CKEDITOR.htmlParser.text('&crarr;'));
                return innerElement.getOuterHtml();
            }(),
            downcast: function() {
                return new CKEDITOR.htmlParser.element('wbr');
            }
        });
        editor.ui.addButton("ShyEntity", {
            label: editor.lang.linebreak.label_shy,
            toolbar: "linebreak",
            icon: this.path + "icons/shy_entity.png",
            command: "shyEntity"
        });
        editor.ui.addButton("WbrTag", {
            label: editor.lang.linebreak.label_wbr,
            toolbar: "linebreak",
            icon: this.path + "icons/wbr_tag.png",
            command: "wbrTag"
        });
    },
    afterInit: function(editor) {
        editor.dataProcessor.dataFilter.addRules({
            elements: {
                wbr: function() {
                    var innerElement = new CKEDITOR.htmlParser.element('span', {
                        'class': 'cke_wbr',
                        'title': editor.lang.linebreak.label_wbr
                    });
                    innerElement.add(new CKEDITOR.htmlParser.text('&crarr;'));
                    return editor.widgets.wrapElement(innerElement, 'wbrTag');
                }
            },
            text: function(text) {
                return text.replace(/&shy;|\xAD/g, function() {
                    var innerElement = new CKEDITOR.htmlParser.element('span', {
                        'class': 'cke_shy',
                        'title': editor.lang.linebreak.label_shy
                    });
                    innerElement.add(new CKEDITOR.htmlParser.text('-'));
                    return editor.widgets.wrapElement(innerElement, 'shyEntity').getOuterHtml();
                });
            }
        });
    }
});
