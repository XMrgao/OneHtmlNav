var config = {
    // 网页标题
	title:'ROCK的导航',
    // seo关键字
	keywords:'ROCK,导航,网址',
    // 网站描述
	description:'简单但实用的导航',
    // logo图片
    logo:'http://www.fmrgao.com:8097/favicon.ico',
    // 网页背景图片
    bodyBackgroundImage:'https://www.runoob.com/try/demo_source/paper.gif',
    // 设置网页背景图片怎么显示，取值和css属性background-repeat相同
    backgroundRepeat:'repeat',
    // 版权声明，本站基于小呆导航（webjike.com）修改，建议不要修改
    copyright:'Copyright © 2017-2018 <a href="https://github.com/xiaodai945/WEBJIKE">小呆导航（webjike.com）</a> All Rights Reserved   内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容。邮箱：1099607871@qq.com',
	//页面中默认搜索引擎索引，在searchEngines数组中查找
    defaultSearchEngineIndex:2,
    // 默认搜索引擎图标,icon加载途径优先级  配置文件自定义icon > 搜索引擎网站icon > 默认搜索icon
    defaultSearchEngineIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACcFBMVEUAAAAkiP8AAQElif8kiP4AXc0AXs4kiP8kiP8kiP8kiP8kiP8kiP8kiP8kiP8jh/8jh/8jhv8kh/8kiP8kiP8kiP8kiP8kiP8jh/8kh/8kh/8kiP8kiP8kiP8kiP8kh/8kiP8kiP8kh/8kiP8kh/8kiP8kiP8kiP8kh/8kiP8khv8kiP8kiP8ihv8kiP8jh/8kiP8jhv8kiP8ihv8kh/8kiP8jh/8kiP8jh/8kiP8miv8jh/8La90AWcgjh/8AXs4AXs4ihv8ihv8AXs4AXs4AXs4AXs4kiP8skP81mf8um/8olf8li/8jh/84m/9jxv+C5P+Q8P9h8f9C6v862P8ws/8mj/8lif9Psv+M7P+v/f/O/v/h/v/W/v++/f+Q/f9X9/861/8pmf9Qsv+W9f/G/v/2///////6///y///7///Y/v90+/893v8olv+d/P/L/f/x/v/K/f+u/P94+v90+v+3/P/8///n/v9t+/82y/8liv9kxv+d/f+b+/+e+/+o/P+Y+/9f+f9C+P9J+P+f+//F/f9K8P8rn/+D5P+c/P+a+/9g+f9F+P9Q+P/R/f9u+/8yvP82mf9G+P9D+P+g+/+M/f82zv85nP+S8v+V+/+U/f830f8kif8ylv+M7f+x/P+C/P80yP8kh/8oi/952v9E+P9n+f/p/v/o/v9e+P8vsf9RtP+a+v+I+//4//+i/f9A5f8olP8rj/942f9N+P+A+/9T9v8wtP82mv+A4f9G+f9D9f81wv8zlv9rzf+T8/+c/f9h+/9F+v9G9/8xtP8egfcmiv89oP9bvf9t0P9M0v83yP8wsf8AXs4AAACi/uk4AAAAR3RSTlMAAAAAAAAABhMXDgECMHqxzNLEnlsWGYzo/MtXBCi+9X4H+nTqPKUF5yr9WXjSf8Ru90b80xjLe/XGGPq9GOqvGef9GpgFTstqTFoAAAABYktHRACIBR1IAAAACXBIWXMAAABkAAAAZAAPlsXdAAAAB3RJTUUH5AwKBTkuP9W8zwAAAZtJREFUKM9jYGBgYAQBdg5OLm4QgwEOgBweXj5+AUEhYRFRIIcJIS4mLuHu4enl7SMpJS0D0wMUl5Xz9fMPCAwKDgkNk1dQhMoA1cuFR0RGRcfExsUnJCYpKUPtYeQR901OSU1Lz8jMSs/Oyc1TUYVK8Er4ReYXFBYVl5SWlVdUVlWrqUMk+NxrauvqG+oam5pbWtPb2js0NMES7PwenV11dd113T29vX39aRMmammDzeIQmBQIlKgDSUyeMjV92nR3HbAEp+6MmQiJWemz58zVA0tw6c+bD5foXZC+cNFiA7AEt/CSpbVQiWXLV6xctdrQCCzBKGK8Zi1MYt36DRs3mZhCnCtqtnlLLdSordu271hsDvUgo7TFzl21XWCJ3Xv2+lhaMbNAJGQUrPftP9B18NDhIxuP+hyzsWVlY4PIKCrbHT9x8tTpM2c3Lba0OWfvwAaWYQKGpqqao5P73MWGJuZWtvZwGVCUqGtq6+gZGJkyMrM6QGRgkQUDLGxsIBlnNuSYBzuTDSzj4sqAAYAyzi5ubAxYZVzZ2AALP4wFjKKMoQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNy0xOVQwMzozOToxNCswMDowMPynLawAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMTZUMDY6MDA6MzMrMDA6MDBfHLOoAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIM5IkAsAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADU1OXwzTw0AAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTU578IfUAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTg3MDE2ODMzifxDMAAAABJ0RVh0VGh1bWI6OlNpemUAMzM3NjRCO32I7QAAAFp0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2RhdGEvd3d3cm9vdC93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vZmlsZXMvMTI0LzEyNDg4MTYucG5n0QnxRgAAAABJRU5ErkJggg==",
    //配置搜索引擎
    searchEngines: [
    {
        name: '百度',
        url: 'https://www.baidu.com/s?wd='
    },
    {
        name: '谷歌',
        url: 'https://www.google.com/search?q='
    },
    {
        name: '必应',
        url: 'https://cn.bing.com/search?q='
    },
    {
        name: '淘宝',
        url: 'https://s.taobao.com/search?q='
    },
    {
        name: '京东',
        url: 'http://search.jd.com/Search?keyword='
    },
    {
        name: '天猫',
        url: 'https://list.tmall.com/search_product.htm?q='
    },
    {
        name: '1688',
        url: 'https://s.1688.com/selloffer/offer_search.htm?keywords='
    },
    {
        name: '知乎',
        url: 'https://www.zhihu.com/search?type=content&q='
    },
    {
        name: '微博',
        url: 'https://s.weibo.com/weibo/'
    },
    {
        name: 'Bilibili',
        url: 'http://search.bilibili.com/all?keyword='
    },
    {
        name: '豆瓣',
        url: 'https://www.douban.com/search?source=suggest&q='
    },
    {
        name: 'GitHub',
        url: 'https://github.com/search?q='
    },
    {
        name:'MavenRepository',
        url:'https://mvnrepository.com/search?q='
    }],
    //导航列表
    navigations: [{
    	// 导航分组名字
        groupName: '资讯',
        // 分组下的子导航项目
        navigationItems: [{
            name: "阮一峰博客",
            description: "这里记录每周值得分享的科技内容，周五发布。",
            url: "http://www.ruanyifeng.com/blog/archives.html",
            icon: "http://www.ruanyifeng.com/favicon.ico"
        }]
    }]
}