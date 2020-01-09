// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

var rollH = 14400

function getScale () {
  var scaleBoxList = document.getElementsByClassName('scale-box')
  for (var index = 0; index < scaleBoxList.length; index++) {
    var scaleBox = scaleBoxList[index];
    // console.log(scaleBox)
    // 如果比例大于1则进入电脑模式
    if ((window.innerWidth / window.innerHeight) < 1) {
      var scale = window.innerWidth / deviseW
      scaleBox.style.width = deviseW + 'px'
      scaleBox.style.height = deviseH + 'px'
      scaleBox.style.transform = `scale(${scale}, ${scale})`
      // console.log(window.innerHeight, deviseH * scale)
      scaleBox.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`
    } else {
      document.body.classList.add('pc')
      var scale = (window.innerHeight / deviseH).toFixed(2)
      scaleBox.style.width = deviseW + 'px'
      scaleBox.style.height = deviseH + 'px'
      scaleBox.style.transform = `scale(${scale}, ${scale}) translate(${(window.innerWidth - deviseW * scale) / 2 / scale + 'px' }, 0)`
      scaleBox.style.transformOrigin = '0 0 0'
    }
  }
  // 只缩放宽度
  var scaleWidthBoxList = document.getElementsByClassName('scale-width-box')
  for (var index = 0; index < scaleWidthBoxList.length; index++) {
    var scaleBox = scaleWidthBoxList[index];
    if ((window.innerWidth / window.innerHeight) < 1) {
      var scale = window.innerWidth / deviseW
      scaleBox.style.width = deviseW + 'px'
      scaleBox.style.height = rollH * scale + 'px'
      scaleBox.style.transform = `scale(${scale}, ${scale})`
      // console.log(window.innerHeight, deviseH * scale)
      scaleBox.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`
    }
  }
}

getScale()

let timer = null
window.onresize = () => {
  // console.log(timer)
  window.clearTimeout(timer)
  timer = setTimeout(() => {
    getScale()
  }, 300)
}

function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})