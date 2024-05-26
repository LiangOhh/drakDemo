# 样式文件切换

1. 在index.html中head标签中引入样式文件

   ```js
   <!DOCTYPE html>
   <html lang="en">
   
   <head>
    ...
       <link rel="stylesheet" href="./styles/light.css" id="theme-mode-link">
   </head>
   
   <body class="drak || light">
    ...
    <button class="button-toggle">点击切换主题模式</button>
   </body>
   
   </html>
   ```

   2.编写样式文件

   ```css
   //light.css
   body {
       color: #333;
       background: #fff;
   }
   
   a {
       color: #666;
   }
   ```

   ```
   //dark.css
   body {
       color: #eee;
       background: #111;
   }
   
   body a {
       color: #e44c4c;
   }
   ```

   3.编写js文件

   ```js
   const btn = document.querySelector('.button-toggle')
   const theme_model = document.querySelector('#theme-mode-link')
   btn.addEventListener('click', function () {
       let temp = theme_model.getAttribute("href")
       // 样式文件切换
       theme_model.href = temp === "./styles/light.css" ? "./styles/dark.css" : "./styles/light.css";
       console.log(temp)
   })
   ```

   

		# 自定义属性切换

1. css文件

   ```css
   /* 基础（白色）模式变量 light */
   body {
     --text-color: #333;
     --bkg-color: #fff;
     --anchor-color: #666;
   }
    
   /* 黑色模式变量 dark */
   body.dark {
     --text-color: #eee;
     --bkg-color: #111;
     --anchor-color: #ccc;
   }
    
   /* 样式代码 */
   body {
     color: var(--text-color);
     background: var(--bkg-color);
   }
   a {
     color: var(--anchor-color);
   }
   ```

   2.js文件

   ```js
   const btn = document.querySelector(".button-toggle");
   
   btn.addEventListener("click", function () {
       document.body.classList.toggle("dark");
   });
   ```

   