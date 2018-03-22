---
layout: post
status: publish
published: true
title: iOSアプリを作りたくて「アプリクリエイター道場　開発塾」の2日目に行って動画も撮ってきたよ！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 12660
wordpress_url: https://kotalab.com/?p=12660
date: '2014-04-29 07:27:09 +0900'
date_gmt: '2014-04-28 22:27:09 +0900'
category:
- アプリクリエイター道場　開発塾
tags:
- アプリ開発
- 自由大学
- Xcode
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/app-creator-2day_140429_01-546x364.jpg" alt="app-creator-2day_140429_01" width="546" height="364" class="alignnone size-large wp-image-12675" /><br />
<a href="https://kotalab.com/app-creator-1day" target="_blank">先週に引き続き</a><a href="http://b.hatena.ne.jp/entry/https://kotalab.com/app-creator-1day" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/https://kotalab.com/app-creator-1day" alt="" /></a>、日曜日はアプリ道場19期に行ってきました！<br />
2日目も1日目同様、午前と午後に1講義ずつ。<br />
1日目とはまた違った内容の濃い時間を過ごせました。</p>
<p><!--more--></p>
<h2>アプリ道場19期、2日目の流れ</h2>
<p>午前中は「初心者がよく間違えそうなことのtipsの紹介」、「UIWebViewという部品の使い方」、「1日目の宿題発表」。<br />
午後からは「実機での動かし方」、「ペアプログラミング」という流れでした。</p>
<p>2日目にはようやく実機（自分がもってるiOS端末）で動かせるようになり、講義の内容も1日目から更に一歩踏み込んだ内容になります。</p>
<h2>Xcodeの使い方tips</h2>
<p><img src="https://kotalab.com/wp-content/uploads/app-creator-2day_140429_04-546x364.jpg" alt="app-creator-2day_140429_04" width="546" height="364" class="alignnone size-large wp-image-12674" /><br />
tipsで紹介されたのは、いらなくなった部品の削除の仕方とスナップショットの使い方です。</p>
<h3>いらなくなった部品の削除の仕方</h3>
<p>コードに記述してあるoutletやactionはコード上で消すだけでは完全に削除されたことにはなりません。</p>
<p><strong>コネクション情報も一緒に</strong>消さないと完全に削除されたことにならなくて、コネクションが残ってるとアプリを起動した時にエラーが出るとのこと。</p>
<p>僕が宿題をやってる時に何度もよくわからないエラーが出てた部分です。<br />
コードだけ消せばいいと思っていたのですが、アプリを起動してもエラーが出るのでいちいちプロジェクトを作り直したり。<br />
コネクションを消せば良かったんですね！</p>
<h3>スナップショット機能</h3>
<p>Xcodeにはスナップショットといって、ある段階のコードを保存しておくことができます。</p>
<p>もしコードを書いていて途中で動かなくなってしまった場合に、スナップショットがあれば少し前の正常に動いていた状態まで戻れるのです。</p>
<p>スナップショットを取る時の注意点は、動いている状態でスナップショットを取ることです。<br />
スナップショットは自分で取らなければいけないのですが、動かない状態を保存しておいても意味がありません。</p>
<ol>
<li>動く状態でスナップショットを取る</li>
<li>コードを書き足す</li>
<li>動くか確認する</li>
<li>動いたらまた1に戻ってスナップショットを取る</li>
</ol>
<p>最初のうちは何をやったら動いて、何をやったら動かなくなったかわからないので<strong>スナップショットを細かく取っておくことがすごく大切</strong>とのことでした。</p>
<h2>UIWebViewの使い方</h2>
<p>UIWebViewはアプリ内でURLを開いたりするときに使う部品です。</p>
<p>この部品とswith文やif文での分岐を使って、プログラムを作っていきました。<br><br />
ボタンを押したら用意してあるURLがいくつか表示されて、URLを選択するとそのページが開くという作りのアプリです。</p>
<h2>宿題発表</h2>
<p>各自やってきた宿題を1人ずつ発表し、宿題をやるうえでつまづいた部分をあきおさんが個人レクチャーしてくれるという流れです。<br><br />
宿題発表後のあきおさんの個人レクチャーの部分を動画に撮ってみました。</p>
<div class="video-container"><iframe src="//www.youtube.com/embed/Q1hUNhenqrA" frameborder="0" allowfullscreen></iframe></div>
<p>ボタンを押したらボタンに対応した画像を表示させるアプリで、このアプリのボタンをpickerに変えて選択肢に合わせて画像が切り替わるようにあきおさんが教えてくれています。</p>
<p>この時間は宿題発表というよりも、あきおさんの個人レクチャーといった感じで<strong>一人一人の悩みに答えてくれるとても貴重な時間</strong>でした。</p>
<p>午前中の講義はここで終了。</p>
<h2>実機での動かし方</h2>
<p><img src="https://kotalab.com/wp-content/uploads/app-creator-2day_140429_05-300x300.jpg" alt="app-creator-2day_140429_05" width="300" height="300" class="alignnone size-medium wp-image-12681" /><br />
お昼ご飯にみんなでトマトハンバーグ弁当を食べ、午後は実機の動かし方からスタート！</p>
<p>2日目までに<a href="https://developer.apple.com/programs/ios/" target="_blank">iOS Developer Program</a>に登録を済ませておいて、当日はそこからXcodeにアプリを入れるまでの流れを説明してもらいました。</p>
<p>Xcodeで動かせるようになった時も感動しましたけど、自分のiPhoneに自分で作ったアプリが入って動かせることにすごく感動しました！</p>
<h2>ペアプログラミング</h2>
<p><img src="https://kotalab.com/wp-content/uploads/app-creator-2day_140429_03-546x364.jpg" alt="app-creator-2day_140429_03" width="546" height="364" class="alignnone size-large wp-image-12676" /><br />
ペアプログラミングは18期から取り入れた新しい試みだそうで、レベルが近い人同士でペアを組んで1つのアプリを一緒に作っていきます。</p>
<p>僕は隣の席のやすもさん(<a href="https://twitter.com/yasumoha" target="_blank">yasumoha</a>)とペアを組みました。<br><br />
ペアプログラミングで作るアプリは講義中に習ったものでも習わなかったものでもいいということで、僕たちは講義中には習わなかった地図を使ったアプリを作ることにしました。</p>
<p>地図を表示させるまではすぐできたんですが、地図にピンを立てることがなかなかできなくて悪戦苦闘。</p>
<p>あきおさんの助けがあってなんとかピンを立てるということまではできるようになりましたが、そこまででタイムオーバーでした。</p>
<h3>アプリ道場2日目が終わってみて</h3>
<p><img src="https://kotalab.com/wp-content/uploads/app-creator-2day_140429_02-546x364.jpg" alt="app-creator-2day_140429_02" width="546" height="364" class="alignnone size-large wp-image-12673" /><br />
午後の講義が終わると5回中4回が終わることになります。<br />
受講前は「5回もある」という感覚でしたが、あっという間に4回目までが終わってしまい「あと1回しかない」という感覚に変わってきました。</p>
<p>それから自分の中の意識が変わってきたのがわかりました。<br><br />
アプリ道場を受ける前は「ただなんとなくアプリ」を使ってたんですが、今は「このアプリはこういう部品を使ってるんだな」とか考えながら少し開発者目線でアプリを見るように変わってきました。</p>
<p>「自分が使ってるアプリがどういう仕組みになってるのか、自分でも同じような機能を作ってみるといいですよ」とキュレーターの田中さんに教えてもらったので、ゴールデンウィーク中に何かやってみようと思います！</p>
<h3>次回以降のアプリ道場の申込み方法</h3>
<p>行ってみたいなって思った人はこちらから応募できます！<br />
最新の講座の応募はこちらから！<br />
<a href="http://egg-is-world.com/app-creator-dojo-develop/" target="_blank">未経験者向けのiPhoneアプリ開発講座「アプリクリエイター道場 東京塾・大阪塾」</a><a href="http://b.hatena.ne.jp/entry/http://egg-is-world.com/app-creator-dojo-develop/" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://egg-is-world.com/app-creator-dojo-develop/" alt="" /></a></p>
<p>気になってるけど日程が合わないって人は、アプリ道場か講師のあきおさんのメルマガを読むといいらしいですよ！<br />
アプリクリエイター道場・自由大学(<a href="https://twitter.com/appcreatordojo" target="_blank">@AppCreatorDojo</a>)<br />
<a href="https://www.facebook.com/AppCreatorDojo" target="_blank">アプリクリエイター道場 - フェイスブックページ</a><br />
<a href="https://plus.google.com/105830589883151624005/posts" target="_blank">アプリクリエイター道場 - Google+</a><br />
<a href="http://www.mag2.com/m/0001625630.html" target="_blank">akio0911のメルマガ</a></p>
<h4 class="rel">関連記事</h4>
<p>[article include="11195"]<br />
[article include="12604"]<br />
[article include="13153"]</p>
<h4 class="aam">Amazonのオススメ！</h4>
<p>講師のアキオさんの本です！</p>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/4844333925/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51txMMyQ0xL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/4844333925/same-22/" rel="nofollow" target="_blank">iPhoneアプリ開発レシピ iOS 6対応</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">佐藤 伸吾 インプレスジャパン 2013-04-18    </div>
<div class="booklink-link2">
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/asin/4844333925/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/gp/search?keywords=iPhone%83A%83v%83%8A%8AJ%94%AD%83%8C%83V%83s%20iOS%206%91%CE%89%9E&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=same-22" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkrakuten"><a href="http://hb.afl.rakuten.co.jp/hgc/0fa7afc8.bbfc196a.0fa7afc9.d56c38f1/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12270629%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックス</a></div>
<div class="shoplinkseven"><a href="http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2967684&pid=882584357&vc_url=http%3A%2F%2Fwww.7netshopping.jp%2Fbooks%2Fsearch_result%2F%3Fctgy%3Dbooks%26code%3D4844333925" rel="nofollow" target="_blank" title="セブンネットショッピング" >7net</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<p>講義中に聞いたアキオさんのオススメ本</p>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/B00HY5BWOM/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/61-W%2BJdjKbL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/B00HY5BWOM/same-22/" rel="nofollow" target="_blank">現場で通用する力を身につける　iPhoneアプリ開発の教科書　【iOS 7＆Xcode 5対応】 (教科書シリーズ)[Kindle版]</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">森 巧尚 マイナビ 2014-01-25    </div>
<div class="booklink-link2">
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00HY5BWOM/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4839948291/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon[書籍版]</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/4797368276/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/41VdFg9YqsL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/4797368276/same-22/" rel="nofollow" target="_blank">詳解 Objective-C 2.0 第3版</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">荻原 剛志 ソフトバンククリエイティブ 2011-12-28    </div>
<div class="booklink-link2">
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/asin/4797368276/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00GJGOPDW/same-22/" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkrakuten"><a href="http://hb.afl.rakuten.co.jp/hgc/0fa7afc8.bbfc196a.0fa7afc9.d56c38f1/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11463002%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックス</a></div>
<div class="shoplinkseven"><a href="http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2967684&pid=882584357&vc_url=http%3A%2F%2Fwww.7netshopping.jp%2Fbooks%2Fsearch_result%2F%3Fctgy%3Dbooks%26code%3D4797368276" rel="nofollow" target="_blank" title="セブンネットショッピング" >7net</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
<div class="booklink-box">
<div class="booklink-image"><a href="http://www.amazon.co.jp/exec/obidos/asin/4863541058/same-22/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/510VnYna5LL._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="http://www.amazon.co.jp/exec/obidos/asin/4863541058/same-22/" rel="nofollow" target="_blank">改訂2版 Objective-C逆引きハンドブック</a>
<div class="booklink-powered-date">posted with <a href="http://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">林 晃 シーアンドアール研究所 2012-05-26    </div>
<div class="booklink-link2">
<div class="shoplinkamazon"><a href="http://www.amazon.co.jp/exec/obidos/asin/4863541058/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
<div class="shoplinkkindle"><a href="http://www.amazon.co.jp/gp/search?keywords=%89%FC%92%F92%94%C5%20Objective-C%8Bt%88%F8%82%AB%83n%83%93%83h%83u%83b%83N&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=same-22" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkrakuten"><a href="http://hb.afl.rakuten.co.jp/hgc/0fa7afc8.bbfc196a.0fa7afc9.d56c38f1/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11641530%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックス</a></div>
<div class="shoplinkseven"><a href="http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2967684&pid=882584357&vc_url=http%3A%2F%2Fwww.7netshopping.jp%2Fbooks%2Fsearch_result%2F%3Fctgy%3Dbooks%26code%3D4863541058" rel="nofollow" target="_blank" title="セブンネットショッピング" >7net</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
