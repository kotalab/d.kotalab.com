---
layout: post
status: publish
published: true
title: WindowsUpdateでエラー番号:「0x80244019」が出たときの対処法
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 6056
wordpress_url: https://kotalab.com/?p=6056
date: '2013-02-07 05:03:36 +0900'
date_gmt: '2013-02-06 20:03:36 +0900'
category:
- Mac
tags:
- アップデート
- Fusion5
- windows
- MacBook Air
ogImage:
  url:
comments: []
---
<p><img src="/wp-content/uploads/winxpsp3_130207_02-448x218.jpg" alt="winxpsp3_130207_02" width="448" height="218" class="alignnone size-large wp-image-6061" /><br />
WindowsはVMwareFusion5で起動しています。@kotala_bです。<br />
<a href="/macbook-air-winxp" target="_blank"><img  class="alignleft" src="/wp-content/uploads/fusion5_20121119-448x336.jpg" alt="MacBookAirにWindowsXPをインストール！これでTaskchuteを再開出来る！ | kotala's note" width="150" /></a><a href="/macbook-air-winxp" target="_blank">MacBookAirにWindowsXPをインストール！これでTaskchuteを再開出来る！ | kotala's note</a><br style="clear:both;" />今まで何故かWindowsXPSP2のまま使っていました。<br />
SP3にアップデートしようとWindowsUpdateを起動するとエラーが出て何もアップデートすることが出来ませんでした。<br />
出たエラー番号は「0x80244019」<br />
このエラーを無くし、<strong>Fusion5にWindowsXPSP3を入れることが出来た</strong>のでやり方をご紹介します。<br />
</p>
<!--more-->
<h2>Fusion内のWindowsXPをSP2からSP3へアップデートする方法</h2>
<h3>Fix itを使う</h3>
<p>エラー番号を検索したときにまず出て来たのが「Fix it」を使う方法です。<br />
しかし<strong>「Fix it」はSP3環境でないと使用出来ない</strong>ので僕の場合はダメでした。</p>
<h3>最新版のWindowsUpdateエージェントを使う</h3>
<p>▼最新版のWindowsUpdateエージェントの入手方法はこちらから<br />
<a href="http://support.microsoft.com/kb/949104/ja" target="_blank">最新版の Windows Update エージェントの入手方法</a><br />
ここを見たんですが、どうやればいいのか理解出来ずダメでした。</p>
<h3>WindowsXPSP3を直接ダウンロードする</h3>
<p>元々はWindowsXPSP3を入れたかったのでWindowsUpdateからではなく、直接ダウンロードする方法を試してみました。<br />
初めはWindowsXP内のIE6を使ってダウンロードしようとしたのですが、うまくいきませんでした。<br />
今度はOSX内のSafariで同じURLからダウンロードしたらうまくいきました。<br />
ダウンロードしたファイルをWindowsXPに移すと無事起動しWindowsXPSP3の適用が出来ました！<br />
<img src="/wp-content/uploads/winxpsp3_130207_01.jpg" alt="winxpsp3_130207_01" width="409" height="367" class="alignnone size-full wp-image-6060" /><br />
▼WindowsXPSP3のダウンロードはここから<br />
<a href="http://www.microsoft.com/ja-jp/download/details.aspx?id=24" target="_blank">Download: IT プロフェッショナルおよび開発者用 Windows XP Service Pack 3 ネットワーク インストール パッケージ - Microsoft Download Center - Download Details</a><br />
▼MacからWindowsを起動するならFusion5</p>
<div class="kaerebalink-box" style="text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;">
<div class="kaerebalink-image" style="float:left;margin:0 15px 10px 0;"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B009316BXW/same-22/ref=nosim/" rel="nofollow" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/51hrN%2BOGmPL._SL160_.jpg" style="border: none;" /></a></div>
<div class="kaerebalink-info" style="line-height:120%;/zoom: 1;overflow: hidden;">
<div class="kaerebalink-name" style="margin-bottom:10px;line-height:120%"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B009316BXW/same-22/ref=nosim/" rel="nofollow" target="_blank">VMware Fusion 5</a>
<div class="kaerebalink-powered-date" style="font-size:8pt;margin-top:5px;font-family:verdana;line-height:120%">posted with <a href="https://kaereba.com" target="_blank">カエレバ</a></div>
</div>
<div class="kaerebalink-detail" style="margin-bottom:5px;"> アクト・ツー 2012-09-28    </div>
<div class="kaerebalink-link1" style="margin-top:10px;">
<div class="shoplinkamazon" style="display:inline;margin-right:5px;background: url('https://img.yomereba.com/tam_k_01.gif') 0 0 no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;"><a href="https://www.amazon.co.jp/gp/search?keywords=VMware%20Fusion%205&__mk_ja_JP=%83J%83%5E%83J%83i&tag=same-22" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
</div>
</div>
<div class="booklink-footer" style="clear: left"></div>
</div>
<p>▼最新版のWindows8はこちら</p>
<div class="kaerebalink-box" style="text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;">
<div class="kaerebalink-image" style="float:left;margin:0 15px 10px 0;"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B009K1SLAQ/same-22/ref=nosim/" rel="nofollow" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/41zL2J%2BM0iL._SL160_.jpg" style="border: none;" /></a></div>
<div class="kaerebalink-info" style="line-height:120%;/zoom: 1;overflow: hidden;">
<div class="kaerebalink-name" style="margin-bottom:10px;line-height:120%"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B009K1SLAQ/same-22/ref=nosim/" rel="nofollow" target="_blank">Microsoft Windows 8 (DSP版) 64bit 日本語(新規インストール用)</a>
<div class="kaerebalink-powered-date" style="font-size:8pt;margin-top:5px;font-family:verdana;line-height:120%">posted with <a href="https://kaereba.com" target="_blank">カエレバ</a></div>
</div>
<div class="kaerebalink-detail" style="margin-bottom:5px;"> マイクロソフト(DSP) 2012-10-26    </div>
<div class="kaerebalink-link1" style="margin-top:10px;">
<div class="shoplinkamazon" style="display:inline;margin-right:5px;background: url('https://img.yomereba.com/tam_k_01.gif') 0 0 no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;"><a href="https://www.amazon.co.jp/gp/search?keywords=Microsoft%20Windows%208&__mk_ja_JP=%83J%83%5E%83J%83i&tag=same-22" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
</div>
</div>
<div class="booklink-footer" style="clear: left"></div>
</div>
<h2 class="rele">関連記事</h2>
<p><a href="/macbook-air-win" target="_blank">MacBookAirにWindowsをインストールするならどの方法？考えれば考えるほど先送りな現状 | kotala's note</a><br />
<a href="/macbook-air-winxp" target="_blank">MacBookAirにWindowsXPをインストール！これでTaskchuteを再開出来る！ | kotala's note</a><br />
<a href="/macbook-air-dual-diysplay" target="_blank">MacBookAirでもデュアルディスプレイにしてみたらかなり快適だった！一番よく使う画面は大きい方がいい！ | kotala's note</a><br />
<a href="/ipad-mini-photo-windows" target="_blank">iPadminiの写真をWindowsで見る方法！ | kotala's note</a></p>
