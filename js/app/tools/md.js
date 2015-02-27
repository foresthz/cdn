// document.write('<meta charset="utf8" />');
// var meta=document.createElement('meta');
// meta.setAttribute('charset', 'utf8');
// document.querySelector('HEAD').appendChild(meta);

// 在url中添加参数,便于使用github cdn,测试时直接使用raw,默认使用cdn, 如果hash中出现raw则调用raw链接
// 和自身无关,只是对于静态资源加载,决定是否使用CDN,使用CDN不容易由于网络问题报错,但是更新较慢.
// hash: #a:bb_a:cc, http:两种不同格式

// 这里没有使用RequireJS

(function(jsArray) {
  console.info(document.location.href);

  for (var i = 0; i < jsArray.length; i++) {
    document.write('<script src="' + jsArray[i] + '"></script>');
  }

})([
  'http://libs.baidu.com/jquery/1.9.0/jquery.js',
  'http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.js',
  'http://cdn.rawgit.com/foresthz/LABjs/R1/LAB.src.js',
  'http://cdn.rawgit.com/foresthz/cdn/master/js/libs/markdown/markdown.js',
  'http://libs.baidu.com/underscore/1.3.3/underscore-min.js',
  'http://libs.baidu.com/backbone/0.9.2/backbone-min.js'
  // 'http://cdn.bootcss.com/markdown.js/0.6.0-beta1/markdown.min.js'
]);

(function(cssArray){
  for(var i=0; i < cssArray.length; i++) {
    document.write('<link rel="stylesheet" type="text/css" href="'+ cssArray[i] +'">')
  }
})([
  'http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.css',
  // 必须加载这个css，mdtxt才会在下方显示
  'http://rawgit.com/foresthz/cdn/master/css/app/tools/md.css',
  'http://rawgit.com/foresthz/cdn/master/css/app/tools/css_lab.css',
  'http://rawgit.com/foresthz/cdn/master/css/app/tools/html5.css'
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
  if (isinit) {
    return;
  }
  isinit = true;
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

  $(function() {
    // alert('loaded');
    $('[rel]').not('link').each(function() {
      $(this).bind('click', function() {
        console.info($(this).attr('rel'));
        try {
          var urls = eval($(this).attr('rel'));
          for (var i = 0; i < urls.length; i++) {
            open(urls[i]);
          }
        } catch (err) {
          alert(err.message);
        }

      });
    });

  });
}

// 无法在js中直接调用JQuery，因为此时js还未加载完毕，通过该方法，引用MarkDown功能又简化了不少。
window.onload=function() {
  initMD();
};
