var expect = require ('chai') .expect;
describe ('superclass', function () {
    var _ = require ('../source/superclass');
    describe ('chain inheritance', function () {
        var substance = new Function;
        var metal = new Function;
        var gold = new Function;
        _.superclass (gold, metal);
        _.superclass (metal, substance);
        it ('gold is metal', function () {
            expect (_.instanceof (new gold, metal)) .true;
        });
        it ('metal is substance', function () {
            expect (_.instanceof (new metal, substance)) .true;
        });
        it ('gold is substance', function () {
            expect (_.instanceof (new gold, substance)) .true;
        });
    });
});
