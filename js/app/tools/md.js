// document.write('<meta charset="utf8" />');
// var meta=document.createElement('meta');
// meta.setAttribute('charset', 'utf8');
// document.querySelector('HEAD').appendChild(meta);

// 在url中添加参数,便于使用github cdn,测试时直接使用raw,默认使用cdn, 如果hash中出现raw则调用raw链接

(function(jsArray) {
  console.info(document.location.href);
  
  for (var i = 0; i < jsArray.length; i++) {
    document.write('<script src="' + jsArray[i] + '"></script>');
  }

})([
  'http://libs.baidu.com/jquery/1.9.0/jquery.js',
  'http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.js',
  'https://cdn.rawgit.com/foresthz/LABjs/R1/LAB.src.js',
  'https://cdn.rawgit.com/foresthz/cdn/master/js/libs/markdown/markdown.js'
  // 'http://cdn.bootcss.com/markdown.js/0.6.0-beta1/markdown.min.js'
]);

(function(cssArray){
  for(var i=0; i < cssArray.length; i++) {
    document.write('<link rel="stylesheet" type="text/css" href="'+ cssArray[i] +'">')
  }
})([
  'http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.css',
  // 必须加载这个css，mdtxt才会在下方显示
  'https://rawgit.com/foresthz/cdn/master/css/app/tools/md.css'
]);

var nodestr = '<hr><div id="md_panel"> \
    <div> \
        <span class="label label-success" id="show_md_btn">显示/隐藏 MD文章</span> \
    </div> \
    <div id="md_content_up"> \
        <div id="md_content"> \
            内容..... \
        </div>       \
    </div> \
</div>';

var isinit=false;

function initMD() {
  // 保证一个页面只调用一次
  if(isinit) {
    return;
  }
  isinit=true;
  // 不用等iframe加载完毕
  $('#mdtxt').ready(function() {
    if ($('#mdtxt').length < 1) {
      return;
    }
    $('#mdtxt').hide();
    var md_panel = $(nodestr);
    $('#mdtxt').after(md_panel);
    $('#md_content').html(markdown.toHTML($('#mdtxt').html()));

    $('#show_md_btn').bind('click', function() {
      $('#md_content').toggle();
    });
  });
}

// 无法在js中直接调用JQuery，因为此时js还未加载完毕，通过该方法，引用MarkDown功能又简化了不少。
window.onload=function() {
  initMD();
};
