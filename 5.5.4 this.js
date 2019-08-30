global.color = 'red'
var obj = {color: 'blue'}

function showColor() {
    console.log(this.color)
}

showColor()

obj.showColor = showColor
obj.showColor()
