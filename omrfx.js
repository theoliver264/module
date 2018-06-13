function myModule(){
    let omrf = {}
    omrf.autor = "Oliver Rios"
    omrf.version = "0.1.0001"
    omrf.number = {
        isNumber: (x) => typeof x === "number",
        isPositive: (x) =>{
            if(x > 0) return true
            else return false
        },
        isNegative: (x) => {
            if(x<0) return true
            else return false
        },
        isEven: (x) => (x % 2 == 0) ? true : false,
        isOdd: (x) => (x % 2 != 0) ? true : false,
        isDivisibleBy: (num, div) => (num % div == 0) ? true : false,
        trichotomy: (x,y) => {
            if(x == y) console.log( x+" = "+y)
            else if (x < y) console.log(x+ " < ")
        }
    }
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
    omrf.fraction = function(n,d){
        if(Number.isInteger(n) && Number.isInteger(d))  {
            this.n = n
            this.d = d
        } else throw "Numeros no enteros."

        this.multiplicar = function(frac){
            let resN = this.n * frac.n
            let resD = this.d * frac.d
            return new {n: resN,d: resD}
        }
    
        this.dividir = function(frac){
            let resN = this.n * frac.d
            let resD = this.d * frac.n
            return new {n: resN,d: resD}
        }
    
        this.sumar = function(frac){
            let resD 
            let resN
            if(frac.d == this.d) {
                resN = frac.n + this.n
                resD = this.d
                return {n: resN,d: resD}
            }
            else {
                resN = (this.n * frac.d) + (this.d + frac.n)
                resD = this.d * frac.d
                return {n: resN,d: resD}
            }
        }
    
        this.restar = function(frac){
            let resD
            let resN
            if(frac.d == this.d){
                resN = frac.n - this.n
                resD = this.d
                return {n: resN,d: resD}
            }
            else {
                resN = (this.n * frac.d) - (this.d + frac.n)
                resD = this.d * frac.d
                return {n: resN,d: resD}
            }
        }
    }
    omrf.arithmetic = {
        suma: (x,y) => x+y,
        resta: (x,y) => x-y,
        div: (x,y) => x/y,
        mult: (x,y) => x*y
    }
    omrf.util = {
        isFunction: (x) => typeof x === "function",
        isObject: (x) => typeof x === "object",
        isNumber: (x) => typeof x === "number",
        isArray: (x) => x.constructor === Array,
        random: () => Math.random(),
        randomAB: (x,y) =>Math.floor((Math.random() * y)+x),
        RandomN: "",  
    }
    omrf.discrete = {
        factorial: function(n) {
            var total = 1; 
            for (i=1; i<=n; i++) {
                total = total * i; 
            }
            return total; 
        }
    }

    //TODO
    omrf.date = {};//month, week, season, isLeap 

    //TODO
    //place text into a 'textarea' and get it from there
    //not from a file, may use example
    omrf.text = {};//words, sentences, paragraphs, isEmpty

    
    omrf.series = {
        rangeAB: (a,b) => {
            for(let i = a; i<=b;i++) console.log(i)
        },

        fibonacci: (x) => {
            let fib = []; // Initialize array!
            fib[0] = 0;
            fib[1] = 1;
            for(let i=2; i<=x; i++)
            {
                // Next fibonacci number = previous + one before previous
                // Translated to JavaScript:
                fib[i] = fib[i-2] + fib[i-1];
                console.log(fib[i]);
            }
        }
    }
    omrf.Vector = class Vector {
        constructor(num){
            if(typeof num != 'number') throw 'Not a number'
            this.vector = new Array(num)
            this.length = num
        }
    
        setZeros(){
            for(let i = 0; i < this.vector.length; i++){
                this.vector[i] = 0;
            }
        }
        setOnes(){
            for(let i = 0; i < this.vector.length; i++){
                this.vector[i] = 1;
            }
        }
        setRandom(){
            for(let i = 0; i < this.vector.length; i++){
                this.vector[i] = Math.floor((Math.random() * 100) + 1);
            }
        }
        setWithN(x){
            for(let i = 0; i < this.vector.length; i++){
                this.vector[i] = x;
            }
        }
        setRange(rango){
            for(let i = 0; i < this.vector.length; i++){
                this.vector[i] = (Math.random() * rango) + 1;
            }
        }
        
        //Operaciones punto a punto
        sumV(vec){
            let resVec
            if (vec.length > this.length) resVec = new Array(this.length)
            else resVec = new Array(vec.length)
    
            if(resVec.length == 1) throw 'Usar sumE'
    
            for(let i = 0; i < resVec.length; i++){
                resVec[i] = vec.vector[i] + this.vector[i]
            }
    
            return resVec
        }
        multV(vec){
            let resVec
            if (vec.length > this.length) resVec = new Array(this.length)
            else resVec = new Array(vec.length)
    
            if(resVec.length == 1) throw 'Usar multE'
    
            for(let i = 0; i < resVec.length; i++){
                resVec[i] = vec.vector[i] * this.vector[i]
            }
    
            return resVec
        }
        resV(vec){
            let resVec
            if (vec.length > this.length) resVec = new Array(this.length)
            else resVec = new Array(vec.length)
    
            if(resVec.length == 1) throw 'Usar resE'
    
            for(let i = 0; i < resVec.length; i++){
                resVec[i] = this.vector[i] - vec.vector[i]
            }
    
            return resVec
        }
        divV(vec){
            let resVec
            if (vec.length > this.length) resVec = new Array(this.length)
            else resVec = new Array(vec.length)
    
            if(resVec.length == 1) throw 'Usar divE'
    
            for(let i = 0; i < resVec.length; i++){
                resVec[i] = this.vector[i] / vec.vector[i]
            }
    
            return resVec
        }

        isVector(vec){
            return (vec instanceof omrf.Vector)
        }
    }

    omrf.Matriz =  class Matriz {
        constructor(filas, columnas) {
            this.filas = filas;
            this.columnas = columnas;
            this.matriz = new Array(filas).fill(new Array(columnas).fill(null));
        }
        setNewValues(m) {
            const len = m[0].length;
            this.filas = m.length;
            this.columnas = len;
            this.matriz = m;
            return this;
        }
        llenarCeros() {
            this.llenarCon(0);
        }
        llenarUno() {
            this.llenarCon(1);
        }
        llenarRnd(max) {
            this.matriz = this.matriz.map(arr =>
                arr.map(val => Math.random() * max)
            );
        }
        llenarRango(max) {
            this.matriz = this.matriz.map(arr =>
                arr.map(() => Math.floor(Math.random() * max))
            );
        }
        llenarCon(n) {
            this.matriz = this.matriz.map(arr => arr.fill(n));
        }
        fila(r) {
            return this.matriz[r];
        }
        columna(c) {
            return this.matriz.map(arr => arr[c]);
        }
        suma() {
            return this.matriz.reduce((prev, arr) => {
                return prev + arr.reduce((prev, val) => prev + val, 0);
            }, 0);
        }
        sumaM(m) {
            let matrix = this.matriz.map((arr, y) =>
                arr.map((e, x) => e + m.matriz[y][x])
            );
            return new omrf.Matriz().setNewValues(matrix);
        }
        sumaE(e) {
            if (isNaN(e)) throw new Error("Valor no escalar");
            let matrix = this.matriz.map(row => row.map(val => val + e));
            return new omrf.Matriz().setNewValues(matrix);
        }
        restaM(m) {
            let matrix = this.matriz.map((arr, y) =>
                arr.map((e, x) => e - m.matriz[y][x])
            );
            return new omrf.Matriz().setNewValues(matrix);
        }
        restaE(e) {
            let matrix = this.matriz.map(row => row.map(val => val - e));
            return new omrf.Matriz().setNewValues(matrix);
        }
        multM(m) {
            let matrix = this.matriz.map((row, y) => {
                let newRow = [];
                for (let x = 0; x < m.filas; x++) {
                    let col = m.getCol(x);
                    let r = row.reduce((acc, curr, i) => {
                        acc += curr * col[i];
                        return acc;
                    }, 0);
                    newRow.push(r);
                }
                return newRow;
            });
    
            return new omrf.Matriz().setNewValues(matrix);
        }
        multE(e) {
            let matrix = this.matriz.map(row => row.map(val => val * e));
            return new omrf.Matriz().setNewValues(matrix);
        }
        promedio() {
            let len = this.matriz.reduce((prev, arr) => prev + arr.length, 0);
            return this.suma() / len;
        }
        max() {
            return this.matriz.reduce((prev, arr) => {
                let max = Math.max(...arr);
                return max > prev ? max : prev;
            }, 0);
        }
        min() {
            return this.matriz.reduce((prev, arr) => {
                let max = Math.min(...arr);
                return max < prev ? max : prev;
            }, 0);
        }
        transpose() {
            let base = Array.from({ length: this.columnas }).map(() =>
                Array.from(1)
            );
    
            let matrix = this.matriz.reduce((m, row) => {
                row.forEach((val, i) => m[i].push(val));
                return m;
            }, base);
    
            return new omrf.Matriz().setNewValues(matrix);
        }
        static matrizIdentidad(n = 2) {
            let x = 0;
            let matrix = Array.from({ length: n }).fill(
                Array.from({ length: n }).fill(null)
            );
            matrix = matrix.map((row, i) => {
                row = row.map((val, j) => {
                    return j === x ? 1 : 0;
                });
                x++;
                return row;
            });
            return new omrf.Matriz().setNewValues(matrix);
        }
        isIdentidad() {
            let x = 0;
            return this.matriz.every(row => {
                let r = row[x] === 1;
                x++;
                return r;
            });
        }
        isCuadrada() {
            return this.filas === this.columnas;
        }
        isSimetrica() {
            if (!this.isCuadrada()) {
                return false;
            }
    
            let trans = this.transpose();
            return this.matriz.every((row, y) =>
                row.every((val, x) => val === trans.matriz[y][x])
            );
        }
        isValidForOperation(operation, matrix) {
            let result = false;
            switch (operation) {
                case "suma":
                case "resta":
                    result =
                        matrix.rows === this.filas && matrix.cols === this.columnas;
                    break;
                case "mult":
                    result = this.columnas === matrix.rows;
                    break;
                default:
                    result = false;
                    break;
            }
    
            return result;
        }
    }
    omrf.Cajero = class Cajero{
        constructor() {
            this.transacciones = new Map();
        }
    
        nuevaTransaccion(cantidad) {
            let token = Math.random()
                .toString(36)
                .substr(2);
    
            this.transacciones.set(token, {
                cantidad,
                nombre,
                pagado: 0,
                porPagar: cantidad
            });
    
            return token;
        }
    
        pagar(token, cantidad) {
            let info = this.transacciones.get(token);
    
            this.transacciones.set(token, {
                cantidad: info.cantidad,
                nombre: info.nombre,
                pagado: info.pagado + cantidad,
                porPagar: info.porPagar - cantidad
            });
    
            let change = info.porPagar - pagado;
    
            console.log(`
                Info del pago
            `);
    
            if (change > 0) {
                console.log(`
                    Cambio
                `);
    
                let changeArr = this.AMoneda(change);
                return changeArr;
            }
    
            return;
        }
    
        AMoneda(num) {
            const moneda = new Map([
                ["Billete 1000 pesos", 1000],
                ["Billete 500 pesos", 500],
                ["Billete 200 pesos", 200],
                ["Billete 100 pesos", 100],
                ["Billete 50 pesos", 50],
                ["Billete 20 pesos", 20],
                ["Moneda 10 pesos", 10],
                ["Moneda 5 pesos", 5],
                ["Moneda 2 pesos", 2],
                ["Moneda 1 peso", 1],
                ["Moneda 50 centavos", 0.5],
                ["Moneda 20 centavos", 0.2]
            ]);
    
            let result = [];
            let numCopy = num;
    
            moneda.forEach((val, key) => {
                let amount = Math.floor(numCopy / val);
                numCopy -= amount * val;
                result.push(amount > 0 ? `${amount} ${key} ` : "");
            });
    
            return result;
        }
    }
    omrf.roman = function(num) {
        let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
          while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
    }

    omrf.Words = class Words{

        constructor(){
            this.UNIDADES = {
                1: "uno",
                2: "dos",
                3: "tres",
                4: "cuatro",
                5: "cinco",
                6: "seis",
                7: "siete",
                8: "ocho",
                9: "nueve",
                10: "diez",
                11: "once",
                12: "doce",
                13: "trece",
                14: "catorce",
                15: "quince",
                16: "dieciseis",
                17: "diecisiete",
                18: "dieciocho",
                19: "diecinueve",
                20: "veinte",
                21: "veintino",
                22: "veintidos",
                23: "veintitres",
                24: "veinticuatro",
                25: "veinticinco",
                26: "veintiseis",
                27: "veintisiete",
                28: "veintiocho",
                29: "veintinueve"
            }
            
            this.DECENAS = {
                3: "treinta",
                4: "cuarenta",
                5: "cincuenta",
                6: "sesenta",
                7: "setenta",
                8: "ochenta",
                9: "noventa"
            }
            
            this.CENTENAS = {
                1: "ciento",
                2: "doscientos",
                3: "trescientos",
                4: "cuatrocientos",
                5: "quinientos",
                6: "seiscientos",
                7: "setecientos",
                8: "ochocientos",
                9: "novecientos"
            }
        }
        
        
        NumeroALetras(numero) {
            if (numero === 0) {
                return "cero";
            } else if (numero < 30 && numero > 0) {
                return this.UNIDADES[numero];
            } else if (numero < 100) {
                return decenas(numero);
            } else if (numero < 1000) {
                return cienes(numero);
            } else if (numero < 1000000) {
                return miles(numero);
            } else {
                return millones(numero);
            }
        }
        
        millones(num){
            let millones = Math.floor(num / 1000000),
                resto = num - millones * 1000000,
                result;
        
            if (millones >= 1000) {
                result = miles(millones) + " millones";
            } else if (millones >= 100) {
                result = cienes(millones) + " millones";
            } else if (millones >= 29) {
                result = decenas(millones) + " millones";
            } else if (millones === 1) {
                result = "un millón";
            } else {
                result = this.UNIDADES[millones] + " millones";
            }
        
            if (resto >= 1000) {
                result += miles(resto);
            } else if (resto >= 100) {
                result += cienes(resto);
            } else if (resto > 29) {
                result += decenas(resto);
            } else if (resto > 0) {
                result += this.UNIDADES[resto];
            }
        
            return result;
        }
        
        miles(num) {
            let millares = Math.floor(num / 1000),
                resto = num - millares * 1000,
                result;
        
            if (millares >= 100) {
                result = cienes(millares) + " mil";
            } else if (millares > 29) {
                result = decenas(millares) + " mil";
            } else if (millares === 1) {
                result = "mil";
            } else {
                result = this.UNIDADES[millares] + " mil";
            }
        
            if (resto >= 100) {
                result += cienes(resto);
            } else if (resto > 29) {
                result += decenas(resto);
            } else if (resto > 0) {
                result += this.UNIDADES[resto];
            }
        
            return result;
        }
        
        cienes(num) {
            let centenas = Math.floor(num / 100),
                resto = num - centenas * 100;
        
            if (resto === 0) {
                return centenas === 1 ? "cien" : this.CENTENAS[centenas];
            }
        
            return this.CENTENAS[centenas] + " " + decenas(resto);
        }
        
        decenas(num){
            let decenas = Math.floor(num / 10),
                resto = num - decenas * 10,
                decimales = resto % 1,
                result;
        
            resto -= decimales;
        
            if (num <= 29) {
                result = this.UNIDADES[num];
            } else if (resto > 0) {
                result = this.DECENAS[decenas] + " y " + this.UNIDADES[resto];
            } else {
                result = this.DECENAS[decenas];
            }
        
            return result;
        }
    }
    omrf.Point = class Point{
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        clone() {
            return new omrf.Point(this.x, this.y);
        }
        static distance(p1, p2) {
            let x = p1._x - p2._x;
            let y = p1._y - p2._y;
    
            return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        }
        static isPoint(punto) {
            return punto instanceof omrf.Point;
        }
    }

    /////////////////  moduleName  /////////////////////////
    //TODO
    omrf.line = {};//clone, isLine, isParallel, isPerperdicular


    omrf.rectangle = class Rectangle{
        constructor(x,y){
            this.x = x
            this.y = y
            this.sides = 4
        }

        clone(rec){
            if(rec instanceof omrf.Rectangle){
                return new omrf.Rectangle(rec.x,rec.y)
            }
            else throw "No es un rectangulo"
        }

        area(rec) {
            if(rec instanceof omrf.Rectangle){
                return rec.x*rec.y
            }
            else throw "No es un rectangulo"
        }

        perimeter(rec){
            if(rec instanceof omrf.Rectangle){
                return (rec.x*2)+(rec.y*2)
            }
        }

        isRectangle(rec){
            return (rec instanceof omrf.Rectangle)
        }
    };
    omrf.triangle = class Triangle {
        constructor(x,h){
            this.x = x
            this.h = h
            this.sides = 3
        }

        clone(tri){
            if(tri instanceof omrf.Triangle){
                return new omrf.Triangle(rec.x,rec.h)
            }
            else throw "No es un triangulo"
        }

        area(tri) {
            if(tri instanceof omrf.Triangle){
                return (tri.x*tri.h)/2
            }
            else throw "No es un triangulo"
        }

        perimeter(tri){
            if(tri instanceof omrf.Triangle){
                return tri.x*this.sides
            }
        }

        isTriangle(tri){
            return (tri instanceof omrf.Triangle)
        }
    };
    omrf.square = class Square {
        constructor(x){
            this.x = x
            this.sides = 4
        }

        clone(c){
            if(c instanceof omrf.Square){
                return new omrf.Square(c.x)
            }
            else throw "No es un cuadrado"
        }

        area(c) {
            if(c instanceof omrf.Square){
                return c.x*c.x
            }
            else throw "No es un cuadrado"
        }

        perimeter(c){
            if(c instanceof omrf.Square){
                return c.x*4
            }
            else throw "No es un cuadrado"
        }

        isSquare(c){
            return (c instanceof omrf.Square)
        }
    }

    //TODO
    /////////////////  moduleName  /////////////////////////
    omrf.trapezoid = {};//clone, area, perimeter, isTrapezoid

    omrf.Circulo =  class Circulo{
        constructor(centro, radio) {
            this.centro = centro;
            this.radio = radio;
        }
    
        clone() {
            return new omrf.Circulo(this.centro, this.radio);
        }
    
        area() {
            return Math.PI * this.radio ** 2;
        }
    
        perimeter() {
            return 2 * Math.PI * this.radio;
        }
    
        collides(circle) {
            const distanciaCentro = omrf.Point.distance(this.centro, circle._center);
            const radios = this.radio + circle._radius;
    
            return distanciaCentro <= radios;
        }
    
        isInscribed(p1, p2, p3) {
            const c = (p1 + p2 + p3) / 2;
            const radio = Math.sqrt(c * (c - p1) * (c - p2) * (c - p3)) / c;
    
            return radio === this.radio;
        }
    
        isCircunscribed(p1, p2, p3) {
            const c = (p1 + p2 + p3) / 2;
            const radio =
                (p1 * p2 * p3) /
                (4 * Math.sqrt(c * (c - p1) * (c - p2) * (c - p3)));
    
            return radio === this.radio;
        }
    
        static isCircle(circulo) {
            return circulo instanceof omrf.Circulo;
        }
    };
    return omrf
}

let omrf = myModule()