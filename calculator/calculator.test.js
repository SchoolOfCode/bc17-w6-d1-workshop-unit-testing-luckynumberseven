//TICKET 4
/*```js
 * calculate('+', 9, 10); // should return 19
 * calculate('-', 4, 6); // should return -2
 * calculate('*', -6, -8); // should return 48
 * calculate('/', 121, 11); // should return 11
 * calculate('sq', 5); // should return 25
 * calculate('sq', 3, 44); // should return 9, as the 44 is ignored
 * calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
 * calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
 * ```
 */
//test to see if vitest correctly installed/imported DONE
//import {test} from "vitest";
import {expect, test} from 'vitest'
import {calculate} from './calculator.js'
test ("This should be correct!!");

/* calculate('+', 9, 10); // should return 19*/
test ('adds 9 +10 to equal 19', function(){
    expect(calculate("+",9,10)).toBe(19)
})

//calculate('-', 4, 6); // should return -2

test ('subtracts 4 - 6 to equal -2', function(){
    expect(calculate("-",4,6)).toBe(-2)
})

//calculate('*', -6, -8); // should return 48

test ('multiplies -6 by -8 to equal 48', function(){
    expect(calculate("*",-6,-8)).toBe(48)
})

//calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
test ('Pizza -41414 by 2 to equal more Pizza!!!', function(){
    expect(calculate("🍕",-41414,2)).toBe("YUM! Its delicious!")
})