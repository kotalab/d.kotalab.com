---
layout: post
status: publish
published: true
title: Sharehtmlのカスタマイズ記事を読んで実際にやってみた！これで今まで以上に便利になった！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 3206
wordpress_url: http://kotalab.com/?p=3206
date: '2012-10-06 13:17:41 +0900'
date_gmt: '2012-10-06 04:17:41 +0900'
categories:
- WordPressカスタマイズ
tags:
- sharehtml
comments: []
---
<p><a href="http://kotalab.com/wp-content/uploads/sharehtml_20121006.jpg" target="_blank"><img src="http://kotalab.com/wp-content/uploads/sharehtml_20121006.jpg" alt="" title="sharehtml_20121006" width="448" height="321" class="alignnone size-full wp-image-3220" /></a><br />
<span style="font-size:10px;"><a href="http://www.flickr.com/photos/centralasian/3986792701/" target="_blank">Problems, Only Solutions</a> / Cea.</span><br />
昨日のSharehtml記事の続きです。@kotala_bです。<br />
昨日はSharehtmlにwordpressのサムネイル画像を自動で表示出来るようにならないか調べました。<br />
<a href="http://kotalab.com/sharehtml-popularposts" target="_blank"><img  class="alignleft" src="http://kotalab.com/wp-content/uploads/sharehtml_121005.jpg" alt="Sharehtmlを見直してたらPopularPostsに似てることに気づいた！同じように自動で画像表示出来ないか調べてみた！ | kotala's note" width="150" /></a><a href="http://kotalab.com/sharehtml-popularposts" target="_blank">Sharehtmlを見直してたらPopularPostsに似てることに気づいた！同じように自動で画像表示出来ないか調べてみた！ | kotala's note</a><br style="clear:both;" />結局やり方が分からなく昨日は途中で断念しました。<br />
再び@delaymaniaさんがSharehtmlのカスタマイズ記事を書かれているのを発見！<br />
<a href="http://delaymania.com/201210/blog/sharehtml_3_wa/" target="_blank"><img  class="alignleft" src="http://capture.heartrails.com/150x130?http://delaymania.com/201210/blog/sharehtml_3_wa/" alt="「ShareHTMLでリンクタグを作成する際に加えている一工夫、から一手間なくす」を実践してみた | delaymania.com" width="150" height="130" /></a><a href="http://delaymania.com/201210/blog/sharehtml_3_wa/" target="_blank">「ShareHTMLでリンクタグを作成する際に加えている一工夫、から一手間なくす」を実践してみた | delaymania.com</a><a href="http://b.hatena.ne.jp/entry/http://delaymania.com/201210/blog/sharehtml_3_wa/" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://delaymania.com/201210/blog/sharehtml_3_wa/" alt="" /></a><br style="clear:both;" />これはやるしかない！と早速Sharehtmlを編集しました。<br />
<!--more--></p>
<h2>カスタマイズ方法</h2>
<p>やり方はSharehtmlに入れられるコメントを「img」タグ内に置いて、挿入するコメントに画像のurlを貼付けるというもの。<br />
出来たコードがこちら</p>
<pre>
＜a href="${posturl}" target="_blank"＞
＜img  class="alignleft" src="${memo}" alt="${posttitle}" width="150" /＞
＜/a＞
＜a href="${posturl}" target="_blank"＞${posttitle}
＜/a＞
＜br style="clear:both;" /＞
</pre>
<h2>使ってみた</h2>
<p>これを実際に使ってみます。<br />
まず画像urlをコピー<br />
<a href="http://kotalab.com/wp-content/uploads/sharehtml_121006_01.png" target="_blank"><img src="http://kotalab.com/wp-content/uploads/sharehtml_121006_01.png" alt="" title="sharehtml_121006_01" width="448" height="336" class="alignnone size-full wp-image-3212" /></a><br />
コピーしたものを貼付ける<br />
<a href="http://kotalab.com/wp-content/uploads/sharehtml_121006_02.png" target="_blank"><img src="http://kotalab.com/wp-content/uploads/sharehtml_121006_02.png" alt="" title="sharehtml_121006_02" width="448" height="336" class="alignnone size-full wp-image-3213" /></a><br />
▼出来上がったのがこれ<br />
<a href="http://kotalab.com/koromogae" target="_blank"><img  class="alignleft" src="http://kotalab.com/wp-content/uploads/koromogae_121006.jpg" alt="1年に2回の衣替え！衣替えを利用して思い切って断捨離しよう！ | kotala's note" width="150" /></a><a href="http://kotalab.com/koromogae" target="_blank">1年に2回の衣替え！衣替えを利用して思い切って断捨離しよう！ | kotala's note</a><br style="clear:both;" />うまくいきました！</p>
<h2>まとめ</h2>
<p>これでまたひとつブログを書くのが便利になりました！<br />
Sharehtmlのカスタマイズ情報を発信してくれた@delaymaniaさん、@ozpaさん、@3_waさんありがとうございます！</p>
