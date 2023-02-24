---
layout: post
status: publish
published: true
title: PocketWiFiGL04PをSIMフリーのWiFiルーターとして使うための設定方法
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 13974
wordpress_url: https://kotalab.com/?p=13974
date: '2015-02-22 11:00:23 +0900'
date_gmt: '2015-02-22 02:00:23 +0900'
category:
- MVNO・格安SIM
tags:
- GL04P
- EMOBILE
- SIMフリー
- iPhone6Plus
- MVNO
- DMMmobile
ogImage:
  url:
comments: []
---
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223-780x438.jpg" alt="gl04p-simfree-setting_20150223" width="780" height="438" class="aligncenter size-large wp-image-13989" /><br />
EMOBILE（現ワイモバイル）のPocketWiFi、GL04Pの2年契約が終了。<br />
これまで使っていたGL04Pの回線を解約しました。</p>
<p>GL04Pの代わりにはiPhone6Plusのテザリングを使っていました。<br />
ただ、iPhone6Plusはauの回線でデータ通信量は毎月7GBまで。</p>
<p>ここ数ヶ月間はテザリングでしのいでいたんですが、1回線だけだとやっぱり心許ない。</p>
<p>今まで使っていたPocketWiFiはどうやらSIMフリーのWiFiルーターとして使えるそうなので、<br />
予備用の回線としてMVNOのSIMを契約して使ってみることにしました。</p>
<h2>GL04PをSIMフリーWiFiルーターとしてMVNO回線を使う方法</h2>
<p>GL04PではSIMを差し替えるだけではまだMVNOの回線は使えないので、APNという接続先の設定を行います。</p>
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223_01-780x346.png" alt="gl04p-simfree-setting_20150223_01" width="780" height="346" class="aligncenter size-large wp-image-13983" /><br />
GL04Pに接続した状態で<br />
http://pocketwifi.home/<br />
にアクセス</p>
<p>初期状態のログインIDとパスワードはどちらも「admin」となっています。</p>
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223_02-780x286.png" alt="gl04p-simfree-setting_20150223_02" width="780" height="286" class="aligncenter size-large wp-image-13982" /><br />
設定メニューのWAN設定から</p>
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223_03-780x417.png" alt="gl04p-simfree-setting_20150223_03" width="780" height="417" class="aligncenter size-large wp-image-13981" /><br />
プロファイル設定へと進みます。</p>
<p>プロファイル設定では接続先のAPNを設定します。</p>
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223_06-780x561.png" alt="gl04p-simfree-setting_20150223_06" width="780" height="561" class="aligncenter size-large wp-image-13986" /><br />
via:<a href="http://mvno.dmm.com/apn/index.html" target="_blank">APN（ネットワーク）設定マニュアル - DMM mobile</a><br />
今回はDMMmobileのSIMを利用する想定で、上記を参考にDMMmobileの設定をしました。</p>
<p>IIJmioやBIGLOBEなど別のSIMの場合はそれぞれ設定がことなります。</p>
<blockquote><p>名前：任意の名前を入力（例：IIJ）<br />
APN：「iijmio.jp」を入力<br />
ユーザー名：「mio@iij」を入力<br />
パスワード：「iij」を入力<br />
認証タイプ：「PAPまたはCHAP」を選択<br />
via:<a href="https://www.iijmio.jp/service/manual/hdd/nexus7/" target="_blank">IIJmio:Nexus 7（Android 4.x）</a></p></blockquote>
<blockquote><p>APN（接続先）：biglobe.jp<br />
ID（ユーザー名）：user<br />
パスワード：0000<br />
認証方式：CHAPまたはPAP<br />
PDP Type：IP（PPPは対応しておりません）<br />
via:<a href="http://support.biglobe.ne.jp/settei/setuzoku/lte/" target="_blank">「BIGLOBE LTE･3G」接続設定方法：BIGLOBE会員サポート</a></p></blockquote>
<p>上記会社以外の場合は「（SIM会社名） apn」とかで検索すると出てくると思うので、そちらを参考にしてみてください。</p>
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223_05-780x414.png" alt="gl04p-simfree-setting_20150223_05" width="780" height="414" class="aligncenter size-large wp-image-13979" /><br />
入力して保存ボタンを押すと、プロファイルリストに登録したプロファイル名が出てくるようになります。</p>
<p>ここまでできたらログアウト。</p>
<p><img src="/wp-content/uploads/2015/02/gl04p-simfree-setting_20150223_04-780x350.png" alt="gl04p-simfree-setting_20150223_04" width="780" height="350" class="aligncenter size-large wp-image-13980" /><br />
http://pocketwifi.home/<br />
にアクセスし左上のプロファイル変更というところから、先ほど登録したプロファイルを選択して適用ボタンを押します。</p>
<p>ここまででAPNの設定は完了。<br />
これでMVNOのSIMでネット接続ができるようになります。</p>
<p>もしできない場合は、<span class="b">プロファイル設定が間違っていないかもう1度確認</span>してみてください。</p>
<h2>DMMmobileのSIMをお試しでまずは1ヶ月</h2>
<p>僕が今回選んだのはDMMmobileのデータ通信専用SIMです。<br />
<span class="b">DMMmobileは月1GB660円からの契約がある</span>のでお試しで使ってみるにはちょうどいいと思いました。</p>
<p>3月いっぱいはDMMMobileをお試しで使っていこうと思います。<br />
<a href="http://px.a8.net/svt/ejp?a8mat=2HFRMY+7U7JU2+2GMK+OEZIP" target="_blank"><br />
<img border="0" width="300" height="300" alt="" src="http://www22.a8.net/svt/bgt?aid=150221482474&wid=004&eno=01&mid=s00000011486004101000&mc=1"></a><br />
<img border="0" width="1" height="1" src="http://www17.a8.net/0.gif?a8mat=2HFRMY+7U7JU2+2GMK+OEZIP" alt=""></p>
