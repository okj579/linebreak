CKEDITOR.plugins.add("linebreak", {
    lang: "en,de",
    icons: "shy_entity,wbr_tag",
    hidpi: false,
    onLoad: function() {
        CKEDITOR.addCss("span.shy {background:#afe0ef;padding: 0 1px;} span.shy:after {content:'-';}")
    },
    init: function(editor) {
        editor.addCommand("insertShyEntity", {
            exec: function(n) {
                var e = CKEDITOR.dom.element.createFromHtml("<span class='shy'>&shy;</span>");
                n.insertElement(e)
            }
        });
        editor.addCommand("insertWbrTag", {
            allowedContent: "wbr", exec: function(n) {
                var e = CKEDITOR.dom.element.createFromHtml("<wbr>");
                n.insertElement(e)
            }
        });
        editor.ui.addButton("ShyEntity", {
            label: editor.lang.linebreak.label_shy,
            toolbar: "linebreak",
            icon: this.path + "icons/shy_entity.png",
            command: "insertShyEntity"
        });
        editor.ui.addButton("WbrTag", {
            label: editor.lang.linebreak.label_wbr,
            toolbar: "linebreak",
            icon: this.path + "icons/wbr_tag.png",
            command: "insertWbrTag"
        });
    }
});
