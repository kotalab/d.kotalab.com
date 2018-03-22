---
layout: post
status: publish
published: true
title: Swiftで使えるライブラリ管理ツールCarthageの使い方
author:
  display_name: kotala_b
  email: info@kotalab.com
  url: ''
author_email: info@kotalab.com
wordpress_id: 14829
wordpress_url: https://kotalab.com/?p=14829
date: '2015-08-31 08:00:08 +0900'
date_gmt: '2015-08-30 23:00:08 +0900'
category:
- iOSアプリ開発
tags:
- Swift
- Carthage
- CocoaPods
comments: []
---
<p>8月25日にあったRealm meetup #6の時に<a href="https://www.wantedly.com" target="_blank">wantedly</a>のエンジニア杉上さん<a href="https://twitter.com/susieyy" target="_blank">@susieyy</a>の発表で「<strong>Swiftはコンパイルに時間がかかる、MacBook Pro2台体制で開発をしている</strong>」という話がありました。</p>
<p>コンパイルにかかる時間の対策の一つとして「<strong>必要なライブラリがCarthageに対応していればCocoaPodsではなくCarthageを使う</strong>」と。</p>
<p>CocoaPods自体最近使い始めたばかりでCarthageのことは全然知らなかったんですが、コンパイル時間が短くなるなら試してみようと思い早速使ってみることにしました。</p>
<!--more-->
<h2>Carthageの使い方</h2>
<p>Carthageを使って実際にライブラリを入れるまでの流れを<br />
モバイルデータベースの<a href="https://realm.io/jp/" target="_blank">Realm</a>を例に、新規プロジェクト作成からプロジェクト内でimportするところまでを紹介したいと思います。</p>
<h2>Carthageのインストール</h2>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_07.png" alt="Carthage install 20150831 07" width="780" height ="498" class="aligncenter size-large" /></p>
<p><a href="https://github.com/Carthage/Carthage" target="_blank">https://github.com/Carthage/Carthage</a></p>
<p>Carthageを使うにはまずパッケージのインストールをします。<br />
<a href="https://github.com/Carthage/Carthage/releases" target="_blank">https://github.com/Carthage/Carthage/releases</a>からCarthage.pkgというファイルをダウンロードしてきてインストール。</p>
<h3>新規プロジェクト作成</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_01.png" alt="Carthage install 20150831 01" width="780" height ="510" class="aligncenter size-large" /></p>
<p>「CarthageRealm」という名前でプロジェクトを作成しました。</p>
<p>ここで1度Xcodeを閉じます。</p>
<h3>Cartfile作成</h3>
<p>Carthageを使うのに必要な「Cartfile」という名前のファイルをプロジェクトが置いてあるフォルダ内に作成します。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_02.png" alt="Carthage install 20150831 02" width="682" height ="478" class="aligncenter size-large" /></p>
<p>Cartfileの中にはプロジェクトで使うフレームワークを明記します。<br />
今回はRealmなのでこのように書きました。</p>
<pre class="lang:default decode:true " >github "realm/realm-cocoa"</pre>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_03.png" alt="Carthage install 20150831 03" width="682" height ="478" class="aligncenter size-large" /></p>
<p>ターミナルで
<pre class="lang:default decode:true " >carthage update</pre>
<p>というコマンドを使い、しばらくするとログファイルが吐き出されてたら次に移ります。</p>
<h3>Embedded Binariesを追加</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_04.png" alt="Carthage install 20150831 04" width="780" height ="510" class="aligncenter size-large" /></p>
<p>今度はXcodeに戻って「RealmをEmbeddedBinaries」にRealmで使うライブラリを追加します。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_05.png" alt="Carthage install 20150831 05" width="780" height ="510" class="aligncenter size-large" /></p>
<p>「cartage update」がうまくいっていれば、プロジェクト配下の「Carthage」の中にRealmのライブラリが追加されています。</p>
<h3>RunScriptを追加</h3>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_06.png" alt="Carthage install 20150831 06" width="780" height ="510" class="aligncenter size-large" /></p>
<p><a href="http://www.openradar.me/radar?id=6409498411401216">App Storeへsubmitするときのバグ</a>を回避するために、RunScriptを追加します。</p>
<p>「Build Phases」タブに移動して、タブ内の左上にあるボタンを押して「Run Script」を追加します。</p>
<p>追加されたRun Scriptの内容を書き換えます。</p>
<pre class="lang:default decode:true " >/usr/local/bin/Carthage copy-frameworks</pre>
<p>
inputFilesにはRealmで使う「Realm.framework」と「RealmSwift.framework」が置いてあるパスを指定します。</p>
<pre class="lang:default decode:true " >$(SRCROOT)/Carthage/Build/iOS/Realm.framework
$(SRCROOT)/Carthage/Build/iOS/RealmSwift.framework</pre>
<p>
これで設定がすべて終わりました。</p>
<pre class="lang:default decode:true " >import RealmSwift</pre>
<p>と書けばRealmがSwiftで使えるようになります。</p>
<h2>CocoaPodsからCarthageに変えたらどれくらい早くなるのか？</h2>
<p>CocoaPodsとCarthageでどれくらいbuildにかかる時間が違うのか試してみました。</p>
<p>Xcode6.4から「Create a new Xcode project」で新規作成した「Single View Application」を使って</p>
<p>1つはCocoaPodsを使ってRealmを入れたプロジェクト。<br />
もう1つはCarthageを使ってRealmを入れたプロジェクト。</p>
<p>この2つのViewControllerに</p>
<pre class="lang:default decode:true " >import RealmSwift</pre>
<p>とだけ追加。<br />
プロジェクトをCleanしてからBuildしてみました。</p>
<p><img src="https://kotalab.com/wp-content/uploads/2015/08/carthage-install_20150831_08.png" alt="Carthage install 20150831 08" width="780" height ="510" class="aligncenter size-large" /></p>
<p>ビルド中のスクリーンショットでも撮ろうかと思ったら、Carthageの方はスクリーンショットを撮る余裕がないくらいの速さでビルドが完了しました。</p>
<p>一方のCocoaPodsからいれた方は「compiling 18 of 27 source files」とコンパイル中の様子をスクリーンショットにおさめることができました。</p>
<h2>さいごに</h2>
<p>まだCarthageでは使えないライブラリもあるみたいですが、使えるなら積極的に使っていこうと思います。</p>
<p>参考:<a href="https://realm.io/jp/news/swift-dependency-management-with-carthage/" target="_blank">シンプルなパッケージ管理ツール Carthage - Realm is a mobile database: a replacement for SQLite &amp; Core Data</a><br />
<a href="http://qiita.com/nori0620/items/b81ae171f0e82b0c2d8a" target="_blank">[Swift] CocoaPodsとCarthageの違い / ライブラリ管理 - Qiita</a><br />
<a href="https://github.com/Carthage/Carthage/blob/master/README.md" target="_blank">https://github.com/Carthage/Carthage/blob/master/README.md</a><br />
<a href="https://realm.io/jp/docs/swift/latest/" target="_blank">Swift Docs - Realm is a mobile database: a replacement for SQLite &amp; Core Data</a></p>
