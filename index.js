// const btn = document.querySelector('.button-toggle')
// const theme_model = document.querySelector('#theme-mode-link')
// btn.addEventListener('click', function () {

//     /* if (temp === './styles/light.css') {
//         console.log(true)
//         theme_model.href = './styles/dark.css'
//     } else {
//         theme_model.href = './styles/light.css'
//     } */
//     // Element.getAttribute()获取属性值
//     let temp = theme_model.getAttribute("href")
//     // 样式文件切换
//     theme_model.href = temp === "./styles/light.css" ? "./styles/dark.css" : "./styles/light.css";
//     console.log(temp)
// })


// const btn = document.querySelector(".button-toggle");

// btn.addEventListener("click", function () {
//     /*  document.body.classList.toggle() 
//     方法属于 Element.classList 接口，
//     它用于在元素的 class 列表中添加或删除一个类。如果该类存在，则删除它；
//     如果该类不存在，则添加它。 */
//     document.body.classList.toggle("dark");
// });


// 添加伪类
const btn = document.querySelector(".button-toggle");
btn.addEventListener("click", function () {
    if (document.body.getAttribute("theme") === 'dark') {
        document.body.setAttribute('theme', '')
    } else {
        document.body.setAttribute('theme', 'dark')
    }
});