let idNum = 'num1'

const suma = (num1, num2) => num1 + num2

const resta = (num1, num2) => num1 - num2

const multiplicacion = (num1, num2) => num1 * num2

const division = (num1, num2) => num1 / num2

const resultado = (operacion, num1, num2) => {
    switch (operacion) {
        case '+':
            return suma(num1, num2)
        case '-':
            return resta(num1, num2)
        case '*':
            return multiplicacion(num1, num2)
        case '/':
            return division(num1, num2)
        default: alert('La calculadora no reconoce el operador : ' + operacion)
    }
}