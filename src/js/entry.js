import './jqUI.js';
import './jqFP.js';
import ManangeObj from './Manange.js';

ManangeObj
  .init('wrap')
     .addPage()
        .addComponent({
            width:280,
            height:715,
            css:{
                position:'absolute',
                opacity:0,
                top:0,
                left:-10,
                backgroundImage:'url(./src/img/1-1.png)',
            },
            center:true,
            animateIn:{
                left:75,
                opacity:1,
            },
            animateOut:{
                left:-10,
                opacity:0,
            },
            delay:1000,
          })
        .addComponent({
            width:605,
            height:431,
            css:{
                position:'absolute',
                opacity:0,
                bottom:-10,
                backgroundImage:'url(./src/img/1-2.png)',
            },
            center:true,
            animateIn:{
                bottom:0,
                opacity:1,
            },
            animateOut:{
                bottom:-10,
                opacity:0,
            },
            delay:1000,
          })
        .addComponent({
            width:500,
            height:400,
            css:{
                position:'absolute',
                opacity:0,
                top:10,
                right:-200,
                backgroundImage:'url(./src/img/1-3.png)',
            },
            animateIn:{
                right:-10,
                opacity:1,
            },
            animateOut:{
                right:-200,
                opacity:0,
            },
            delay:1000,
          })
        .addComponent({
            name:'text',
            width:550,
            height:130,
            text:'故事是从2016年5月2日开始的...',
            css:{
                position:'absolute',
                color:'rgb(215,90,18)',
                fontFamily:'微软雅黑',
                fontSize:'26px',
                paddingLeft:'10px',
                top:300,
                left:65,
                opacity:0,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:1500,
          })
     .addPage()
        .addComponent({
              width: 1000,
              height: 380,
              css: {
                position:'absolute',
                top:-10,
                left:-60,
                opacity:0,
                backgroundImage:'url(./src/img/2-3.png)',
              },
              animateIn:{
                top:0,
                opacity:1,
              },
              animateOut:{
                top:-10,
                opacity:0,
              },
              delay:20,
          })
        .addComponent({
              width: 880,
              height: 568,
              css: {
                position:'absolute',
                top:200,
                right:-450,
                opacity:1,
                backgroundImage:'url(./src/img/a2.jpg)',
              },
              animateIn:{
                right:0,
                opacity:1,
              },
              animateOut:{
                right:-450,
                opacity:0,
              },
              delay:300,
           })
        .addComponent({
             width: 600,
             height:200,
             text:'你是不小心下落到人间的小天使',
             css:{
               position:'absolute',
               left:53,
               bottom:-10,
               opacity:0,
               color:'rgb(152,92,152)',
               fontFamily:'微软雅黑',
               fontSize:'26px',
               paddingLeft:'10px',
             },
             animateIn:{
                bottom:120,
                opacity:1,
              },
             animateOut:{
                bottom: -10,
                opacity:0,
              },
              delay:800,
           })
        .addComponent({
             width: 600,
             height:100,
             text:'而成了我最美丽的邂逅...',
             css:{
               position:'absolute',
               left:53,
               bottom:-10,
               opacity:0,
               color:'rgb(152,92,152)',
               fontFamily:'微软雅黑',
               fontSize:'26px',
               paddingLeft:'10px',
             },
             animateIn:{
                bottom:70,
                opacity:1,
              },
             animateOut:{
                bottom: -10,
                opacity:0,
              },
              delay:800,
           })
     .addPage()
        .addComponent({
            name:'sun',
            width:380,
            height:555,
            css:{
                position:'absolute',
                top:-10,
                opacity:0,
                marginLeft:-210,
                backgroundImage:'url(./src/img/2-1.png)',
            },
            center:true,
            animateIn:{
                top:0,
                opacity:1,
            },
            animateOut:{
                top:-10,
                opacity:0,
            },
            delay:20,
          })
        .addComponent({
            width:1060,
            height:288,
            css:{
                position:'absolute',
                bottom:-10,
                opacity:0,
                backgroundImage:'url(./src/img/2-2.png)',
            },
            center:true,
            animateIn:{
                bottom:0,
                opacity:1,
            },
            animateOut:{
                bottom:-10,
                opacity:0,
            },
            delay:20,
          })
        .addComponent({
            width:450,
            height:600,
            css:{
                position:'absolute',
                opacity:1,
                bottom:-200,
                left:-225,
                backgroundImage:'url(./src/img/a1.jpg)',
                border:'1px solid white',
                borderRadius:'10%',
            },
            animateIn:{
                bottom:145,
                left:10,
                opacity:0.75,
            },
            animateOut:{
                bottom:-200,
                left:-225,  
                opacity:0,
            },
            delay:600
          })
        .addComponent({
            width:450,
            height:600,
            css:{
                position:'absolute',
                opacity:1,
                top:-200,
                right:-225,
                backgroundImage:'url(./src/img/a6.jpg)',
                border:'1px solid white',
                borderRadius:'10%',
            },
            animateIn:{
                top:90,
                right:10,
                opacity:0.75,
            },
            animateOut:{
                top:-200,
                right:-2250,
                opacity:0,
            },
            delay:600,
         })
         .addComponent({
           width: 200,
           height: 360,
           text:'我希望你开心,希望你快乐,',
           css:{
             position:'absolute',
             right: 30,
             bottom: 135,
             opacity:0,
             color:'rgb(0,0,0)',
             fontFamily:'微软雅黑',
             fontSize:'26px',
           },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:1000,
         })
     .addPage()
        .addComponent({
            width:1000,
            height:220,
            css:{
                position:'absolute',
                opacity:0,
                top:-10,
                backgroundImage:'url(./src/img/3-1.png)',
            },
            animateIn:{
                top:0,
                opacity:1,
            },
            animateOut:{
                top:-10,
                opacity:0,
            },
            delay:20,
         })
        .addComponent({
            width:400,
            height:290,
            css:{
                position:'absolute',
                opacity:0.75,
                top:150,
                left:-200,
                backgroundImage:'url(./src/img/a4.jpg)',
            },
            animateIn:{
                left:0,
                opacity:1,
            },
            animateOut:{
                left:-200,
                opacity:0,
            },
            delay:500,
         })
        .addComponent({
           width: 700,
           height: 140,
           text:'高兴的，哭泣的，烦恼的,都在我的心头',
           css: {
             position: 'absolute',
             top:315,
             left:25,
             opacity:0,
             color: 'rgb(0,0,0)',
             fontFamily:'微软雅黑',
             fontSize:'26px',
           },
           animateIn:{
              opacity:1,
            },
            animateOut:{
              opacity:0,
            },
            delay:1500,
         })
        .addComponent({
            width:400,
            height:290,
            css:{
                position:'absolute',
                opacity:0.75,
                top:150,
                right:-200,
                backgroundImage:'url(./src/img/a5.jpg)',
            },
            animateIn:{
                right:0,
                opacity:1,
            },
            animateOut:{
                right:-200,
                opacity:0,
            },
            delay:500,
         })
        .addComponent({
            width:400,
            height:290,
            css:{
                position:'absolute',
                opacity:0.75,
                bottom:185,
                left:-200,
                backgroundImage:'url(./src/img/a8.jpg)',
            },
            animateIn:{
                left:0,
                opacity:1,
            },
            animateOut:{
                left:-200,
                opacity:0,
            },
            delay:500,
         })
        .addComponent({
            width:400,
            height:290,
            css:{
                position:'absolute',
                opacity:0.75,
                bottom:185,
                right:-200,
                backgroundImage:'url(./src/img/a7.jpg)',
            },
            animateIn:{
                right:0,
                opacity:1,
            },
            animateOut:{
                right:-200,
                opacity:0,
            },
            delay:500,
         })
        .addComponent({
            name:'car',
            width:400,
            height:290,
            css:{
                position:'absolute',
                opacity:0,
                left:-100,
                bottom:0,
                backgroundImage:'url(./src/img/3-2.png)',
            },
            animateIn:{
                left:100,
                opacity:1,
            },
            animateOut:{
                left:-100,
                opacity:0,
            },
            delay:800,
          })
     .addPage()
        .addComponent({
            width:400,
            height:532,
            css:{
                position:'absolute',
                opacity:0,
                left:-230,
                top:100,
                transform:'rotateZ(-10deg)',
                backgroundImage:'url(./src/img/a10.jpg)',
            },
            animateIn:{
                left:10,
                opacity:1,
            },
            animateOut:{
                left:-230,
                opacity:0,
            },
            delay:500,
         })
        .addComponent({
         width: 186,
         height: 139,
         css:{
            position:'absolute',
            opacity:0,
            left:40,
            top:-10,
            backgroundImage:'url(./src/img/4-3.png)',
         },
         animateIn:{
            top:40,
            opacity:1,
          },
          animateOut:{
            left:-10,
            opacity:0,
          },
          delay:700,
         })
        .addComponent({
          width: 500,
          height: 80,
          text:'送你一道彩虹,一切雨过天晴',
          css:{
              position:'absolute',
              opacity:0,
              right:-10,
              top:20,
              color:'rgb(277,30,47)',
              transform:'rotateZ(-10deg)',
              fontFamily:'微软雅黑',
              fontSize:'20px',
          },
          animateIn:{
            right:0,
            opacity:1,
          },
          animateOut:{
            right:-10,
            opacity:0,
          },
          delay:800,
         })
        .addComponent({
            width:400,
            height:532,
            css:{
                position:'absolute',
                opacity:0,
                left:450,
                top:360,
                transform:'rotateZ(10deg)',
                backgroundImage:'url(./src/img/a3.jpg)',
            },
            animateIn:{
                left:180,
                opacity:1,
            },
            animateOut:{
                left:450,
                opacity:0,
            },
            delay:100,
         })
        .addComponent({
            width:200,
            height:560,
            css:{
                position:'absolute',
                opacity:0,
                left:27,
                bottom:-10,
                backgroundImage:'url(./src/img/4-1.png)',
            },
            animateIn:{
                top:450,
                opacity:1,
            },
            animateOut:{
                bottom:-10,
                opacity:0,
            },
            delay:1500,
         })
        .addComponent({
            width:180,
            height:540,
            css:{
                position:'absolute',
                opacity:0,
                left:275,
                bottom:-10,
                backgroundImage:'url(./src/img/4-2.png)',
            },
            animateIn:{
                top:50,
                opacity:1,
            },
            animateOut:{
                bottom:-10,
                opacity:0,
            },
            delay:2000,
        })
     .addPage()
        .addComponent({
          width:830,
          height: 430,
          css:{
              position:'absolute',
              opacity:0,
              backgroundImage:'url(./src/img/5-1.png)',
          },
          animateIn:{
              opacity:0.75,
          },
          animateOut:{
              opacity:0,
          },
          delay:500,
          })
        .addComponent({
          width:360,
          height: 480,
          css:{
              position:'absolute',
              opacity:0,
              top:220,
              left:20,
              backgroundImage:'url(./src/img/a9.jpg)',
          },
          animateIn:{
              opacity:0.8,
          },
          animateOut:{
              opacity:0,
          },
          delay:1000,
         })
        .addComponent({
          width:360,
          height: 480,
          css:{
              position:'absolute',
              opacity:0,
              top:220,
              right:20,
              backgroundImage:'url(./src/img/a10.jpg)',
          },
          animateIn:{
              opacity:0.8,
          },
          animateOut:{
              opacity:0,
          },
          delay:1000,
         })
        .addComponent({
          width:750,
          height: 480,
          css:{
              position:'absolute',
              opacity:0,
              bottom:20,
              left:20,
              backgroundImage:'url(./src/img/a8.jpg)',
          },
          animateIn:{
              opacity:0.8,
          },
          animateOut:{
              opacity:0,
          },
          delay:1000,
         })
     .addPage()
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a2.jpg)',
              left: '50%',
              marginLeft: '-25px',
              top: 233,
            },
            animateIn:{
              opacity:1,
            },
            animateOut:{
              opacity:0,
            },
            delay:1000,
           })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a4.jpg)',
              right:132,
              top:200,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:1500,
            })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a7.jpg)',
              left:132,
              top:200,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:1500
           })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a5.jpg)',
              right:81,
              top:170,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:2000,
            })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a8.jpg)',
              left:81,
              top:170,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:2000,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a1.jpg)',
              right:30,
              top:200,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:2500,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a3.jpg)',
              left:30,
              top:200,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:2500,
           })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a10.jpg)',
              right:0,
              top:250,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:3000,
            })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a11.jpg)',
              left:0,
              top:250,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:3000,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a1.jpg)',
              right:0,
              top:300,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:3500,
            })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a6.jpg)',
              left:0,
              top:300,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:3500,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a3.jpg)',
              right:10,
              top:350,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:4000,
            })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a1.jpg)',
              left:10,
              top:350,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:4000,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a6.jpg)',
              right:55,
              top:400,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:4500,
            })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a11.jpg)',
              left:55,
              top:400,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:4500,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a11.jpg)',
              right:105,
              top:450,
            },
            animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:5000,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a1.jpg)',
              left:105,
              top:450,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:5000,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a6.jpg)',
              right:157,
              top:500,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:5500,
          })
      .addComponent({
            width: 100,
            height: 100,
            css:{
              position: 'absolute',
              opacity: 0,
              backgroundImage: 'url(./src/img/a6.jpg)',
              left:157,
              top:500,
            },
             animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:5500,
          })
      .addComponent({
          width: 200,
          height: 200,
          css:{
            position: 'absolute',
            backgroundImage: 'url(./src/img/a6.jpg)',
            opacity: 0,
            right:80,
            top:250,
          },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:6000,
          })
      .addComponent({
          width: 200,
          height: 144,
          css:{
            position: 'absolute',
            backgroundImage: 'url(./src/img/a8.jpg)',
            opacity: 0,
            right:150,
            top:350,
          },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:6500,
        })
      .addComponent({
          width: 200,
          height: 144,
          css:{
            position: 'absolute',
            backgroundImage: 'url(./src/img/a4.jpg)',
            opacity: 0,
            left:62,
            top:325,
          },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:7000,
        })
      .addComponent({
          width: 200,
          height: 144,
          css:{
            position: 'absolute',
            backgroundImage: 'url(./src/img/a5.jpg)',
            opacity: 0,
            left:80,
            top:250,
          },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:7500,
        })
      .addComponent({
          width: 200,
          height: 144,
          css:{
            position: 'absolute',
            backgroundImage: 'url(./src/img/a2.jpg)',
            opacity: 0,
            left:155,
            top:428,
          },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:8000,
        })
      .addComponent({
          width: 2016,
          height: 475,
          css:{
            position: 'absolute',
            top:-10,
            backgroundImage: 'url(./src/img/3-1.png)',
            opacity: 0,
          },
          animateIn:{
              top:0,
              opacity:1,
          },
          animateOut:{
              top:-10,
              opacity:0,
          },
          delay:500,
        })
      .addComponent({
          width: 740,
          height: 200,
          text:'要学会爱别人，更要学会爱自己，珍惜身边的每一个人,愿你的生活有我',
          css:{
            position: 'absolute',
            opacity: 0,
            padding: 20,
            left:15,
            fontFamily:'微软黑体',
            fontWeight:700,
            fontSize:'24px',
            color:'rgb(99,3,118)',
            bottom:30,
          },
           animateIn:{
                opacity:1,
            },
            animateOut:{
                opacity:0,
            },
            delay:8500,
        })
     .addPage()
      .addComponent({
          width: 475,
          height: 480,
          css:{
            position: 'absolute',
            opacity: 0,
            backgroundImage:'url(./src/img/7-1.png)',
            bottom:0,
            right:-20,
          },
          animateIn:{
              right:0,
              opacity:1,
          },
          animateOut:{
              right:-20,
              opacity:0,
          },
          delay:500,
        }) 
      .addComponent({
          width: 414,
          height: 357,
          css:{
            position: 'absolute',
            opacity: 0,
            backgroundImage:'url(./src/img/7-2.png)',
            left:-20,
            top:20,
          },
          animateIn:{
              left:20,
              opacity:1,
          },
          animateOut:{
              left:-20,
              opacity:0,
          },
          delay:300,
        })
      .addComponent({
          width: 600,
          height: 100,
          text:'未完待续.....',
          css:{
            position: 'absolute',
            opacity: 0,
            color:'rgb(138,62,3)',
            right:-35,
            top:340,
            fontFamily:'微软黑体',
            fontSize:'26px',
          },
          animateIn:{
              right:0,
              opacity:1,
          },
          animateOut:{
              right:-35,
              opacity:0,
          },
          delay:1000,
        })
  .load()
