function myModule(){
    let omrf = {}
    omrf.autor = "Oliver Rios"
    omrf.version = "0.1.0001"

    /////////////////  moduleName  /////////////////////////
    //isNumber(reuse), isPositive, isNegative,
    //isEven, isOdd, isDivisibleBy, trichotomy
    omrf.number = {
        isPositive: (x) =>{ 
            if(x > 0) return true
            else return false
        },
        isNegative: (x) => {
            if(x<0) return true
            else return false
        } 
    }
    omrf.fraction = {}
    omrf.math = {
        abs: (x) => Math.abs(x),
        pi : 3.14159,
        radian: (x) => x * (this.pi/180),
        grado: (x) => x * 57.2958,
        sum: (x,y) => x+y,
        square: (x) => Math.sqrt(x),
        pow: (num,exp) => Math.pow(num,exp),
        double: (x) => x*2
    }
    

    /////////////////  moduleName  /////////////////////////
    //4-ops : sum, substraction, multiplication, division,
    //may shorten names, eg sub, div
    wxyz.fraction = {};//4-ops, gcd, isFraction
    wxyz.arithmetic = {};//4-ops

    /////////////////  moduleName  /////////////////////////
    //isFunction, isObject, isNumber(reuse), isArray(reuse)
    //random, randomAB, randomN, shuffle
    wxyz.util = {};

    /////////////////  moduleName  /////////////////////////
    wxyz.date = {};//month, week, season, isLeap

    /////////////////  moduleName  /////////////////////////
    wxyz.discrete = {};//factorial, permutation

    /////////////////  moduleName  /////////////////////////
    wxyz.math={};//PI, RADIAN, GRADE, abs, sum(reuse), square, pow, double

    /////////////////  moduleName  /////////////////////////
    //place text into a 'textarea' and get it from there
    //not from a file, may use example
    wxyz.text = {};//words, sentences, paragraphs, isEmpty

    /////////////////  moduleName  /////////////////////////
    wxyz.series = {};//rangeAB, rangeN, fibonacci

    /////////////////  moduleName  /////////////////////////
    //4-ops, dot, distance, isVector, isOrthogonal,
    //setZeros, setRand, setRange, setWith
    wxyz.vector = {};

    //3-ops, isIdentity, isMatrix, getRow, getCol,
    //isSymmetric, isSquare, transpose
    wxyz.matrix = {};

    /////////////////  moduleName  /////////////////////////
    wxyz.cashier = {};//your design methods
    wxyz.roman = {};//your design methods
    wxyz.words = {};//your design methods

    /////////////////  moduleName  /////////////////////////
    wxyz.shape = {};//shape : inheritace is optional
    wxyz.point = {};//clone, isPoint, trichotomy

    /////////////////  moduleName  /////////////////////////
    wxyz.line = {};//clone, isLine, isParallel, isPerperdicular

    /////////////////  moduleName  /////////////////////////
    wxyz.rectangle = {};//clone, area, perimeter, isRectangle

    /////////////////  moduleName  /////////////////////////
    wxyz.triangle = {};//clone, area, perimeter, isTriangle

    /////////////////  moduleName  /////////////////////////
    wxyz.square = {};//clone, area, perimeter, isSquare

    /////////////////  moduleName  /////////////////////////
    wxyz.trapezoid = {};//clone, area, perimeter, isTrapezoid

    /////////////////  moduleName  /////////////////////////
    //clone, area, perimeter, isCicle,
    //collides, isInscribed, circunscribes
    wxyz.circle = {};
    return omrf
}

let omrf = myModule()