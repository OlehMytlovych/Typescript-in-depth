var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLatefee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLatefee = calculateLatefee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('this is a private functions');
    }
})(Utility || (Utility = {}));
/// <reference path="./utility-functions.ts" />
var n = Utility.maxBooksAllowed(19);
console.log(n);
var util = Utility.Fees;
var m = util.calculateLatefee(10);
console.log(m);
