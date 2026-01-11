Primitive data types in JavaScript :-
    1. number
    2. string
    3. boolean
    4. undifined
    5. null
    6. bigint
    7. symbol

    1.Number :-
        -> Represents integers & floating numbers.
        -> typeof number is number.

        Example: let age = 21;

    2.String :-
        -> Sequence of characters (text)
        -> Writen in ' ', " " and ` ` (Back tick) for multiple line strings,
        -> typeof string is string.

        Example: 
            let name = "Raj";
            let last_name = 'Jyante';
            let Message = ` Hello
                            Hi, My name is Rajkumar Jyante.`

        -> converting string to number (it works only + and -)
            typeof +'100'
            typeof -'100'
            typeof +'-100'
            typeof +'Raj'  -> (NaN) Not a Number is invalid number
            parseInt('100Raj')  -> 100
            parseInt("Raj100Jyante")  -> NaN

        -> converting number to string
            100 + ""
            100 + 'Raj'
            'Raj' + 100 


    3.Boolean :-
        -> Only store true or false value.
        -> typeof is boolean.
        -> value of false is 0, true is 1
        
        Example: let isLogged = true;

    4.Undefined :-
        -> Variable declared but not assigned.
        -> typeof undefined is undifined.

        Example :
                    let x;
                    console.log(x);

        converting undefined to number
            +undefined  -> (NaN) 

    5.Null :-
        -> Intentionally empty value.
        -> typeof null is object.

        Example: let data = null;

        converting null to number
            +null  -> 0

    6.Symbol (ES6) :-
        -> Unique and immutable value (used mostly as object keys)

    7.BigInt (ES2020)
        -> For large integers beyond Number limit

