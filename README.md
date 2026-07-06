# to-do リストアプリ

個人利用・学習目的のシンプルな to-do リスト管理アプリ。

公開URL: https://naohiro5109.github.io/test-app-create/

開発計画は [docs/todo-app-plan.md](docs/todo-app-plan.md)、仕様は [docs/spec.md](docs/spec.md) を参照。

## 技術スタック

- React + TypeScript + Vite
- データ保存：ブラウザの localStorage（MVP時点）

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173/`（ポートが使用中の場合は表示されたアドレス）を開くとアプリが確認できます。

## スクリプト一覧

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発用サーバーを起動 |
| `npm run build` | 本番用に静的ファイルをビルド |
| `npm run preview` | ビルド結果をローカルで確認 |
| `npm run lint` | ESLintでコードをチェック |
| `npm run format` | Prettierでコードを整形 |
| `npm run test` | Vitestで単体テストを実行 |

## 開発状況

フェーズ4（デプロイ）まで完了。MVPは完成し、公開済み。次はフェーズ5（機能拡張）。詳細は [docs/todo-app-plan.md](docs/todo-app-plan.md) の開発ステップを参照。
