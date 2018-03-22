---
layout: post
status: publish
published: true
title: キーボードの表示を最適化！iPhoneアプリをiPhone 6Plus用にする為のXcode設定
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 13514
wordpress_url: https://kotalab.com/?p=13514
date: '2014-09-23 16:36:13 +0900'
date_gmt: '2014-09-23 07:36:13 +0900'
category:
- iOSアプリ開発
tags:
- Xcode
- WebNote
- iPhone 6Plus
- 解像度最適化
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_04.png" alt="xcode-keyboard-size20140923_04" width="600" height="533" class="aligncenter size-full wp-image-13518" /><br />
ようやくiPhone 6Plusを買ってきました！<br />
iPhone 6Plusで真っ先に気になったのが自分のアプリのことだったりするんですが、大きい画面になったのに表示がそのまま拡大されてるだけで活かしきれてないなーと。</p>
<p>アプリによってはただ大きくなっただけじゃなくて、iPhone 6Plusにしっかり最適化されてたりするんですよね。<br />
どうやってやるんだろーって思って色々探したり試してたら「iPhone 6Plusのアプリ！」って感じになったのでその方法を書いてみたいと思います。<br />
<!--more--></p>
<h2>iPhone 6Plusで気になったところ</h2>
<p>僕が作ってるアプリ（Appleで審査中）WebNoteのスクリーンショットがこちら<br />
<img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_01-300x533.png" alt="xcode-keyboard-size20140923_01" width="300" height="533" class="aligncenter size-medium wp-image-13515" /><br />
Xcode5のときから作り始めてXcode6ではビルドしただけの状態です。<br />
iPhone 5SでもiPhone 6Plusでも上と同じ見た目の状態です。</p>
<p>他のアプリ（公式アプリ）はどんな感じかというとこんな感じ。<br />
<img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_02-300x533.png" alt="xcode-keyboard-size20140923_02" width="300" height="533" class="aligncenter size-medium wp-image-13517" /></p>
<p>キーボードをよーく見てみると分かると思うんですが、表示されてる大きさが若干違います。</p>
<p>横に並べてみるとこんな感じ。<br />
<img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_03.png" alt="xcode-keyboard-size20140923_03" width="600" height="533" class="aligncenter size-full wp-image-13519" /><br />
上のスクリーンショットは表示されてるアプリが違うだけで、左と右は同じiPhone 6Plusで撮影したものです。</p>
<p>一番分かりやすいのがキーボードの高さ。<br />
あとは一番上に時間とかが表示されているステータスバーとかも高さが違っていました。</p>
<p>公式アプリ以外はどうなのかなーと色々見てみたんですが、Twitter公式とかEvernote公式はしっかり対応してましたが、その他ほとんどのアプリで僕のアプリと同じような感じ。</p>
<p>うーん対応は難しいのかなーと思ったりもしたんですが、実にすごく簡単な方法で直すことができました！</p>
<h2>iPhone 6Plusの解像度に最適化させる方法</h2>
<p>結論から書くとこんな風にiPhone 6Plusに対応した表示サイズに変更できました！<br />
<img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_04.png" alt="xcode-keyboard-size20140923_04" width="600" height="533" class="aligncenter size-full wp-image-13518" /><br />
ちなみに直すのにかかった時間は2時間以下。<br />
Xcodeの中の設定を弄って色々試すのに1時間以上、それでもわからなくてqiitaで探すこと10分、実際にXcodeで直した時間は数分でした。</p>
<p>どうやって直すのかというと、<span class="b">LaunchScreenを追加するだけ！</span><br />
すごく簡単です。</p>
<p>XcodeのメニューでFile&rarr;Newと進んでUse InterfaceのLaunchScreenを追加します。<br />
<img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_05.png" alt="xcode-keyboard-size20140923_05" width="729" height="427" class="aligncenter size-full wp-image-13526" /></p>
<p>追加したらinfo.plistにLaunchScreenを設定してあげておしまい。<br />
<img src="https://kotalab.com/wp-content/uploads/xcode-keyboard-size20140923_06.png" alt="xcode-keyboard-size20140923_06" width="806" height="26" class="aligncenter size-full wp-image-13527" /></p>
<p>これだけでiPhone 6Plusでちゃんと表示されるようになりました。</p>
<p>参考：<a href="http://qiita.com/koogawa/items/ad1f998ebb68827009a6" target="_blank">iOS - 既存アプリをiPhone 6 Plusの解像度に最適化する - Qiita</a><a href="http://b.hatena.ne.jp/entry/http://qiita.com/koogawa/items/ad1f998ebb68827009a6" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://qiita.com/koogawa/items/ad1f998ebb68827009a6" alt="" /></a></p>
<h3>さすがXcode</h3>
<p><a href="http://www.landerblue.co.jp/blog/?p=14975" target="_blank">iPhone6 Plus用に適正化されているアプリとされてないアプリ | More Access! More Fun!</a><a href="http://b.hatena.ne.jp/entry/http://www.landerblue.co.jp/blog/?p=14975" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://www.landerblue.co.jp/blog/?p=14975" alt="" /></a></p>
<p>ついこの前上記のエントリーを見てたので、解像度ごとに作ったりしなきゃいけないのかなーとか思ったりもしてました。<br />
でも実際にやってみたら、さすがXcodeというかなんというかすごーく簡単。<br />
これでスペースが広く使えるようになるので、あとはアプリ内で使うアイコンを@3xに対応させて広くなった部分をどう変えるか！</p>
<p>キーボードが大きいままだと入力しづらいので、それだけでも対応して欲しいなあ</p>
<p><strong>対応していないアプリがまだまだ沢山あるので、よかったらこの記事をシェアしてください！<br />
きっとあなたが使ってるアプリもiPhone 6Plusに対応してくれるはず！</strong></p>
<h4 class="rel">おすすめ記事</h4>
<p>[article include="13480" type="custom"][article include="13379" type="custom"]</p>
<div class="clear"></div>
<h4 class="aam">Amazonのオススメ！</h4>
<div class="kaerebalink-box">
<div class="kaerebalink-image"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00JH83OPY/same-22/ref=nosim/" rel="nofollow" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51EnGnN6hjL._SL160_.jpg" style="border: none;" /></a></div>
<div class="kaerebalink-info">
<div class="kaerebalink-name"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00JH83OPY/same-22/ref=nosim/" rel="nofollow" target="_blank">iPhone 6 Plus ケース, Spigen&reg; [ スタンド機能 ] ウォレット S レザー 手帳型 ケース Apple iPhone (5.5) アイフォン 6 プラス カバー (国内正規品) (ブラック 【SGP10918】)</a>
<div class="kaerebalink-powered-date">posted with <a href="http://kaereba.com" rel="nofollow" target="_blank">カエレバ</a></div>
</div>
<div class="kaerebalink-detail"> Spigen     </div>
<div class="kaerebalink-link1"></div>
</div>
<div class="booklink-footer" style="clear: left"></div>
</div>
