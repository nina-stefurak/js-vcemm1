// Import stylesheets
import './style.css';
var array = [7, 3, 4]
function simpleArraySum(korzinka) {
    var sum = 0;
    korzinka.forEach(jabloczko => sum += jabloczko)
    return sum
}
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Hello</h1>` + simpleArraySum(array);
