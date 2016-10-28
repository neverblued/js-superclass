var expect = require ('chai') .expect;
describe ('superclass', function () {
    var _ = require ('../source/superclass');
    describe ('basic inheritance', function () {
        var substance = new Function;
        var metal = new Function;
        var gold = new Function;
        _.superclass (gold, metal);
        it ('gold is metal', function () {
            expect (_.instanceof (new gold, metal)) .true;
        });
        it ('metal is not gold', function () {
            expect (_.instanceof (new metal, gold)) .false;
        });
        it ('metal is not substance', function () {
            expect (_.instanceof (new metal, substance)) .false;
        });
        it ('gold is not substance', function () {
            expect (_.instanceof (new gold, substance)) .false;
        });
    });
});
