---
layout: post
status: publish
published: true
title: WordPressブログで「メンテナンス中のため、しばらくの間ご利用いただけません。」を解決する方法
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 13663
wordpress_url: https://kotalab.com/?p=13663
date: '2014-12-23 10:04:17 +0900'
date_gmt: '2014-12-23 01:04:17 +0900'
category:
- WordPressプラグインの使い方
tags:
- wordpress
- プラグイン
- メンテナンスモード
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/wordpress-maintenance_20141224_01-780x351.png" alt="wordpress-maintenance_20141224_01" width="780" height="351" class="aligncenter size-large wp-image-13664" /><br />
「メンテナンス中のため、しばらくの間ご利用いただけません。」という表示が出たみなさん。</p>
<p>「うわー！どうしようどうしよう」なんて焦らなくて大丈夫です。<br />
管理画面にも入れなくなるしブログも表示されなくなるけど、一時的なものなので安心してください。<br />
これから紹介する方法ですぐに元に戻せるので落ち着いて読んでくださいね。<br />
<!--more--></p>
<h2>メンテナンス中と表示される原因</h2>
<p>さっさと解決方法を見たいという人はここを読み飛ばして次の対処法を読んでください。<br />
ただ、原因がわからないとまた同じことが起こるかもしれないので、先に原因のお話から。</p>
<p>実は元々WordPressに備わっているメンテナンスモードというのが、「メンテナンス中のため、しばらくの間ご利用いただけません。」という表示をさせています。<br />
なので、この表示がされること自体は何も問題がないんですね。</p>
<p>問題なのは、メンテナンス中にしたつもりがないのにこの表示がされていることなのです。<br />
意図せず「メンテナンス中のため〜」と表示される一番多いパターンは、プラグインなどの更新中にネットが切断したり別の画面を開いたりしてしまうことだと思います。</p>
<p><img src="https://kotalab.com/wp-content/uploads/wordpress-maintenance_20141224_03.png" alt="wordpress-maintenance_20141224_03" width="718" height="287" class="aligncenter size-full wp-image-13666" /><br />
プラグインの更新画面をよく見てみると「メンテナンスモードを有効にします」と表示されています。<br />
プラグインの更新が終わると自動的にメンテナンスモードを終了してくれるんですが、自動終了する前にネットが切断したり別の画面を開いたりして問題が発生すると、自動終了せずにずっとメンテナンスモードになってしまうわけです。</p>
<h2>メンテナンス中と表示された時の対処法</h2>
<p>メンテナンスモードを手動で終了させれば「メンテナンス中のため〜」という表示は消えて、いつも見ている画面に戻ります。</p>
<p>メンテナンスモードを終了させるにはWordPressが置いてあるサーバーにアクセスし、「.maintenance」というファイルを削除することです。<br />
FTPソフトでアクセスしたり、契約しているサーバーによってはサーバー管理ツールとかでもアクセス可能です。</p>
<p><img src="https://kotalab.com/wp-content/uploads/wordpress-maintenance_20141224_02.png" alt="wordpress-maintenance_20141224_02" width="596" height="263" class="aligncenter size-full wp-image-13665" /><br />
「.maintenance」があるのは「wp-admin.php」とか「wp-login.php」が置いてある一番上の階層です。</p>
<h3></h3>
<p>かく言う僕もプラグインの更新中に別画面を開いてメンテナンスモードになったのでこんな記事を書いているのですが、知らないと焦っちゃうけど、一度知ってしまえば何ということもない問題でした。</p>
<p>「.maintenance」というファイルを削除するのですが、他の大切なファイルを間違って削除しないよう焦らず落ち着いて対処しましょう！</p>
<h4 class="aam">Amazonのオススメ！</h4>
<div class="booklink-box">
<div class="booklink-image"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844337092/same-22/" rel="nofollow" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/61wUgf%2BMWFL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844337092/same-22/" rel="nofollow" target="_blank">いちばんやさしいWordPressの教本 人気講師が教える本格Webサイトの作り方 第2版 WordPress 4.x対応 (「いちばんやさしい教本」シリーズ)</a>
<div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">石川 栄和,大串 肇,星野 邦敏 インプレス 2014-11-14    </div>
<div class="booklink-link2">
<div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844337092/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
<div class="shoplinkkindle"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B00QGBORXI/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkrakuten"><a href="http://c.af.moshimo.com/af/c/click?a_id=374939&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12997417%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックス</a></div>
<div class="shoplinkseven"><a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2967684&pid=883100332&vc_url=http%3A%2F%2Fwww.7netshopping.jp%2Fbooks%2Fsearch_result%2F%3Fctgy%3Dbooks%26code%3D4844337092" rel="nofollow" target="_blank" title="セブンネットショッピング" >7net</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<div class="booklink-box">
<div class="booklink-image"><a href="https://www.amazon.co.jp/exec/obidos/asin/B009NQ7MGM/same-22/" rel="nofollow" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/51uH-ZNTIsL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="https://www.amazon.co.jp/exec/obidos/asin/B009NQ7MGM/same-22/" rel="nofollow" target="_blank">必ず結果がでるブログ運営テクニック100 プロ・ブロガーが教える"俺メディア"の極意[Kindle版]</a>
<div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">コグレ マサト,するぷ インプレス 2012-08-23    </div>
<div class="booklink-link2">
<div class="shoplinkkindle"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B009NQ7MGM/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/4844331779/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon[書籍版]</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
