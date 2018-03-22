---
layout: post
status: publish
published: true
title: モバイル対応が捗る！ブログのカスタマイズに便利な無料Macアプリ
author:
  display_name: kotala_b
  email: info@kotalab.com
  url: ''
author_email: info@kotalab.com
wordpress_id: 14781
wordpress_url: https://kotalab.com/?p=14781
date: '2015-07-19 12:41:14 +0900'
date_gmt: '2015-07-19 03:41:14 +0900'
category:
- ブログ
tags:
- iPhone
- Safari
- Macアプリ
- Xcode
- ショートカット
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_14.png" alt="Blog custom mac app 20150719 14" width="780" height ="441" class="aligncenter size-large" /></p>
<p>ブログの見た目をカスタマイズしたりテーマを作ったりするときに便利な無料のMacアプリをご紹介したいと思います。</p>
<p>その名はXcode！</p>
<p>知っている人は知っているかと思いますが、iPhoneやMacのアプリを作るときに使うあのアプリです。</p>
<p>iPhoneを持っていなくても、XcodeについているiOSシミュレータでiPhone6Plus・iPhone6・iPhone5S・iPhone4S・iPadAir・iPad2から見たときのデザインをチェックすることができます。</p>
<p>Xcodeを使ってデザインをチェックする方法をご紹介したいと思います。</p>
<!--more-->
<h2>Xcodeをインストール</h2>
<p>MacにXcodeが入っているのを前提に話を進めていきます。</p>
<p>Xcodeが入っていない方はこちらからどうぞ。無料です。</p>
<div class="applink">
<div class="applinkimg"><a href="https://itunes.apple.com/jp/app/xcode/id497799835?mt=12&uo=4&at=10l4yU" rel="nofollow" target="_blank"><img hspace="6" src="http://is5.mzstatic.com/image/pf/us/r30/Purple7/v4/64/f9/6c/64f96cb0-dbd8-fd9e-172c-d76b5fe233a5/Xcode.512x512-75.png" width="80" /></a></div>
<div class="applinktext">
<div class="applinktitle"><strong><a href="https://itunes.apple.com/jp/app/xcode/id497799835?mt=12&uo=4&at=10l4yU" rel="nofollow" target="_blank">Xcode</a></strong></div>
<div class="applinkinfo">Apple</div>
<div class="applinkinfo">価格: 無料（記事公開時）</div>
<div class="applinkinfo">カテゴリ: 開発ツール</div>
</div>
<div class="clear"></div>
<div class="appstorelink"><a href="https://itunes.apple.com/jp/app/xcode/id497799835?mt=12&uo=4&at=10l4yU" rel="nofollow" target="_blank">AppStore</a></div>
</div>
<div class="clear"></div>
<h2>Xcodeの起動からシミュレータで確認するまで</h2>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_01.png" alt="Blog custom mac app 20150719 01" width="780" height ="470" class="aligncenter size-large" /></p>
<p>まずはXcodeの初めての起動からシミュレーターを動かすところまで説明していきます。<br />
そんなの知ってるよって場合は<a href="#custom">シミュレータを使ってカスタマイズ</a>からお読みください。</p>
<p>Xcodeを開くと上のような画面が開きます。</p>
<p>赤く囲った「Create a new Xcode project」を選択します。</p>
<p>そうするとXcodeが開いて、何かを選んでNextを押してくれと言われます。</p>
<p>現在(2015/07/18)のXcodeのバージョンは6.4となっています。<br />
※バージョンが変わると若干内容が変わっている可能性もあるのでご注意ください。</p>
<h3>プロジェクトの新規作成</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_02.png" alt="Blog custom mac app 20150719 02" width="780" height ="552" class="aligncenter size-large" /></p>
<p>①iOSの下にあるApplicationを選んで<br />
②「1」の絵がかいてあるSingleViewApplicationを選んで<br />
③Nextボタンを押します。</p>
<h3>名前をつける</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_03.png" alt="Blog custom mac app 20150719 03" width="780" height ="552" class="aligncenter size-large" /></p>
<p>次の画面では作成するプロジェクトに名前をつけます。<br />
この先は半角英数字を使って名前をつけていきます。</p>
<p>今回はファイル名を「MobileViewCheck」としました。<br />
適当にわかりやすい名前で構いません。</p>
<p>ファイル名の下には自分の名前とブログのドメイン名をいれます。<br />
ドメイン名はブログがkotalab.comならcom.kotalabという風に後ろから入れていきます。<br />
ドメイン名がkotalab.co.jpならjp.co.kotalabです。</p>
<p>LanguageとDevicesを選んだらチェックボックスを外してNextボタンを押します。</p>
<p>するとファイルを保存する場所を聞かれるので、好きな場所に保存してください。</p>
<h3>シミュレータを起動させる</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_04.png" alt="Blog custom mac app 20150719 04" width="780" height ="552" class="aligncenter size-large" /></p>
<p>保存場所を決めたら上の画面のようにXcodeが開きます。</p>
<p>左上にある「iPhone6」と書かれた場所を選ぶと起動するシミュレータを選ぶことができます。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_05.png" alt="Blog custom mac app 20150719 05" width="225" height ="236" class="aligncenter size-large" /></p>
<p>iPad2からiPhone6までズラッと並んでいるので試したいデバイスを選んでください。<br />
今回ぼくはiPhone4Sを選びました。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_06.png" alt="Blog custom mac app 20150719 06" width="780" height ="552" class="aligncenter size-large" /></p>
<p>デバイスの左にある再生ボタンを押すと</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_07.png" alt="Blog custom mac app 20150719 07" width="300" height ="426" class="aligncenter size-large" /></p>
<p>シミュレータが立ち上がります。<br />
真っ白な画面が立ち上がりますが大丈夫です。</p>
<h3>Safariを開いてブログを見る</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_08.png" alt="Blog custom mac app 20150719 08" width="297" height ="299" class="aligncenter size-large" /></p>
<p>iOSシミュレータのメニューバーにあるHardwareからHomeを選んでください。<br />
ショートカットキーは「command + shift + H」です。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_09.png" alt="Blog custom mac app 20150719 09" width="300" height ="426" class="aligncenter size-large" /></p>
<p>Homeを押すと見慣れたiPhoneのホーム画面がでてきます。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_10.png" alt="Blog custom mac app 20150719 10" width="300" height ="426" class="aligncenter size-large" /></p>
<p>Safariを立ち上げて検索バーにブログのアドレスを入力したら</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_11.png" alt="Blog custom mac app 20150719 11" width="300" height ="434" class="aligncenter size-large" /></p>
<p>ブログがiPhone4Sのサイズで見られるようになりました。</p>
<h3>デバイスを変えて見た目をチェック</h3>
<p>シミュレータを起動させるときに選ぶデバイスを変えれば他のサイズも試すことができます。</p>
<p>Mac一台あればiPhoneを持っていなくても、複数のデバイス確認ができちゃいます！</p>
<p>デバイスの中でもiPadやiPhone6Plusは大きな解像度で表示されて見づらいかもしれません。<br />
シミュレータ起動中に「command + 1」〜「command + 5」までのショートカットキーでシミュレータのデバイスの大きさを変更できます。</p>
<p><a name="custom"></a></p>
<h2>シミュレータを使ってカスタマイズ</h2>
<p>ここまではシミュレータからブログを表示させるまでのご紹介でした。</p>
<p>ここからはぼくが実際にやっているシミュレータを使ったブログのカスタマイズ方法です。</p>
<h3>英語から日本語へ</h3>
<p>このままではシミュレータの言語設定が英語のままなので、ブログで使っているフォントがうまく表示されないかもしれません。<br />
まずはシミュレータのホーム画面に戻ってSettingアプリで言語を日本語に設定します。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_12.png" alt="Blog custom mac app 20150719 12" width="300" height ="426" class="aligncenter size-large" /></p>
<p>Settingアプリ&rarr;General&rarr;Language&Regionと進んで、iPhone Languageを日本語に変更します。<br />
言語設定を変更するとシミュレータが落ちてしまうので、Xcodeの再生ボタンを押してシミュレータを再起動します。</p>
<h3>シミュレータとSafariを組み合わせる</h3>
<p>シミュレータだけではあくまでも見た目の確認しかできません。</p>
<p><strong>iOSシミュレータはMacのSafariと組み合わせて使うこともできます。</strong><br />
MacのSafariでWebインスペクタを表示させるのと同じように、シミュレータで開いているページをWebインスペクタに表示させることができるのです。</p>
<h3>Webインスペクタに表示させる</h3>
<p>まずはシミュレータのSafariが起動している状態で、MacのSafariを起動します。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_13.png" alt="Blog custom mac app 20150719 13" width="300" height ="360" class="aligncenter size-large" /></p>
<p>この状態でメニューバーにある開発を開くと、iOSシミュレータという項目が出てくるのでそれを選びます。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/07/blog-custom-mac-app_20150719_14.png" alt="Blog custom mac app 20150719 14" width="780" height ="441" class="aligncenter size-large" /></p>
<p>するとシミュレータで開いているWebページがWebインスペクタで開かれます。</p>
<p>MacのSafariで使うのと同じようにシミュレータのSafariでもWebインスペクタが使えます。</p>
<h2>ユーザーエージェント変更とシミュレータの違い</h2>
<p>MacのSafariではユーザーエージェントを変更することで、iOSのSafariから開いたような画面を表示させることができます。<br />
ユーザーエージェントの変更でも似たようなことができるのですが、MacのSafariの画面サイズを調整しても実際のiPhoneで見たときとは若干違います。</p>
<p><strong>より実際の見た目に近いのはシミュレータです。</strong></p>
<p>iPhoneだけでも4Sから6Plusまで解像度が違うのでそれぞれのデバイスから見たときの見た目を調整するのは大変です。</p>
<p>そんなときに便利なのがXcodeで使えるシミュレータとMacのSafariで使えるWebインスペクタの組み合わせです。</p>
<h2>さいごに</h2>
<p>アプリ開発者ならともかく、Xcodeを使うことってあんまりないと思います。<br />
Xcodeを使うとブログをカスタマイズするときにすごく便利なのでよかったら使ってみてください。 </p>
<p>[dailynew]<br />
金曜<br />
・AppleMusic はじめてのAI<br />
土曜<br />
・AppleMusic はじめてのBackstreet Boys<br />
・LUSH表参道店</p>
<p><a href="https://kotalab.com/lets-start-1day1new" title="昨日の新しい体験とは？">昨日の新しい体験とは？</a></p>
<div class="clear"></div>
