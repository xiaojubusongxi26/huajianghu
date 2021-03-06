
// swiper
var mySwiper = new Swiper ('.swiper', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay:true,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'my-bullet-active',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})      

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

// 动态创建动漫区
const jianghuShow = document.querySelector(".jianghuShow>div")

for (let i = 0; i < titles.length; i++) {
  const newShow = document.createElement("div")
  newShow.innerHTML = "<a href='javascript:;' class='jianghuTitle'><span></span></a>"
  jianghuShow.append(newShow)
  newShow.className = "col-md col-4 show"
  newShow.style.background = "url('../imgs/content/" + titles[i] + ".jpg') no-repeat"
  newShow.style.backgroundPosition = "center"
  newShow.style.backgroundSize = "cover"
}