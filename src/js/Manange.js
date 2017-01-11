import '../css/Manange.less';
import ComponentBaseObj from './ComponentBase.js';

//生成DOM结构
var ManangeObj = {
    //动态添加包裹分页的容器
    init (name) {
       this.oContainer = $('<div/>').addClass(name);
       this.oContainer.appendTo($('body')).hide();
       return this;
    },
    //动态添加分页
    addPage (name) {
       this.oPage = $('<div class="section"/>').addClass(name);
       this.oPage.appendTo(this.oContainer);
       return this;
    },
    //动态添加分页里的内容
    addComponent (config) {
         let oComponent = null;
         oComponent = ComponentBaseObj(config);    //利用./Component.js来创建内容
         this.oPage.append(oComponent);
         return this;
    },
    //用fullpage插件处理分页
    load (){
        this.oContainer.show();
        this.oContainer.fullpage({
            onLeave (index,nextIndex,direction){
                $('.section').eq(index-1).trigger('onLeave');  //找到自定义的离场动画
            },
            afterLoad (anchorLink,index) {
                 $('.section').eq(index-1).trigger('onLoad');  //找到自定义的进场动画
            }
        })
        //给每个分页自定义进场离场事件
        $('.section').on('onLeave', (e) => {
            $(e.target).find('.component').trigger('cpleave');   //触发每个分页中内容的离场动画
        })
        $('.section').on('onLoad', (e) => {
            $(e.target).find('.component').trigger('cpload');    //触发每个分页中内容的进场动画
        })
        $('.section').eq(0).trigger('onLoad');  //第一页直接进入进场动画
    }
}

export default ManangeObj;