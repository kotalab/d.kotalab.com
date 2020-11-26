---
layout: post
status: publish
published: true
title: ブログのカスタマイズもXcodeを使うとスゴく捗る！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 11230
wordpress_url: https://kotalab.com/?p=11230
date: '2014-03-24 05:50:34 +0900'
date_gmt: '2014-03-23 20:50:34 +0900'
category:
- WordPressカスタマイズ
tags:
- Xcode
- 環境構築
comments:
- id: 3282
  author: "[備忘録]XcodeでiOSシミュレータでレスポンシブデザインの表示確認！そしてAndroidの場合のあれこれ。 | ultimate-ez.com"
  author_email: ''
  author_url: http://ultimate-ez.com/2014/03/25/3530/
  date: '2014-03-25 00:49:43 +0900'
  date_gmt: '2014-03-24 15:49:43 +0900'
  content: "[&#8230;] ブログのカスタマイズもXcodeを使うとスゴく捗る！XcodeでiOSシミュレータ &#8230; [&#8230;]"
- id: 3286
  author: "[備忘録]iOSシミュレータを単体で起動させる方法。 | ultimate-ez.com"
  author_email: ''
  author_url: http://ultimate-ez.com/2014/03/30/3583/
  date: '2014-03-30 14:27:16 +0900'
  date_gmt: '2014-03-30 05:27:16 +0900'
  content: "[&#8230;] こたらさんの記事を参考にさせていただいて、「レスポンシブデザインのiPhoneでの簡易チェックはXcodeのiOSシミュレータでやっちゃおう。Androidはエミュレータなのでちょっとめんどくさ
    [&#8230;]"
---
<p><img src="/wp-content/uploads/blog-custom-xcode_140323_01-546x306.jpg" alt="blog-custom-xcode_140323_01" width="546" height="306" class="alignnone size-large wp-image-11242" /><br />
先日参加した<a href="/blog-analytics-seminar" title="ブログをその場でアクセス解析！ #ブロガー向けアクセス解析セミナー に行ってきた！">ブロガー向けアクセス解析セミナー</a>で、「ブログにアクセスしてきた端末がどんなモノなのかを知る」という機会がありました。<br />
このブログのアクセスを見てみると、iPhoneやAndroidのようなモバイルからのアクセスが全体の半分以上でした。</p>
<p>そこでモバイルから見たときのデザインを変更することを重点的にしていくことにしました。<br />
この時、変えた内容を確認しながらの作業になります。<br />
手元にあるiPhone 5Sで確認しながらの作業もいいんですが、もうちょっとやりやすいやり方を<a href="http://akio0911.net/" target="_blank">拡張現実ライフ</a>のアキオさん(@akio0911)から教わりやってみました。</p>
<p>やってみたらそれがすごくよかったのでご紹介したいと思います。<br />
</p>
<!--more-->
<h2>Xcodeを使ってブログのデザインを確認する</h2>
<p>XcodeというiPhoneアプリ開発のためのアプリがあります。<br />
このアプリの中にiOSシミュレータという、Mac上でiOSデバイスを使ってシミュレートする機能がついています。</p>
<p><strong>iOSシミュレータを使って作業するようにしたら、ブログのカスタマイズがスゴく捗るようになりました！</strong></p>
<div class="applink">
<div class="applinkimg"><a href="https://itunes.apple.com/jp/app/xcode/id497799835?mt=12&uo=4&at=10l4yU" rel="nofollow" target="_blank"><img hspace="6" src="http://a1.mzstatic.com/us/r30/Purple/v4/df/2b/66/df2b66a3-508e-1173-74a9-f6c9b5bd5ad8/Xcode.512x512-75.png" width="80" /></a></div>
<div class="applinktext">
<div class="applinktitle"><strong><a href="https://itunes.apple.com/jp/app/xcode/id497799835?mt=12&uo=4&at=10l4yU" rel="nofollow" target="_blank">Xcode</a></strong></div>
<div class="applinkinfo">Apple</div>
<div class="applinkinfo">価格: 無料（記事公開時）</div>
<div class="applinkinfo">カテゴリ: 開発ツール</div>
</div>
<div class="clear"></div>
<div class="appstorelink"><a href="https://itunes.apple.com/jp/app/xcode/id497799835?mt=12&uo=4&at=10l4yU" rel="nofollow" target="_blank">AppStore</a></div>
</div>
<h2>XcodeでiOSシミュレータを起動するまでの流れ</h2>
<p>Xcodeを起動させてからiOSシミュレータを動かすまでの流れを紹介していきます。<br />
Xcodeを起動するとこんな画面が出てくるので「Create a new Xcode project」を選びます。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_02-546x320.png" alt="blog-custom-xcode_140323_02" width="546" height="320" class="alignnone size-large wp-image-11244" /><br />
「iOS Application」の中にある「Single View Apprication」を選んで「Next」を押します。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_03-546x369.png" alt="blog-custom-xcode_140323_03" width="546" height="369" class="alignnone size-large wp-image-11238" /><br />
「Choose options for your new project」という画面で必要項目を入力します。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_04-546x366.png" alt="blog-custom-xcode_140323_04" width="546" height="366" class="alignnone size-large wp-image-11237" /><br />
今回はiOSシミュレータを起動させることが目的なので、「Devices」がiPhoneになってれば他の入力内容は適当で構いません。</p>
<p>「NEXT」を押すと保存先を聞かれるので、保存先を指定します。</p>
<p>保存先を指定するとXcodeの画面が開きます。<br />
ここでは左上にある再生ボタンを押します。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_05.png" alt="blog-custom-xcode_140323_05" width="398" height="486" class="alignnone size-full wp-image-11240" /><br />
最初は時間がかかるかも知れませんが、少しするとiOSシミュレータが起動して真っ白の画面が表示されるはずです。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_06.png" alt="blog-custom-xcode_140323_06" width="320" height="590" class="alignnone size-full wp-image-11239" /><br />
真っ白の画面が出てきても焦らないで大丈夫！落ち着いて、画面上のメニューバの「ハードウェア」にある「ホーム」を押します。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_07-546x272.png" alt="blog-custom-xcode_140323_07" width="546" height="272" class="alignnone size-large wp-image-11236" /><br />
するとiPhoneぽい画面が表示されDockの位置にはSafariがあるはずです。<br />
<img src="/wp-content/uploads/blog-custom-xcode_140323_08.png" alt="blog-custom-xcode_140323_08" width="320" height="590" class="alignnone size-full wp-image-11243" /><br />
あとはSafariを起動して普段iPhoneでやるようにブログを表示させてあげれば完了になります！</p>
<h3>ブログカスタマイズがスゴく捗る！</h3>
<p><img src="/wp-content/uploads/blog-custom-xcode_140323_09-546x297.png" alt="blog-custom-xcode_140323_09" width="546" height="297" class="alignnone size-large wp-image-11241" /><br />
僕はこれまでずっとMacBook AirのSafariでユーザーエージェントを変更したり、手元のiPhoneから自分のブログがどう見えているか確認してました。<br />
MacBook Airからだと実際の見え方とは若干違うし、iPhoneからだといちいちロック解除してSafariを開かなきゃいけませんでした。</p>
<p><strong>iOSシミュレータを使えば、そんなわずらわしさも解消！<br />
しかもエディタと並べて置いておけてスゴく捗るようになりました！</strong><br />
教えてくれたアキオさん、ありがとうございました！</p>
<h4 class="rel">関連記事</h4>
<p>[article include="11093"]</p>
