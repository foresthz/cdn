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
  'https://rawgit.com/foresthz/cdn/master/css/app/tools/md.css',
  'http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.css'
]);

var nodestr = '<div id="md_panel"> \
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
    $('#mdtxt').hide();
    var md_panel = $(nodestr);
    $('#mdtxt').after(md_panel);
    $('#md_content').html(markdown.toHTML($('#mdtxt').html()));

    $('#show_md_btn').bind('click', function() {
      $('#md_content').toggle();
    });
  });
}
