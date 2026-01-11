// Primitive data types in JavaScript

// 1.Integer
    let a = 100
    let b = 100.12
    console.log(a)
    console.log(typeof(a))
    console.log(b)
    console.log(typeof(b))

// 2.String
    let c = 'Rajkumar' 
    let d = "Jyante"
    let e = `Hello.
            Hi, My name is Rajkumar Jyante.`
    console.log(c,d,e)
    console.log(typeof(c))
    console.log(+typeof(c))
    console.log(-typeof(d))

    let f = "100Rajkumar"
    console.log(-typeof(f))
    console.log(-parseInt(f))

// 3.Boolean
    let g = true
    let h = false

    console.log(typeof(g))
    console.log(+false) // it print 0 because default value of false is 0
    console.log(-true)  // it print 0 because default value of true is 1

// 4.Undefined
    let i = undefined

    console.log(typeof(i))
    console.log(-i) // it print NaN because default value of Undefined is NaN

// 5. null
    let j = null

    console.log(typeof(j))
    console.log(+j) // it print 0 because default value of null is 0


