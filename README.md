### 学习JS基础，加油！

### 原型图

![js原型](./assets/js原型.png)

### HTTP缓存图

![HTTP缓存图](./assets/http缓存.png)

### CSS中

  在父元素中设置 font-size: 0px; 可以使父元素下的字体基线在正中央，使用vertical-align: middle; 可以使字体居中

```html
<body>
  <div>
    <span class="big">江西财经大学</span>
    <span class="small">x江西财经大学</span>
  </div>
</body>

<style>
  div{
    font-size: 0px;
    background-color: skyblue;
  }

  .big{
    font-size: 40px;
    background-color: skyblue;
    vertical-align: middle;
  }

  .small{
    font-size: 20px;
    background-color: orange;
    vertical-align: middle;
  }
</style>
```