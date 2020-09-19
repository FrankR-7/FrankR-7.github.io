function copyInput() {
    var copyText = document.getElementById("scr");
    var cops = document.getElementById("copy")
    var but = document.querySelector("button")
    cops.innerText = copyText.innerText
    cops.select();
    document.execCommand('copy')
    but.innerText = "Copied!"
    setTimeout(() => {but.innerText = "Copy"}, 1500)
  }

var ini = document.getElementById("scr")
var mini = document.getElementById("scr2")

var cur = 'num1'
var comp = ""
var op = null
var num1 = ""
var num2 = ""
var ans = ""

var nums = document.getElementsByClassName("num")

var plus = document.getElementById("plus")
var minus= document.getElementById("minus")
var multi = document.getElementById("multi")
var div = document.getElementById("div")
var equal = document.getElementById("equal")
var ce = document.getElementById("ce")

for (let i=0; i < nums.length; ++i) {
    nums[i].addEventListener("click", function() {
        if (cur == 'num1') {
            num1 += nums[i].innerText
            comp += nums[i].innerText
            ini.innerHTML = num1
            scr2.innerHTML = comp
        } else if (cur == 'num2') {
            num2 += nums[i].innerText
            comp += nums[i].innerText
            ini.innerHTML = num2
            scr2.innerHTML = comp
        } else {
            cur = 'num1'
            num1 = nums[i].innerText
            ini.innerHTML = num1
        }
    })
}

function checkCompute() {
    if (cur == 'num2') {
        num1 = equals()
        comp = num1
    }
}

function equals() {
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
    return ans
}

plus.addEventListener("click", function() {
    checkCompute()
    op = 'sum'
    cur = 'num2'
    comp += " + "
    ini.innerHTML = '+'
    scr2.innerHTML = comp
})
minus.addEventListener("click", function() {
    checkCompute()
    op = 'diff'
    cur = 'num2'
    comp += " - "
    ini.innerHTML = '-'
    scr2.innerHTML = comp
})
multi.addEventListener("click", function() {
    checkCompute()
    op = 'mult'
    cur = 'num2'
    comp += " x "
    ini.innerHTML = 'x'
    scr2.innerHTML = comp
})
div.addEventListener("click", function() {
    checkCompute()
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