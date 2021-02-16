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
