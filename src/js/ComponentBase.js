import '../css/ComponentBase.less';

//创建每个分页中的内容
let ComponentBaseObj = (config) => {
   let component = $('<div class="component"/>');
   let Id = (Math.random() + '').replace('.','_');
   component.attr('id',Id);
 //根据传来的参数config定制化组件
   config.name && component.addClass(config.name);
   config.width && component.css('width',config.width / 2);
   config.height && component.css('height',config.height / 2);
   config.text && component.text(config.text);
   config.center && component.css({left:'50%',marginLeft:-(config.width / 2 / 2)});
   config.css && component.css(config.css);
   

   component.on('cpleave',(e) => {
      setTimeout( () => {
           config.animateOut && component.animate(config.animateOut);
      },config.delay || 0);
   })
   component.on('cpload',(e) => {
      setTimeout( () => {
           config.animateIn && component.animate(config.animateIn);
      },config.delay || 0);
   })


   return component;
}

export default ComponentBaseObj;