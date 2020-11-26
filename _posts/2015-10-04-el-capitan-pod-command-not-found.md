---
layout: post
status: publish
published: true
title: 'OS X 10.11 El Capitanで「pod: command not found」と出た時の対処法'
author:
  display_name: kotala_b
  email: info@kotalab.com
  url: ''
author_email: info@kotalab.com
wordpress_id: 14918
wordpress_url: https://kotalab.com/?p=14918
date: '2015-10-04 12:30:10 +0900'
date_gmt: '2015-10-04 03:30:10 +0900'
category:
- iOSアプリ開発
tags:
- アップデート
- CocoaPods
- El Capitan
comments: []
thumbnail: /wp-content/uploads/2015/10/el-capitan-pod-command-not-found_20151004-780x488.png
---
<p>CocoaPodsで入れたライブラリを更新しようとターミナルで</p>
<pre class="lang:default decode:true " >pod update</pre>
<p>と打ったら、「pod: command not found」と出てアップデートができなくなってしまいました。</p>
<p>つい何日か前は普通に使えてたのに。</p>
<p>ターミナルで</p>
<pre class="lang:default decode:true " >gem list</pre>
<p>と打つと、</p>
<pre class="lang:default decode:true " >cocoapods (0.38.2)
cocoapods-core (0.38.2)
cocoapods-downloader (0.9.3)
cocoapods-plugins (0.4.2)
cocoapods-stats (0.5.3)
cocoapods-trunk (0.6.4)
cocoapods-try (0.4.5)</pre>
<p>cocoapods関連のものがしっかり入っていました。</p>
<!--more-->
<h2>「pod: command not found」の原因</h2>
<p>「入ってるのになんでー？」と調べてみるとMacBook Proに入れている<strong>OSをEl Capitan(OS X 10.11)にアップデートしたことが原因</strong>ぽいことがわかりました。</p>
<blockquote><p>AppleはEl Capitanのインストーラーに新たに導入されたシステム整合性保護(SIP)機能"Rootless"に関する面白い機能を実装しているようです。<br />
「El Capitanのインストーラーには、古いOSからアップデートするさい、Appleが新たに導入するSIPで保護するディレクトリから非Apple製のファイルを探しだし&rdquo; QuarantineRoot&rdquo;というディレクトリに移動させる」<br />
via:<a href="http://applech2.com/archives/46429524.html" target="_blank">OS X 10.11 El Capitanのインストーラーには"/bin"や"/usr"などシステム保護ディレクトリにある非Apple製ファイルを移動してしまう機能があるので注意。</a></p>
</blockquote>
<p>また、Githubのissueに解決法があがっていることをSlackであきおさん(<a href="https://twitter.com/akio0911" target="_blank">@akio0911</a>)から教えてもらいました。</p>
<p><a href="https://github.com/CocoaPods/CocoaPods/issues/3970" target="_blank">Builds fails with OS X El Capitan 10.11 Beta (15A244d) | Xcode Version 7.0 beta 4 (7A165t) &middot; Issue #3970 &middot; CocoaPods/CocoaPods</a></p>
<h2>「cocoapods (0.38.2)」というのだけが入っていない状態</h2>
<p>ただ残念なことに、このissueにたどり着く前に</p>
<pre class="lang:default decode:true " >gem uninstall cocoapods
gem install cocoapods</pre>
<p>とかして、issueに書いてあることをやってもうまくいかない状態になっちゃってました。。</p>
<p>現状を把握するためにターミナルで</p>
<pre class="lang:default decode:true " >gem list</pre>
<p>と打つと、</p>
<pre class="lang:default decode:true " >cocoapods-core (0.38.2)
cocoapods-downloader (0.9.3)
cocoapods-plugins (0.4.2)
cocoapods-stats (0.5.3)
cocoapods-trunk (0.6.4)
cocoapods-try (0.4.5)</pre>
<p>となっていて、「cocoapods (0.38.2)」というのだけが入っていない状態でした。</p>
<h2>最終手段、全部消して入れ直す</h2>
<p>どうやって対処すればいいかなーとググってたらこんなページを発見。</p>
<blockquote><p>各プロジェクト内のPodfileさえ無事なら、podコマンドがどうなろうが影響ないはずなので、最終手段は全部やりなおし。<br />
via:<a href="http://gin0606.hatenablog.com/entry/2014/03/13/144653" target="_blank">CocoaPodsでError出た時の対処法 - 銀の人のメモ帳</a></p>
</blockquote>
<p>というわけで、全部やり直ししてみたら無事</p>
<pre class="lang:default decode:true " >pod update</pre>
<p>が使えるようになりました！</p>
<h2>「rm -rf」は恐ろしい呪文</h2>
<p>中途半端に残っていたのも一緒にアンインストールしたのですが、</p>
<pre class="lang:default decode:true " >rm -rf</pre>
<p>は<a href="http://www.imamura.biz/blog/srv/linux/2633" target="_blank">恐ろしい</a>呪文だと教えられていたので、<a href="http://gin0606.hatenablog.com/entry/2014/03/13/144653" target="_blank">リンク先のページ</a>に書いてあった次の2行</p>
<pre class="lang:default decode:true " >rm -rf ~/.cocoapods
rm -rf ~/Library/Caches/CocoaPods</pre>
<p>は実行しませんでした。</p>
<p>キャッシュフォルダっぽいところを確認しても何も入っていなかったので、実際にはこんな風に実行しました。</p>
<pre class="lang:default decode:true " >sudo gem uninstall cocoapods cocoapods-core cocoapods-downloader cocoapods-plugins cocoapods-stats cocoapods-trunk cocoapods-try
sudo gem install -n /usr/local/bin cocoapods
pod --version</pre>
<p>これで最後に「0.38.2」と表示されて無事CocoaPodsが使えるようになりました。</p>
<h2>さいごに</h2>
<p>El Capitanにアップデートした影響でCocoaPodsが使えなくなるとは思いませんでした。<br />
ただOSのバージョンアップは今まで使えてたものが突然使えなくなるようなことも起こりえるので、そんな問題が起きた時にどう対処するか考えることが大切な気がします。</p>
