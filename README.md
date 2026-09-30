# 冷蔵庫レスキュー｜あるもので今日のごはん

Studio Soraの参加型Web作品。HTML / CSS / JavaScript、外部API・ビルド不要。

## Webファイル
index.html、style.css、app.js、recipes.js、assets/*.jpg、.nojekyll。
index.htmlをブラウザで開くと動作します。GitHub Pages公開時はこれらをリポジトリ直下へ配置します。

## レシピ追加
recipes.jsのwindow.RECIPESに、id / title / time / image / ingredients / pantry / steps / pointを登録します。
ingredientsは判定対象。pantryは塩・こしょう・醤油・砂糖・みりん・酒・油・水のみ。
材料は2人分。ごはん・レモン汁・しょうが・バター・ポン酢・みそ・マヨネーズは選択が必要です。

## 判定
選択食材が少なくとも1つ一致し、不足食材が0または1個の料理を表示します。
不足なしを優先し、その中で一致食材数、一致率、調理時間の順に並べます。

## 画像
全36品の写真は料理ごとに生成したイメージです。別料理への使い回しはありません。

## 公開状況
GitHub Pagesは未公開。公開URLは未確定。Wix自動登録は未実行。
manifest.jsonはready:falseです。公開・公開URLの動作確認後にのみwebUrlを設定し、最後にready:trueへ変更します。
