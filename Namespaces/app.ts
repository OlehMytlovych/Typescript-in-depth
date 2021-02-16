/// <reference path="./utility-functions.ts" />

const n = Utility.maxBooksAllowed(19);
console.log(n);

import util = Utility.Fees;
const m = util.calculateLatefee(10);
console.log(m);
