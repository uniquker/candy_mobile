/**
 * Created by ifchangetoclzp on 2016/12/13.
 */
(function(){
    document.body.style.minHeight=document.documentElement.clientHeight+'px';
    var $menuContent=document.querySelector('.s-menu-content');
    document.querySelector('.s-menu').addEventListener('click',function(){
        $menuContent.classList.add('active');
    });
    document.querySelector('.s-menu-cover').addEventListener('click',function(){
        $menuContent.classList.remove('active');
    });
    var pager=new Pager('.page-p',{
        pageChange:function(name){
            document.querySelector('.s-link.active').classList.remove('active');
            document.querySelector('.s-link[data-href="'+name+'"]').classList.add('active');
            $menuContent.classList.remove('active');
        }
    });
    [].forEach.call(document.querySelectorAll('.s-link'),function(el){
        el.addEventListener('click',function(){
            var href=this.dataset.href;
            if(href){
                pager.go(href);
            }
        });
    });
})();