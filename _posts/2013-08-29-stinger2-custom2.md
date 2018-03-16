---
layout: post
status: publish
published: true
title: "[Stinger2]PCとスマホで見たときの表示・非表示を変える方法"
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 8292
wordpress_url: http://kotalab.com/?p=8292
date: '2013-08-29 19:19:41 +0900'
date_gmt: '2013-08-29 10:19:41 +0900'
category:
- WordPressカスタマイズ
tags:
- css3
- stinger2
comments:
- id: 2538
  author: "[どんブロ] 2013/09/05版 ブロガー向けまとめ。 | 覚醒する @CDiP"
  author_email: ''
  author_url: http://www.donpy.net/blogger-focus/27112.html
  date: '2013-09-05 18:27:05 +0900'
  date_gmt: '2013-09-05 09:27:05 +0900'
  content: "[&#8230;]  [&#8230;]"
---
<p>ブログのテーマに「Stinger2」を使ってます。こたら（@kotala_b）です。<br />
「Stinger2」はスマホにも自動的に最適化され、iPhoneやAndroidでも見やすくなっています。<br />
見やすくなっているのはPC用とスマホ用の2種類のCSSが用意されているおかげ！そのおかげでPCでは表示しているけど、スマホでは非表示にしたいということもできちゃいます！<br />
<!--more--></p>
<h2>スマホかPCどちらかだけで表示したいときの設定方法</h2>
<p>「Stinger2」をお使いのあなたは、スマホとPC表示のヘッダーを見比べるとメニューバーが違うのにお気づきでしょうか？<br />
スマホ表示では折り畳まれていて、<br />
<img src="http://kotalab.com/wp-content/uploads/stingercustom_130829_02.jpg" alt="stingercustom_130829_02" width="416" height="329" class="alignnone size-full wp-image-8297" /><br />
PCではそのまま表示されています。<br />
<img src="http://kotalab.com/wp-content/uploads/stingercustom_130829_01-448x89.jpg" alt="stingercustom_130829_01" width="448" height="89" class="alignnone size-large wp-image-8296" /><br />
元々コードには2種類のメニューバーが記述されています。<br />
スマホで見たときは折り畳まれていないメニューバーが非表示になるように設定されていて、PCで見たときは折り畳まれたメニューバーを非表示になるよう設定されているのです。<br />
CSSに1行追加（削除）するだけでこのように非表示（表示）に変えることができます。</p>
<h3>非表示にしたいときにCSSに追加するコード</h3>
<p>PCで非表示にしたい時はPC用CSSの非表示にしたい要素に<strong>「display:none;」と追加します。</strong><br />
スマホで非表示にしたい時はスマホ用CSSに追加します。<br />
「Stinger2」の折り畳みメニューバー部分はこのように非表示設定にされています。<br />
[css]<br />
.pcnone{<br />
 display:none;<br />
}<br />
[/css]<br />
この部分を削除するとPCでも折り畳みメニューバーが表示されます。<br />
<img src="http://kotalab.com/wp-content/uploads/stingercustom_130829_03-448x88.jpg" alt="stingercustom_130829_03" width="448" height="88" class="alignnone size-large wp-image-8298" /></p>
<h3>表示非表示の切替えはお好みで！</h3>
<p><strong>「display:none;」</strong>をCSSに追加することで非表示にできます。<br />
PC用とスマホ用の2つのCSSを用意している方はデザインに合わせて表示・非表示を切替えてみてはいかがでしょう？</p>
<h4 class="aam">Amazonのオススメ！</h4>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/B009NQ7MGM/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51R5X8BZm-L._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/B009NQ7MGM/same-22/" rel="nofollow" target="_blank">必ず結果がでるブログ運営テクニック100 プロ・ブロガーが教える"俺メディア"の極意[Kindle版]</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">コグレ マサト,するぷ インプレスジャパン 2012-08-23    </div>
<div class="booklink-link2">
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B009NQ7MGM/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4844331779/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon[書籍版]</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/B00E9IYWJ4/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51OmKlbWagL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/B00E9IYWJ4/same-22/" rel="nofollow" target="_blank">プロ・ブロガーの必ず結果が出るアクセスアップテクニック100[Kindle版]</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">コグレ マサト,するぷ インプレスジャパン 2013-08-09    </div>
<div class="booklink-link2">
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00E9IYWJ4/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4844334417/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon[書籍版]</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/4844363581/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51oMOcOn9xL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/4844363581/same-22/" rel="nofollow" target="_blank">HTML+CSSデザイン|基本原則、これだけ。【HTML5 & CSS3対応版】</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">大藤 幹,久保 知己,境 祐司,佐藤 裕 エムディエヌコーポレーション 2013-08-01    </div>
<div class="booklink-link2">
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/asin/4844363581/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00EUSWDOY/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkrakuten"><a href="http://c.af.moshimo.com/af/c/click?a_id=374941&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12397704%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックス</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/B00E3K9TRS/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/41oxN8mnDWL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/B00E3K9TRS/same-22/" rel="nofollow" target="_blank">レスポンシブWebデザイン　マルチデバイス時代のコンセプトとテクニック (アスキー書籍)[Kindle版]</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">菊池 崇 アスキー・メディアワークス 2013-07-31    </div>
<div class="booklink-link2">
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00E3K9TRS/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4048863231/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon[書籍版]</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
