---
layout: post
status: publish
published: true
title: WordPressブログにプラグインなしでパンくずリストを表示させる方法
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 7449
wordpress_url: https://kotalab.com/?p=7449
date: '2013-06-13 21:35:14 +0900'
date_gmt: '2013-06-13 12:35:14 +0900'
category:
- WordPressカスタマイズ
tags:
- パンくずリスト
comments: []
---
<p><img src="/wp-content/uploads/breadcrumb_130613.jpg" alt="breadcrumb_130613" width="448" height="255" class="alignnone size-full wp-image-7464" /><br />
ブログにパンくずリストをつけました。こたら（@kotala_b）です。<br />
▼パンくずリストというのはこれ<br />
<img src="/wp-content/uploads/breadcrumb_130613_01.jpg" alt="breadcrumb_130613_01" width="448" height="62" class="alignnone size-full wp-image-7463" /><br />
今見ているページがブログ全体のどこなのかを示すナビゲーションのようなモノです。<br />
色々なwebページで見るパンくずリストですが、そういえばこのブログにはつけてないなと思ったので、パンくずリストをつけることにしました。<br />
</p>
<!--more-->
<h2>パンくずリストの作り方</h2>
<p>▼パンくずリストのコードはこちらで紹介されているものをそのまま使いました。<br />
<a href="http://ozpa-h4.com/2013/04/05/breadcrumb/" target="_blank"><img  class="alignleft" src="https://capture.heartrails.com/150x130?http://ozpa-h4.com/2013/04/05/breadcrumb/" alt="[Wordpress]ブログにパンくずリストつけてみた | OZPAの表4" width="150" height="130" /></a><a href="http://ozpa-h4.com/2013/04/05/breadcrumb/" target="_blank">[Wordpress]ブログにパンくずリストつけてみた | OZPAの表4</a><a href="https://b.hatena.ne.jp/entry/http://ozpa-h4.com/2013/04/05/breadcrumb/" target="_blank"><img border="0" src="https://b.hatena.ne.jp/entry/image/http://ozpa-h4.com/2013/04/05/breadcrumb/" alt="" /></a><br style="clear:both;" /><br />
<a href="http://webdesignrecipes.com/wordpress-breadcrumb-list-tips/" target="_blank"><img  class="alignleft" src="https://capture.heartrails.com/150x130?http://webdesignrecipes.com/wordpress-breadcrumb-list-tips/" alt="パンくずリストを作ってみるとWordPress でのサイト構築のコツがつかめるかもしれない（コード 付き）" width="150" height="130" /></a><a href="http://webdesignrecipes.com/wordpress-breadcrumb-list-tips/" target="_blank">パンくずリストを作ってみるとWordPress でのサイト構築のコツがつかめるかもしれない（コード 付き）</a><a href="https://b.hatena.ne.jp/entry/http://webdesignrecipes.com/wordpress-breadcrumb-list-tips/" target="_blank"><img border="0" src="https://b.hatena.ne.jp/entry/image/http://webdesignrecipes.com/wordpress-breadcrumb-list-tips/" alt="" /></a><br style="clear:both;" /><br />
▼「functions.php」に貼付けたコード<br />
[php]<br />
/*******************************<br />
パンくずリスト<br />
********************************/<br />
<?php<br />
function breadcrumb(){<br />
    global $post;<br />
    $str ='';<br />
    if(!is_home()&&!is_admin()){ /* !is_admin は管理ページ以外という条件分岐 */<br />
        $str.= '
<div id="breadcrumb" class="clearfix">';<br />
        $str.= '
<ul>';<br />
        $str.= '
<li><a href="'. home_url() .'/">HOME</a></li>
<p>';<br />
        $str.= '
<li>></li>
<p>';</p>
<p>        if(is_search()){<br />
            $str.='
<li>「'. get_search_query() .'」で検索した結果</li>
<p>';<br />
        } elseif(is_tag()){<br />
            $str.='
<li>タグ : '. single_tag_title( '' , false ). '</li>
<p>';<br />
        } elseif(is_404()){<br />
            $str.='
<li>404 Not found</li>
<p>';<br />
        } elseif(is_date()){<br />
            if(get_query_var('day') != 0){<br />
                $str.='
<li><a href="'. get_year_link(get_query_var('year')). '">' . get_query_var('year'). '年</a></li>
<p>';<br />
                $str.='
<li>></li>
<p>';<br />
                $str.='
<li><a href="'. get_month_link(get_query_var('year'), get_query_var('monthnum')). '">'. get_query_var('monthnum') .'月</a></li>
<p>';<br />
                $str.='
<li>></li>
<p>';<br />
                $str.='
<li>'. get_query_var('day'). '日</li>
<p>';<br />
            } elseif(get_query_var('monthnum') != 0){<br />
                $str.='
<li><a href="'. get_year_link(get_query_var('year')) .'">'. get_query_var('year') .'年</a></li>
<p>';<br />
                $str.='
<li>></li>
<p>';<br />
                $str.='
<li>'. get_query_var('monthnum'). '月</li>
<p>';<br />
            } else {<br />
                $str.='
<li>'. get_query_var('year') .'年</li>
<p>';<br />
            }<br />
        } elseif(is_category()) {<br />
            $cat = get_queried_object();<br />
            if($cat -> parent != 0){<br />
                $ancestors = array_reverse(get_ancestors( $cat -> cat_ID, 'category' ));<br />
                foreach($ancestors as $ancestor){<br />
                    $str.='
<li><a href="'. get_category_link($ancestor) .'">'. get_cat_name($ancestor) .'</a></li>
<p>';<br />
                    $str.='
<li>></li>
<p>';<br />
                }<br />
            }<br />
            $str.='
<li>'. $cat -> name . '</li>
<p>';<br />
        } elseif(is_author()){<br />
            $str .='
<li>投稿者 : '. get_the_author_meta('display_name', get_query_var('author')).'</li>
<p>';<br />
        } elseif(is_page()){<br />
            if($post -> post_parent != 0 ){<br />
                $ancestors = array_reverse(get_post_ancestors( $post->ID ));<br />
                foreach($ancestors as $ancestor){<br />
                    $str.='
<li><a href="'. get_permalink($ancestor).'">'. get_the_title($ancestor) .'</a></li>
<p>';<br />
                    $str.='
<li>></li>
<p>';<br />
                }<br />
            }<br />
            $str.= '
<li>'. $post -> post_title .'</li>
<p>';</p>
<p>        } elseif(is_attachment()){<br />
            if($post -> post_parent != 0 ){<br />
                $str.= '
<li><a href="'. get_permalink($post -> post_parent).'">'. get_the_title($post -> post_parent) .'</a></li>
<p>';<br />
                $str.='
<li>></li>
<p>';<br />
            }<br />
            $str.= '
<li>' . $post -> post_title . '</li>
<p>';<br />
        } elseif(is_single()){<br />
            $categories = get_the_category($post->ID);<br />
            $cat = $categories[0];<br />
            if($cat -> parent != 0){<br />
                $ancestors = array_reverse(get_ancestors( $cat -> cat_ID, 'category' ));<br />
                foreach($ancestors as $ancestor){<br />
                    $str.='
<li><a href="'. get_category_link($ancestor).'">'. get_cat_name($ancestor). '</a></li>
<p>';<br />
                    $str.='
<li>></li>
<p>';<br />
                }<br />
            }<br />
            $str.='
<li><a href="'. get_category_link($cat -> term_id). '">'. $cat-> cat_name . '</a></li>
<p>';<br />
            $str.='
<li>></li>
<p>';<br />
            $str.= '
<li>'. $post -> post_title .'</li>
<p>';<br />
        } else{<br />
            $str.='
<li>'. wp_title('', false) .'</li>
<p>';<br />
        }<br />
        $str.='</ul>
<p>';<br />
        $str.='</p></div>
<p>';<br />
    }<br />
    echo $str;<br />
}<br />
?><br />
[/php]<br />
▼パンくずリストの表示位置に貼付けるコード<br />
[php]</p>
<php breadcrumb(); >
[/php]<br />
そのままだと不格好なのでCSSを弄って調整<br />
▼CSSに付け加えたコード<br />
[css]<br />
#breadcrumb {<br />
    width: 480px;<br />
    padding: 0px 60px 0px 80px;<br />
    }<br />
