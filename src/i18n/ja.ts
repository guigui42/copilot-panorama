import type { Translations } from './types';

export const ja: Translations = {
  locale: 'ja',
  seo: {
    title: '.github/ コンポーザブルスタック — Copilot Composable System',
    description: 'GitHub Copilot コンポーザブルシステムのインタラクティブなビジュアルガイド — 4つのレイヤーを探索：常時オンコンテキスト、オンデマンド機能、実行制御と自動化、ディストリビューション。',
  },
  ui: {
    heroTitle: 'コンポーザブルスタック',
    layerPrefix: 'レイヤー',
    insightsTitle: 'システムの実際の仕組み',
    insightsSubtitle: 'ほとんどのチームが見落とすアーキテクチャの重要なポイント',
    detailsLabel: '詳細',
    useCasesLabel: 'ユースケース',
    documentationLabel: 'ドキュメント',
    footerBuiltFor: 'GitHub Copilot ユーザーのために構築',
    footerDocsLink: 'コンポーザブルシステムの完全なドキュメント',
  },
  viz: {
    alwaysActive: '常時アクティブ',
    loadsAutomatically: '— すべての会話に自動的に読み込まれます',
    planning: 'プランニング',
    implementation: '実装',
    review: 'レビュー',
    descriptionRead: 'SKILL.md フロントマターから説明を読み取り',
    fullSkillInjected: '関連性がある場合、完全な SKILL.md がコンテキストに挿入されます',
    approveDeny: '承認 / 拒否',
    markdownToActions: '# Markdown → GitHub Actions YAML',
    pluginJson: 'plugin.json',
    marketplace: 'マーケットプレイス',
    gitRepo: 'Git リポジトリ',
    localPath: 'ローカルパス',
  },
  layers: {
    'always-on-context': {
      title: '常時オンコンテキスト',
      subtitle: 'すべての会話に自動的に読み込まれるパッシブメモリ',
    },
    'on-demand-capabilities': {
      title: 'オンデマンド機能',
      subtitle: '開発者が明示的に呼び出すか、モデルが選択する機能',
    },
    'enforcement-automation': {
      title: '実行制御と自動化',
      subtitle: '決定論的なガードレールと CI/CD レベルのオーケストレーション',
    },
    distribution: {
      title: 'ディストリビューション',
      subtitle: 'エージェントスタックをチームやリポジトリ間でパッケージ化して共有',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'すべてのプロンプトに自動的に適用されるパッシブメモリ',
      details:
        'Instructions は Copilot カスタマイズの基盤です。最初に読み込まれ、常時オンの' +
        'パッシブメモリとして機能します。リポジトリ全体の規約は ' +
        '`.github/copilot-instructions.md` に、パス固有の指示は ' +
        '`.github/instructions/NAME.instructions.md`（`applyTo` glob フロントマター付き）に' +
        '配置します。これらは助言的なものであり、モデルを導きますが、動作を決定論的に' +
        '強制するものではありません。',
      useCases: ['コーディング規約', 'フレームワークルール', 'リポジトリ規約'],
    },
    'prompt-files': {
      name: 'Prompt Files',
      description: 'スラッシュコマンドで手動呼び出し',
      details:
        'Prompt Files はスラッシュコマンドで呼び出す再利用可能なプロンプトテンプレートです' +
        '（例：`/security-review`、`/release-notes`）。チームが共通のプロンプトを標準化し、' +
        'すべての開発者が繰り返しタスクに対して一貫した高品質な出力を得られるようにします。',
      useCases: ['API レビュー', 'パフォーマンス監査', 'オンボーディングガイド'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: '独自のツールと MCP サーバーを持つ専門ペルソナ',
      details:
        'Custom Agents は YAML フロントマター付きの Markdown で定義された専門ペルソナです。' +
        '各プロファイルは `description`、`tools` リスト、オプションの `mcp-servers`、' +
        '`model` 設定を指定します。エージェントは `handoffs` プロパティで連鎖できます — ' +
        '例えば、プランニングエージェントが実装エージェントに引き継ぎ、さらにレビュー' +
        'エージェントに引き継ぎます。LLM はエージェントの説明を読んで、どれを' +
        '有効化するかを決定します。',
      useCases: ['セキュリティ監査', 'データベーススペシャリスト', 'API デザイナー'],
    },
    skills: {
      name: 'Skills',
      description: '指示、スクリプト、リソースの自己完結型フォルダ — 関連性がある場合に LLM が自動的に読み込み',
      details:
        'ユーザーが呼び出す他のオンデマンド機能とは異なり、Skills は LLM が自律的に選択します。' +
        '各スキルは `SKILL.md` ファイル（YAML フロントマターに名前と説明、Markdown 本文に指示）' +
        'とオプションのスクリプトやリソースを含むフォルダです。モデルはスキルの説明を読んで' +
        'どれを有効化するかを決定し、その時初めて完全な `SKILL.md` がコンテキストに挿入されます。' +
        'ユーザーアクションは不要です。プロジェクトスキルは `.github/skills/<name>/` に、' +
        '個人スキルは `~/.copilot/skills/<name>/` に配置します。',
      useCases: ['Terraform モジュール', 'K8s マニフェスト', 'オブザーバビリティスタック'],
    },
    hooks: {
      name: 'Hooks',
      description: '6つのライフサイクルイベントでの決定論的シェルコマンド',
      details:
        'Hooks は Copilot システムにおける唯一の決定論的プリミティブです。' +
        '6つのライフサイクルポイントで発火します：`sessionStart`、`sessionEnd`、' +
        '`userPromptSubmitted`、`preToolUse`、`postToolUse`、`errorOccurred`。' +
        '`preToolUse` フックはツール実行を事前に承認または拒否できます。' +
        'Hooks は `.github/hooks/` 内の JSON ファイルに `version: 1` で定義します。' +
        'Instructions（助言的）とは異なり、Hooks は強制的です。',
      useCases: ['ポリシーゲート', 'ファイルアクセス制御', '監査ログ'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'ガードレール付きで GitHub Actions で実行される AI コーディングエージェントによるリポジトリ自動化',
      details:
        'Agentic Workflows は YAML フロントマター（権限、safe-outputs、トリガー）付きの ' +
        'Markdown ファイルで、`gh aw` CLI 拡張機能を通じて GitHub Actions にコンパイルされます。' +
        '自然言語で自動化を定義 — 日次レポートのスケジュール、Issue のトリアージ、' +
        'CI 障害の分析、ドキュメントのメンテナンスなど。エージェントはデフォルトで' +
        '読み取り専用権限で実行され、書き込み操作には明示的な safe-output 承認が必要です。' +
        '実行はツールの許可リストとネットワーク分離でサンドボックス化されています。' +
        'GitHub Copilot、Claude、OpenAI Codex で動作します。',
      useCases: ['Issue トリアージ', 'CI 障害分析', '日次ステータスレポート'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'コーディングエージェントの環境を事前設定する GitHub Actions ワークフロー',
      details:
        'Copilot Setup Steps は `.github/workflows/copilot-setup-steps.yml` にある特別な ' +
        'GitHub Actions ワークフローで、コーディングエージェントが作業を開始する前に実行されます。' +
        'ツール、依存関係、ランナーの設定を決定論的にインストール・設定するために使用します — ' +
        'エージェントが試行錯誤なしですぐにビルド、テスト、リントできるようにします。' +
        'より大きなランナーへのアップグレード、Windows への切り替え、Git LFS の有効化、' +
        '`copilot` Actions 環境を通じた環境変数の設定も可能です。ワークフローには単一の ' +
        '`copilot-setup-steps` ジョブを含める必要があり、デフォルトブランチに存在する場合のみ有効です。',
      useCases: ['依存関係の事前インストール', 'より大きなランナー', '環境変数'],
    },
    plugins: {
      name: 'Plugins',
      description: 'エージェント、スキル、フック、MCP 設定をバンドルしたインストール可能なパッケージ',
      details:
        'Plugins は Copilot CLI を拡張する配布可能なパッケージです。各プラグインには ' +
        'Custom Agents、Skills、Hooks、MCP サーバー設定、LSP サーバー設定を含めることができます。' +
        '登録済みマーケットプレイス（`copilot-plugins` や `awesome-copilot` など）、' +
        'Git リポジトリから直接、またはローカルパスからインストールできます。' +
        'チーム固有のスタックを共有するための独自のマーケットプレイスを作成できます。',
      useCases: ['プロジェクト横断の再利用', 'チーム標準化', 'マーケットプレイス配布'],
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Instructions は最初に読み込まれます</strong> — 常時オンのパッシブメモリです。' +
        'すべてのプロンプトは、他の何かが発火する前にこれらを認識します。',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skills はオンデマンドで読み込まれます</strong> — Copilot はまず SKILL.md フロントマターの ' +
        '<code>description</code> のみを読み取ります。完全なファイルは、モデルがそのスキルが' +
        'プロンプトに関連すると判断した場合にのみ、エージェントのコンテキストに挿入されます。',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hooks は唯一の決定論的プリミティブです。</strong>Instructions は助言的です。' +
        'Hooks は強制的です — ツール実行を事前に承認または拒否できる <code>preToolUse</code> を含む' +
        '6つのライフサイクルイベントがあります。',
    },
    {
      icon: '🔀',
      content:
        '<strong>LLM がルーターです。</strong>別個のオーケストレーターは存在しません — ' +
        'モデルはインデックス化されたエージェントの説明とスキルのフロントマターを読んで、' +
        '何を有効化するかを決定します。だからこそ、良い説明を書くことが重要なのです。',
    },
  ],
};
