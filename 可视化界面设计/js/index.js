// 柱状图模块1
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '10px',
            left: '0%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签相关样式
                axisLabel: {
                    color:'rgba(255,255,255,0.6)',
                    fontSize:"12"
                },
                // X轴的线
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color:'rgba(255,255,255,0.6)',
                    fontSize:"12"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width:2
                    }
                },
                // y轴分割线
                splitLine: {
                    lineStyle: {
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                // 柱子的宽度
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius:5
                }
            }
        ]
    };
    // 3.吧配置项给实例对象
    myChart.setOption(option);
    // 4.图标大小与屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
// 柱状图模块2
(function() {
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    var myColor = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#b78ff6"];
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            containLabel: false
        },
        xAxis: {
            // 不显示X轴相关内容
            show:false
        },
        yAxis: [
            {
                type: 'category',
                data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                },
                inverse: true
            },
            {
                data: [702, 350, 610, 793, 664],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                },
                inverse: true
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                itemStyle: {
                    barBorderRadius: 20,
                    // 给每个柱子设置不同的颜色
                    color: function (params) {
                        // params是柱子对象，dataIndex是柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子间的距离
                barCategoryGap: 50,
                // 柱子宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    normal: {
                        show:true,
                        position:"inside",
                        formatter:"{c}%"
                    }
                },
                yAxisIndex: 0
            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borerWidth: 3,
                    barBorderRadius: 15
                },
                yAxisIndex: 1
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();
// 折线图模块1
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.line .chart'));
    // 2.指定配置项和数据
    option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['新增粉丝', '新增游客'],
            // 修改图例组件文字颜色
            textStyle: {
                color: "#4c9bfd"
            },
            right: "10%"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            // 显示边框
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            splitLine: {
                color: "#012f4a"
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: [24,40,101,134,90,230,210,230,120,230,210,120],
                smooth: true
            },
            {
                name: '新增游客',
                type: 'line',
                data: [40,64,191,324,290,330,310,213,180,200,180,79],
                smooth: true
            }
        ]
    };
    // 3.吧配置项给实例对象
    myChart.setOption(option);
    // 4.图标大小与屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
    // 5.点击切换效果
    // $(".zhexian").on('click', 'a', function () {
    //     alert(1);
    // })
})();
// 折线图模块2
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    // 2.指定配置项和数据
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: "0%",
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba{255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: "#0184d5",
                    width: "3"
                },
                areaStyle: {
                    // 渐变色
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1,132,213,.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1,132,213,.1)"
                            }
                        ]
                    ),
                    shadowColor: "rgba(0,0,0,.1)"
                },
                // 拐点设置
                symbol: "circle",
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221,220,107,.1)",
                    borderWidth: 12
                },
                data: [30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,
                30,60,20,40,30,40,30,40,30,40,30,50,40]
            },
            {
                name: '联盟广告',
                type: 'line',
                smooth: true,
                areaStyle: {
                    // 渐变色
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1,216,135,.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1,216,135,.1)"
                            }
                        ]
                    ),
                    shadowColor: "rgba(0,0,0,.1)"
                },
                // 拐点设置
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221,220,107,.1)",
                    borderWidth: 12
                },
                data: [130,10,20,40,30,40,80,60,20,40,90,40,20,140,
                    30,40,130,20,20,40,80,70,30,40,30,120,20,99,50,20]
            }
        ]
    };    
    // 3.吧配置项给实例对象
    myChart.setOption(option);
    // 4.图标大小与屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 饼状图模块1
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    // 2.指定配置项和数据
    option = {
        color: [
            "#006cff", 
            "#60cda0", 
            "#ed8884", 
            "#ff9f7f", 
            "#0096ff", 
            "#9fe6b8", 
            "#32c5e9", 
            "#1d9dff"
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['30%', '70%'],
                center: ["50%", "50%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    fontSize:10
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1, name: '0岁以下'},
                    {value: 4, name: '20-29岁'},
                    {value: 2, name: '30-39岁'},
                    {value: 2, name: '40-49岁'},
                    {value: 1, name: '50岁以上'}
                ]
            }
        ]
    };
    
    // 3.吧配置项给实例对象
    myChart.setOption(option);
    // 4.图标大小与屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

//饼形图模块2
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    // 2.指定配置项和数据
    option = {
        color: [
            '#006cff',
            '#60cda0',
            '#ed8884',
            '#ff9f7f',
            '#0096ff',
            '#9fe6b8',
            '#32c5e9',
            '#1d9dff'
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
            data: ['云南', '北京', '山东', '河北', '江苏', '浙江', '四川', '湖北']
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: [10, 70],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize:10
                },
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 5
                },
                data: [
                    {value: 20, name: '云南'},
                    {value: 26, name: '北京'},
                    {value: 24, name: '山东'},
                    {value: 25, name: '河北'},
                    {value: 20, name: '江苏'},
                    {value: 25, name: '浙江'},
                    {value: 30, name: '四川'},
                    {value: 42, name: '湖北'}
                ]
            }
        ]
    };
       
    // 3.吧配置项给实例对象
    myChart.setOption(option);
    // 4.图标大小与屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();



// (function () {
//     // 1.实例化对象
//     var myChart = echarts.init(document.querySelector());
//     // 2.指定配置项和数据
    
//     // 3.吧配置项给实例对象
//     myChart.setOption(option);
//     // 4.图标大小与屏幕自适应
//     window.addEventListener('resize', function() {
//         myChart.resize();
//     });
// })();