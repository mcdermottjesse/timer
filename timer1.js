const alarm = function (duration) {
//let time
setTimeout(() => {
if(duration < 0) {

} else {
console.log('beep');
}
}, duration*1000)
}


alarm(-5)
alarm(10)
alarm(3)
alarm(5)
alarm(-4)
alarm(15)
alarm(9)


