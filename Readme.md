## amplifyの始め方
awsのamplifyの公式ドキュメントを参考。

https://aws-amplify.github.io/docs/js/start


1. 下記のコマンドでawsの環境をセットアップ。ブラウザが開くのでそのまま設定。
セットアップしてる場合は以前設定した内容をそのまま利用することもできる。
```
amplify configure
```

2. 1で設定した内容をプロジェクトに設定する→amplifyというフォルダができる。
```
amplify init
```

3. 下記のコマンドで利用したいサービスをamplifyに登録する。

```
amplify add analytics
```

|サービス名|詳細内容|
|-|-|
|analitics| pinpointという解析サービスが利用できる。ユーザーの細かい動きを解析できる。|
|hosting|CloudFormation,CloudFrontなどを設定してホスティングできる。|
|auth|Cognitoを利用して認証サービスを利用できる。|
|api|AppSyncを利用したgraphQLやrestのAPIが利用できる。|

4. 設定した内容のファイルを書き出す。→src内にaws-exports.jsが生成される。
```
amplify push
```

5. 下記のコマンドでホスティングさせる。S3のアクセス制限を変更すると一般公開できる。
```
amplify publish
```

### amplify-vueについて
サインアップ、S3にファイルをアップロードするコンポーネントが用意されている。
