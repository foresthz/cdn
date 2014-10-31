// document.write('<meta charset="utf8" />');
// var meta=document.createElement('meta');
// meta.setAttribute('charset', 'utf8');
// document.querySelector('HEAD').appendChild(meta);

(function(jsArray) {

  for (var i = 0; i < jsArray.length; i++) {
    document.write('<script src="' + jsArray[i] + '"></script>');
  }

})([
  'http://libs.baidu.com/jquery/1.9.0/jquery.js',
  'http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.js',
  'https://rawgit.com/foresthz/cdn/master/js/libs/markdown/markdown.js'
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
        <a class="label label-success" id="show_md_btn">显示/隐藏 MD文章</a> \
    </div> \
    <div id="md_content_up"> \
        <div id="md_content"> \
            内容..... \
        </div>       \
    </div> \
</div>';

function initMD() {
  $(function() {
    if($('#mdtxt').length<1) {
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
}