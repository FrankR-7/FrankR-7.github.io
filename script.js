var ini = document.getElementById("scr")
var mini = document.getElementById("scr2")

var cur = 'num1'
var comp = ""
var op = null
var num1 = ""
var num2 = ""
var ans = ""

var n1 = document.getElementById("1")
var n2 = document.getElementById("2")
var n3 = document.getElementById("3")
var n4 = document.getElementById("4")
var n5 = document.getElementById("5")
var n6 = document.getElementById("6")
var n7 = document.getElementById("7")
var n8 = document.getElementById("8")
var n9 = document.getElementById("9")
var n0 = document.getElementById("0")

var plus = document.getElementById("plus")
var minus= document.getElementById("minus")
var multi = document.getElementById("multi")
var div = document.getElementById("div")
var equal = document.getElementById("equal")
var ce = document.getElementById("ce")

n1.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '1'
        comp += '1'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '1'
        comp += '1'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '1'
        ini.innerHTML = num1
    }
})
n2.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '2'
        comp += '2'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '2'
        comp += '2'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '2'
        ini.innerHTML = num1
    }
})
n3.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '3'
        comp += '3'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '3'
        comp += '3'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '3'
        ini.innerHTML = num1
    }
})
n4.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '4'
        comp += '4'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '4'
        comp += '4'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '4'
        ini.innerHTML = num1
    }
})
n5.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '5'
        comp += '5'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '5'
        comp += '5'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '5'
        ini.innerHTML = num1
    }
})
n6.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '6'
        comp += '6'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '6'
        comp += '6'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '6'
        ini.innerHTML = num1
    }
})
n7.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '7'
        comp += '7'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '7'
        comp += '7'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '7'
        ini.innerHTML = num1
    }
})
n8.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '8'
        comp += '8'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '8'
        comp += '8'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '8'
        ini.innerHTML = num1
    }
})
n9.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '9'
        comp += '9'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '9'
        comp += '9'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '9'
        ini.innerHTML = num1
    }
})
n0.addEventListener("click", function() {
    if (cur == 'num1') {
        num1 += '0'
        comp += '0'
        ini.innerHTML = num1
        scr2.innerHTML = comp
    } else if (cur == 'num2') {
        num2 += '0'
        comp += '0'
        ini.innerHTML = num2
        scr2.innerHTML = comp
    } else {
        cur = 'num1'
        num1 = '0'
        ini.innerHTML = num1
    }
})

plus.addEventListener("click", function() {
    op = 'sum'
    cur = 'num2'
    comp += " + "
    ini.innerHTML = '+'
    scr2.innerHTML = comp
})
minus.addEventListener("click", function() {
    op = 'diff'
    cur = 'num2'
    comp += " - "
    ini.innerHTML = '-'
    scr2.innerHTML = comp
})
multi.addEventListener("click", function() {
    op = 'mult'
    cur = 'num2'
    comp += " x "
    ini.innerHTML = 'x'
    scr2.innerHTML = comp
})
div.addEventListener("click", function() {
    op = 'div'
    cur = 'num2'
    comp += " / "
    ini.innerHTML = '/'
    scr2.innerHTML = comp
})

equal.addEventListener("click", function() {
    if (op == 'sum') {
        ans = (parseInt(num1) + parseInt(num2)) + ''
        ini.innerHTML = ans
    } else if (op == 'diff') {
        ans = (parseInt(num1) - parseInt(num2)) + ''
        ini.innerHTML = ans
    } else if (op == 'mult') {
        ans = (parseInt(num1) * parseInt(num2)) + ''
        ini.innerHTML = ans
    } else if (op == 'div') {
        ans = (parseInt(num1) / parseInt(num2)) + ''
        ini.innerHTML = ans
    } else {
        ini.innerHTML = "0"
    }
    num1 = ''
    num2 = ''
    op = null
    cur = 'num1'
    comp = ''
})

ce.addEventListener("click", function() {
    num1 = ''
    num2 = ''
    op = null
    cur = 'num1'
    comp = ''
    ini.innerHTML = '0'
    scr2.innerHTML = '0'
})