var expect = require ('chai') .expect;
describe ('superclass', function () {
    var _ = require ('../source/superclass');
    describe ('null inheritance', function () {
        var metal = new Function;
        var gold = new Function;
        it ('gold is gold', function () {
            expect (_.instanceof (new gold, gold)) .true;
        });
        it ('gold is not metal', function () {
            expect (_.instanceof (new gold, metal)) .false;
        });
        it ('metal is not gold', function () {
            expect (_.instanceof (new metal, gold)) .false;
        });
    });
});
