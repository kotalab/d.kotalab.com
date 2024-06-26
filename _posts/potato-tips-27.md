---
layout: post
status: publish
published: true
title: 'potatotips #27 (iOS/Android開発Tips共有会)に参加してきたよ！'
author:
  display_name: kotala_b
  email: info@kotalab.com
  url: ''
author_email: info@kotalab.com
wordpress_id: 15008
wordpress_url: https://kotalab.com/?p=15008
date: '2016-03-20 11:38:14 +0900'
date_gmt: '2016-03-20 02:38:14 +0900'
category:
- iOSアプリ開発
tags:
- Swift
ogImage:
  url:
comments: []
---
<p>六本木のグリーさんで開催された<a href="https://connpass.com/event/27156/" class="autolink">potatotips #27</a>にiOSブログ枠として参加してきました！<br />
iOSの発表順にご紹介します！<br />
</p>
<!--more-->
<h2>NSNotification.userInfoを Swiftyに扱おう by <a href="https://twitter.com/takasek" title="takasek">@takasek</a></h2>
<p><script async class="speakerdeck-embed" data-id="d0d0c6fa298d40c8a0a08f308058ccd6" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script></p>
<p>NSNotificationのUserInfoはNSObjectをkeyにAnyObjectをvalueにするので、ValueTypeだと扱いにくい<br><br />
それなら簡単に使えるようにしちゃおう！<br><br />
というわけで<a href="https://github.com/takasek/Notifwift">Notifwift</a>作りました！</p>
<h2>Focus Engineに願いを by GoroOtsubo</h2>
<div class="video-container"><iframe width="420" height="315" src="https://www.youtube.com/embed/gTLXYg_0uEw" frameborder="0" allowfullscreen></iframe></div>
<p>AppleTV上のアプリはiOS開発と似ているが違う。<br><br />
AppleTVでは画面はテレビなのでiPhoneのように直接タップすることはできない。<br><br />
そこでリモコンを使ってボタンにフォーカスをしなければいけないが、フォーカスはFocusEngineというのが司っている。<br><br />
FocusEngineは神様、ただ従うしかない。</p>
<h2>iBeacon Tips by @SatoHikaruDev</h2>
<p><iframe src="//www.slideshare.net/slideshow/embed_code/key/6m0bUOjP1R6oTA" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe></p>
<div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/hikarusatoh/ibeacon-tipspotatotips27-59637949" title="iBeacon tips(potatotips27)" target="_blank">iBeacon tips(potatotips27)</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/hikarusatoh">Hikaru Satoh</a></strong> </div>
<h3>実装</h3>
<p>CLLocationManagerで監視を開始<br><br />
coreLocationで常に利用するにしないとbeaconは使えない<br><br />
beaconの領域IN/OUTを検知できるdelegate<br><br />
beaconを21種類以上登録するとエラーになる</p>
<h3>良いところ</h3>
<p>beacon領域内だと左下にアプリアイコンが表示される<br><br />
GPSより省電力</p>
<h3>悪いところ</h3>
<p>beaconを検知できない時間がある電源onから1〜5分程度<br><br />
OUTの検知が遅い</p>
<h2>tuple tips by Motoki Narita</h2>
<p><script async class="speakerdeck-embed" data-id="46c8d9cd829348cf9d0920014032fb79" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script></p>
<p>スコープが広いならstrcut,class<br><br />
strcut,classを定義するまでもないならタプル<br><br />
キーワードつきタプルがわかりやすいし使いやすい</p>
<p>2.2の進化で要素の比較ができる<br><br />
ただし要素数6まで</p>
<h2>SwiftでDependency Injection by @yoichitgy</h2>
<p><script async class="speakerdeck-embed" data-id="c2131318b3304ac98d318c578b664b0a" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script></p>
<h2>WebとiOSの連携方法は何がベストか？ 2016年版 by @yoneapp</h2>
<p><script async class="speakerdeck-embed" data-id="3fcaf7b15c7b4e14923226a7d21bd074" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script></p>
<p>標準ではスマートバナーという仕組みがAppleから提供されているが、safariでしか動かない。<br><br />
WebViewでも似たようなことがやりたい。<br><br />
Yahoo! ニュースが参考になった。</p>
<h2>App Submission Feedback by @tomzoh</h2>
<p><script async class="speakerdeck-embed" data-id="c3b0c48bca3e4b8ca425f1a06b77f309" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script></p>
<p>Apple審査基準のお話。<br><br />
謹製ドキュメントもある。<br><br />
<a href="https://developer.apple.com/app-store/review/rejections/" class="autolink">https://developer.apple.com/app-store/review/rejections/</a></p>
<p>スライドは72枚あるが、時間の都合で全部は紹介しきれないので一部だけ。</p>
<h3>3.8 レーティング</h3>
<p>エロはApple基準</p>
<h3>3.1 他プラットフォームへの言及</h3>
<p>アプリの中でAndroidと言うな<br><br />
お知らせとかでも使ってはいけない</p>
<h3>10.6 イケてない</h3>
<p>客観的にイケてない</p>
<h3>もっと情報が必要</h3>
<p>more information needed</p>
<p>レビュアーが見てもわからないものはユーザーもわからない<br><br />
しっかり説明しよう</p>
