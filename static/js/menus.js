if (window.matchMedia('(max-width: 768px)').matches) {
    var menusItems = ['about', 'departments', 'products', 'caret1', 'caret2', 'caret3'];

    for (var i = 0, len = menusItems.length; i < len; ++i) {
        var dom_obj = document.getElementById(menusItems[i]);
        var dom_obj_parent = dom_obj.parentNode;
        dom_obj_parent.removeChild(dom_obj);
    }
}