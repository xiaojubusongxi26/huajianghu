


const isShowList = false
// 导航栏，画江湖展开
$(".list").click(function () {
  this.isShowList = !this.isShowList
  $(".listBar-up+span").toggleClass("hidespan")
  $(".listBar-up").toggleClass("listBar-up-click")
  $(".listBar-down").toggleClass("listBar-down-click")
  
  if (this.isShowList) {
    $(".listMain").fadeIn()
    $(".nav2").css("background", "rgba(31, 30, 30, 1)")
  } else {
    $(".listMain").fadeOut()
    $(".nav2").css("background", "rgba(31, 30, 30, .3)")
  }
  
})

// 动态创建导航栏展开
const jianghuList = document.querySelector(".huajianghuList>ul")
const jianghu = document.querySelector(".huajianghu>ul")
const titles = [
  "侠岚",
  "不良人",
  "灵主",
  "换世门生",
  "杯莫停",
  "轨夜行"
]



console.log(titles.length);
for (let i = 0; i < titles.length; i++) {
  const newLi = document.createElement("li")
  const newLi2 = document.createElement("li")
  newLi.innerHTML= "<a href='javascript:;'></a>"
  newLi2.innerHTML= "<a href='javascript:;'></a>"
  jianghuList.append(newLi)
  jianghu.append(newLi2)
  newLi.style.background = "url('../imgs/logo/" + titles[i] + ".png') no-repeat"
  newLi.style.backgroundPosition = "center"
  newLi.style.backgroundSize = "contain"
  newLi2.style.background = "url('../imgs/logo/" + titles[i] + ".png') no-repeat"
  newLi2.style.backgroundPosition = "center"
  newLi2.style.backgroundSize = "contain"
}


let flaghuajianghu = false
$("#isHuajianghu").click( () => {
  $("#isHuajianghu").next().toggle()
  flaghuajianghu = !flaghuajianghu
  console.log(flaghuajianghu);
  if (flaghuajianghu) {
    $(".huajianghuList").height(370)
  } else {
    $(".huajianghuList").height(70)
  }
  
})