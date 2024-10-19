import { formatCurrency } from "../scripts/utils/money.js";
console.log ("test utils : format currency ");
console.log("test 1 with 2095 :")
if (formatCurrency(2095) === '20.95'){
    console.log("passed");
}
else {
    console.log("failed");
}

console.log("test 2 with 0 : ")
if (formatCurrency(0) === '0.00'){
    console.log('passed');
}
else {
    console.log('failed');
}
console.log("test with a decimal 2000.5 round up: ")
if (formatCurrency(2000.5) === '20.01'){
    console.log("passed");
}
else {
    console.log("failed ");
}
console.log("test with a decimal 2000.4 round down: ")
if (formatCurrency(2000.4) === '20.00'){
    console.log("passed");
}
else {
    console.log("failed ");
}