#breadcrumb li{<br />
    float: left;<br />
    margin-right: 10px;<br />
    font-size: 0.9em;<br />
    }<br />
[/css]<br />
これで完成！</p>
<h2>最後に</h2>
<p>僕はWordPressやPHPに関する知識はほとんどありません。<br />
だからこそ検索して出てくるこういった記事は本当にありがたいです！<br />
@OZPAさん、@WebDesignRecipeさんありがとうございました！</p>
<h2 class="rele">関連記事</h2>
<p><a href="/wordpress-twitter" target="_blank"><img  class="alignleft" src="/wp-content/uploads/link_120708.jpg" alt="WordPressブログにプラグインなしでTwitterアカウント名のリンクを自動で貼る方法 | kotala's note" width="150" /></a><a href="/wordpress-twitter" target="_blank">WordPressブログにプラグインなしでTwitterアカウント名のリンクを自動で貼る方法 | kotala's note</a><br style="clear:both;" /><br />
<a href="/social-botton" target="_blank"><img  class="alignleft" src="/wp-content/uploads/social_120630_03.jpg" alt="Wordpressブログにプラグインなしでソーシャルボタンを設置する方法 | kotala's note" width="150" /></a><a href="/social-botton" target="_blank">Wordpressブログにプラグインなしでソーシャルボタンを設置する方法 | kotala's note</a><br style="clear:both;" /></p>
