var IS = module.exports;

IS.instanceof = function (target, parent) {
    if (typeof parent !== 'function') {
        return false;
    }
    var child = target.constructor;
    while (child) {
        if (child === parent) {
            return true;
        }
        child = child.superclass;
    }
    return false;
};

IS.superclass = function (child, parent) {
    var blast = new Function;
    blast.prototype = parent.prototype;
    var blast = child.prototype = new blast;
    blast.constructor = child;
    child.superclass = parent;
};
