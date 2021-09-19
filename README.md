# html-include-verification

静的HTMLファイルのインクルード検証

## 仕様

- javascriptによるヘッダー・フッターのインクルード機能
  - XMLHttpRequestによる通信を行い、includeファイルを取得する。
  - 取得したファイルをjavascriptからのDOM操作により対象のDOM要素に挿入する

## ローカル環境でのコーディング時の注意点

Chromeでローカルのファイルに対してXMLHttpRequestを使用すると、プロトコルfileであるため、ブラウザのクロスオリジン制約でエラーとなってしまい動作しない。

そのため、表示確認をしながらコーディングを行うために、ローカルサーバーを使用しhttp通信によるアクセスでのブラウザからの確認が必須となる。

この問題を解決するための手段としては、VSCodeをエディタとして使用し、拡張機能であるLive Server導入しローカルサーバーを使用することを推奨する。


