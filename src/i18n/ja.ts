import type { Translations } from './types';

export const ja: Translations = {
  locale: 'ja',
  seo: {
    title: 'Copilot Panorama — Copilot カスタマイズスタック',
    description: 'GitHub Copilot のコンポーザブルシステムをインタラクティブに可視化 — 常時適用コンテキスト、オンデマンド機能、制御と自動化、配布の4層を解説。',
  },
  ui: {
    heroTitle: 'Copilot カスタマイズスタック',
    layerPrefix: 'レイヤー',
    insightsTitle: 'システムが実際にどう動くか',
    insightsSubtitle: 'ほとんどのチームが見落としがちな主要なアーキテクチャの要点',
    detailsLabel: '詳細',
    useCasesLabel: 'ユースケース',
    documentationLabel: 'ドキュメント',
    communityExamplesLabel: 'コミュニティの例を見る',
    learningHubLabel: 'Learning Hub ガイド',
    footerBuiltFor: 'GitHub Copilot ユーザーのために作成',
    footerDocsLink: 'コンポーザブルシステムの完全なドキュメント',
    pageStack: 'カスタマイズ',
    pageTools: 'Surfaces',
    shareLink: 'リンクを共有',
    shareCopied: 'コピーしました！',
  },
  viz: {
    alwaysActive: '対応スコープ内で自動適用',
    loadsAutomatically: '対応スコープ内で',
    planning: '計画',
    implementation: '実装',
    review: 'レビュー',
    descriptionRead: 'Copilot が skill のメタデータを読み取る',
    fullSkillInjected: 'モデルが一致する skill を自動的に読み込む',
    approveDeny: '承認 / 拒否 / 変更',

    pluginJson: 'plugin.json',
    agentsDir: 'agents/',
    skillsDir: 'skills/',
    hooksJson: 'hooks.json',
    mcpJson: '.mcp.json',
    lspJson: 'lsp.json',
    repositorySettings: 'リポジトリの MCP 設定',
    ideConfig: 'mcp.json (IDE)',
    vsCode: 'VS Code',
    copilotCli: 'Copilot CLI',
    copilotApp: 'Copilot アプリ',
    marketplace: 'Marketplace',
    gitRepo: 'Git リポジトリ',
    localPath: 'ローカルパス',
  },
  layers: {
    'always-on-context': {
      title: '常時適用コンテキスト',
      subtitle: '対応スコープ内で自動的に適用されるリポジトリのガイドライン',
    },
    'on-demand-capabilities': {
      title: 'オンデマンド機能',
      subtitle: '開発者が明示的に呼び出すか、モデルが選択する機能',
    },
    'enforcement-automation': {
      title: '制御と自動化',
      subtitle: '決定論的なガードレールと CI/CD レベルのオーケストレーション',
    },
    distribution: {
      title: '配布',
      subtitle: 'エージェントスタックをチームやリポジトリ間でパッケージ化・共有',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'Copilot の応答を自動的に形作るリポジトリガイドライン',
      details:
        'リポジトリ全体のガイドラインには `.github/copilot-instructions.md` を、パスに ' +
        '一致する指示には `applyTo` glob 付きの ' +
        '`.github/instructions/NAME.instructions.md` を使用します。エージェントは最も近い ' +
        '`AGENTS.md` も参照でき、ルートの `CLAUDE.md` や `GEMINI.md` は特定のサーフェスで ' +
        'サポートされます。個人およびOrganizationの指示は、リポジトリファイルの外でより広い ' +
        'デフォルトを提供します。サポート状況は Copilot のサーフェスによって異なり、指示は ' +
        '動作を強制するのではなく導くものです。',
      useCases: ['コーディング規約', 'フレームワークのルール', 'リポジトリの慣例'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: 'スコープ限定の指示、ツール、隔離されたコンテキストを持つスペシャリスト',
      details:
        'リポジトリのエージェントは `.github/agents/AGENT-NAME.md` で定義します。各エージェント ' +
        'は専門化された指示、ツール制限、MCP コンテキストを持てます。Organization および ' +
        'Enterprise のエージェントは `.github` または `.github-private` リポジトリから配布 ' +
        'できます。Copilot はスコープ限定タスクを隔離されたコンテキストのサブエージェントに ' +
        '委任することもあります。モデルやハンドオフなどのフィールドはサーフェスによって異なる ' +
        'ため、最新の機能マトリクスを参照してください。',
      useCases: ['セキュリティ監査者', 'データベース専門家', 'API デザイナー'],
    },
    skills: {
      name: 'Skills',
      description: '関連性がある場合に Copilot が自動で読み込む、再利用可能な指示・スクリプト・リソース',
      details:
        '各 skill は `SKILL.md` とオプションのスクリプト・リソースを含むフォルダです。専門性が ' +
        'タスクに一致すると Copilot が skill を自動選択し、ユーザーが明示的に指定することも ' +
        'できます。プロジェクトの skill は ' +
        '`.github/skills/`、`.agents/skills/`、`.claude/skills/` に保存し、個人の skill は ' +
        '`~/.copilot/skills/` や `~/.agents/skills/` に置けます。サポート状況はサーフェス ' +
        'によって異なります。',
      useCases: ['Terraform モジュール', 'K8s マニフェスト', 'オブザーバビリティスタック'],
    },
    mcp: {
      name: 'MCP Servers',
      description: 'Model Context Protocol で接続する外部ツールとライブデータ',
      details:
        'Copilot のクラウドエージェントと Copilot コードレビュー向けに、リポジトリの MCP ' +
        'サーバーは GitHub 上のリポジトリ設定で構成します。IDE クライアントは独自の ' +
        '`mcp.json` 設定を使用し、CLI とアプリはそれぞれ独自のクライアント設定を公開 ' +
        'します。MCP のサポート、ポリシー、設定の場所はサーフェスによって異なるため、ワーク ' +
        'フローに必要なサーバーとツールセットのみを有効にしてください。',
      useCases: ['Issue/PR 自動化', 'ブラウザテスト', '社内データ'],
      docLabel: 'リポジトリの MCP サーバーを設定',
      altDocLabel: 'MCP について',
    },
    hooks: {
      name: 'Hooks',
      description: 'エージェントのライフサイクルの文書化されたポイントで実行されるコマンド',
      details:
        'リポジトリの hook は `version: 1` の `.github/hooks/NAME.json` で定義します。イベント ' +
        'はセッション、プロンプト、ツール、権限、圧縮、サブエージェント、エージェントの停止に ' +
        'わたります。`preToolUse` はツール呼び出しを許可・拒否・変更できます。イベントサポート ' +
        'は Copilot CLI とクラウドエージェントで異なります。hook の失敗は通常実行を継続 ' +
        'させますが、`preToolUse` のエラーは fail-closed、タイムアウトは fail-open です。',
      useCases: ['コンプライアンスゲート', 'ファイルアクセス制御', '監査ログ'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'AI コーディングエージェント駆動のリポジトリ自動化を GitHub Actions 上でガードレール付きで実行',
      details:
        'エージェント型ワークフローは、CLI 拡張機能 `gh aw` によって GitHub Actions にコンパイル ' +
        'される YAML フロントマター（権限、safe-outputs、トリガー）付きの Markdown ファイル ' +
        'です。自然言語で自動化を定義します — 日次レポートのスケジュール、issue のトリアージ、' +
        'CI 失敗の分析、ドキュメントの維持などです。エージェントはデフォルトで読み取り専用の ' +
        '権限で実行され、書き込み操作には明示的な safe-output 承認が必要です。実行はツール ' +
        'のホワイトリストとネットワーク分離によりサンドボックス化されます。GitHub Copilot、' +
        'Claude、OpenAI Codex で動作します。',
      useCases: ['Issue トリアージ', 'CI 失敗分析', '日次レポート'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'クラウドエージェントの環境を事前設定する GitHub Actions ワークフロー',
      details:
        'Copilot Setup Steps は、`.github/workflows/copilot-setup-steps.yml` にある特別な ' +
        'GitHub Actions ワークフローで、クラウドエージェントが作業を開始する前に実行されます。' +
        'ツールや依存関係を決定論的にインストールしたり、ランナーを構成したりするために ' +
        '使用します — これにより、エージェントは試行錯誤による探索なしに、すぐにビルド・ ' +
        'テスト・リントを実行できます。より大きなランナーへのアップグレード、Windows への ' +
        '切り替え、Git LFS の有効化、または `copilot` の Actions 環境を通じた環境変数の設定も ' +
        '可能です。ワークフローには単一の `copilot-setup-steps` ジョブが必要で、デフォルト ' +
        'ブランチに存在する場合にのみ有効です。',
      useCases: ['依存関係の事前インストール', 'より大きなランナー', '環境変数'],
    },
    plugins: {
      name: 'GitHub Copilot Plugins',
      description: 'エージェント、skill、hook、MCP、LSP 統合のためのインストール可能パッケージ',
      details:
        'ネイティブの Copilot プラグインは `plugin.json` から始まり、`agents/`、`skills/`、' +
        '`hooks.json`、`.mcp.json`、`lsp.json` を含めることができます。プラグインは、Copilot ' +
        'クライアントや marketplace を通じてインストールできるように機能をバンドルします。 ' +
        '別途、Agent Plugins 1.0 は移植可能なパッケージのためのマルチクライアントのオープン ' +
        '標準を定義しており、GitHub のネイティブプラグイン構造を置き換えるのではなく補完します。',
      useCases: ['再利用可能なエージェントパッケージ', 'チームの標準化', 'Marketplace での配布'],
      docLabel: 'Copilot プラグインについて',
      altDocLabel: 'Agent Plugins 1.0 標準',
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>指示はスコープ内で自動的に適用されます。</strong> リポジトリ全体、パス固有、' +
        'エージェント固有、個人、Organization のガイドラインはそれぞれ異なるスコープに適用 ' +
        'されます。',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skill はオンデマンドで専門性をもたらします。</strong> skill の指示とリソースが ' +
        '現在のタスクに一致すると、Copilot はその skill を選択できます。',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hook はライフサイクルの各ポイントでコマンドを実行します。</strong> ' +
        '<code>preToolUse</code> はツール呼び出しを許可・拒否・変更できます。サポートされる ' +
        'イベントと失敗時の挙動はサーフェスによって異なります。',
    },
    {
      icon: '🔀',
      content:
        '<strong>Copilot は関連する機能を選択できます。</strong> エージェント、skill、ツールの ' +
        '明確な説明は、Copilot がタスクに適した専門性を選ぶ助けになります。',
    },
  ],

  /* ── Tools ページ ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Surfaces',
    description: 'IDE、スタンドアロンアプリ、GitHub クラウドにおける GitHub Copilot をインタラクティブに可視化 — Copilot CLI、クラウドエージェント、コードレビュー、サードパーティエージェント、Slack、Teams を含む。',
  },
  toolsUi: {
    heroTitle: 'Copilot Surfaces',
    insightsTitle: 'ほとんどの開発者が見落とす主要な違い',
    insightsSubtitle: '3層にわたるアーキテクチャの要点',
    footerBuiltFor: 'GitHub Copilot ユーザーのために作成',
    footerDocsLink: 'Copilot の機能に関する完全なドキュメント',
  },
  toolsViz: {
    interactive: 'インタラクティブ',
    programmatic: 'プログラマティック',
    ghostText: 'ゴーストテキスト',
    tabToAccept: 'Tab で確定',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: '分析',
    edit: '編集',
    run: '実行',
    fix: '修正',
    local: 'ローカル',
    cloud: 'クラウド',
    issueAssigned: 'Issue が割り当て',
    agentCodes: 'エージェントがコーディング',
    prCreated: 'PR 作成',
    securityChecks: 'セキュリティチェック',
    addReviewer: 'レビュアーを追加',
    reviewComments: 'レビューコメント',
    suggestedFixes: '修正提案',
    selectAgent: 'エージェントを選択',
    askAnything: '何でも質問',
    repoContext: 'リポジトリコンテキスト',
    webSearch: 'Web 検索',
    openSession: 'セッションを開く',
    reviewDiff: '差分をレビュー',
    openPr: 'PR を開く',
    inbox: '受信箱',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'ワークフロー',
    slack: 'Slack',
    teams: 'Teams',
    sharedSession: '共有エージェントセッション',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'スタンドアロンアプリ',
      subtitle: 'エージェント型開発に特化したデスクトップ／ターミナルアプリケーション',
    },
    ide: {
      title: 'IDE',
      subtitle: 'エディタ内のインラインサジェスト、チャット、自律的な編集、サードパーティエージェント',
    },
    cloud: {
      title: 'クラウド',
      subtitle: 'GitHub プラットフォーム上の自律エージェント — コーディング、レビュー、サードパーティ',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      path: 'ターミナルエージェント',
      description: 'コード、シェル、GitHub ワークフローのためのターミナル内エージェント',
      details:
        '`copilot` でインタラクティブセッションを開始するか、`copilot -p` で単一のプロンプトを ' +
        '渡します。CLI はファイルを編集し、承認されたシェルコマンドを実行し、GitHub の issue、' +
        'pull request、Actions を扱えます。プランモードは変更前に作業のスコープを定めます。' +
        '`/context`、`/compact`、自動圧縮が長いセッションを管理します。ローカルおよびクラウド ' +
        'のサンドボックスはパブリックプレビュー中です。CLI は instructions、agents、skills、' +
        'hooks、MCP、plugins、Copilot Memory（パブリックプレビュー）をサポートします。',
      useCases: ['Issue から PR まで', 'レガシーコードの近代化', 'Fleet による並列実行', 'バックログのトリアージと計画', 'エディタ非依存の開発', '自動化'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      path: 'エージェント用デスクトップワークスペース',
      description: '並行するエージェントセッションと定期的な自動化のためのデスクトップワークスペース',
      details:
        '複数のリポジトリにまたがる複数の隔離されたエージェントセッションを実行し、issue と ' +
        'pull request を管理し、オンデマンドまたはスケジュールで実行される自動化を保存 ' +
        'します。リポジトリセッションは専用の worktree を使用し、クラウドワークスペースは ' +
        'パブリックプレビュー中です。アプリは instructions、skills、MCP サーバー、custom ' +
        'agents、plugins、canvas 拡張機能をサポートします。Enterprise が管理する設定が、' +
        'サポートされるアクションと統合を統制する場合があります。',
      useCases: ['エージェント型受信箱とトリアージ', 'Agentic Merge（ラストマイル）', 'マルチセッション並行作業', '繰り返し可能なワークフロー', '隣接ロールとのコラボレーション', 'クロスリポジトリのオーケストレーション'],
    },
    autocomplete: {
      name: 'インライン提案',
      path: 'IDE のインラインサジェスト',
      description: '入力中にインラインで表示されるゴーストテキストのコードサジェスト',
      details:
        'Copilot は現在のエディタコンテキストから入力中にコードを提案します。サジェストは ' +
        '1行から関数全体まで及ぶことがあります。Next Edit Suggestions は対応エディタで次の ' +
        '編集位置を予測します。キーボードショートカットと機能の可用性は IDE によって異なります。',
      useCases: ['コード補完', 'ボイラープレート生成', 'パターン補完', 'コメントからコードへ'],
    },
    ask: {
      name: 'Ask (Copilot Chat)',
      path: 'IDE のチャット',
      description: 'コードに関する質問、説明、生成のための会話型 AI チャット',
      details:
        'Copilot Chat は質問に答え、コードを説明し、変更を提案し、デバッグを支援します。関連 ' +
        'ファイル、選択範囲、リポジトリコンテキスト、対応ツールを追加してリクエストのスコープ ' +
        'を定めます。キーワード、コマンド、モデル、MCP サポートは IDE によって異なるため、' +
        '使用しているエディタの最新の機能マトリクスを参照してください。',
      useCases: ['コードの説明', 'デバッグ', 'テスト生成', 'コードリファクタリング', '学習'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      path: 'IDE の Agent Mode',
      description: '自律的なローカルコーディング — Copilot がファイルを判断し、変更を加え、コマンドを実行し、反復する',
      details:
        'Agent Mode は Copilot が IDE 内でコードを自律的に編集できるようにします。どの ' +
        'ファイルを変更するかを判断し、複数ファイルにわたる編集を行い、承認のためにターミナル ' +
        'コマンドを提案し、エラーに対して反復します。対応 IDE は MCP サーバー、サブエージェント、' +
        'custom agents を追加できます。Copilot のクラウドエージェントとは異なり、Agent Mode は ' +
        'ローカルのエディタセッション内で動作します。AI クレジットの消費は選択したモデルと実行 ' +
        'された作業によります。',
      useCases: ['複雑なタスク', '多段階の実装', 'エラー解決', 'ビルド自動化'],
    },
    'third-party-agents-ide': {
      name: 'サードパーティのエージェントハーネス',
      path: 'VS Code のサードパーティエージェントハーネス',
      description: 'VS Code 内で利用可能な Claude と Codex のハーネス',
      details:
        'VS Code は Anthropic Claude や OpenAI Codex のような対応サードパーティハーネスを ' +
        '実行できます。各ハーネスはエディタ内でベンダー固有のワークフローと機能を維持します。' +
        '可用性、実行場所、権限、課金は変更される可能性があるため、最新の VS Code エージェント ' +
        'ハーネスのドキュメントを参照してください。',
      useCases: ['自律コーディング', 'セキュリティレビュー', 'ベンダー固有機能', 'バックグラウンドタスク'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      path: 'GitHub.com とモバイル',
      description: 'GitHub.com 上の会話型 AI — リポジトリ、issue、PR、Web について質問',
      details:
        'GitHub.com の Copilot Chat では、どのページからでも質問できます — リポジトリ、issue、' +
        'pull request、またはソフトウェア全般に関する話題についてです。リポジトリと Web の ' +
        'コンテキスト、選択したモデル、エージェントセッション情報を使用できます。Chat と ' +
        'Copilot のクラウドエージェントは、アクティブなワークフロー内でコンテキストを ' +
        '受け渡しできます。GitHub Mobile は対応する Chat とエージェントセッション体験への ' +
        'アクセスを提供します。',
      useCases: ['リポジトリの Q&A', 'Issue 分析', 'PR の理解', 'Web 検索', 'コード生成'],
    },
    'coding-agent': {
      name: 'Copilot Cloud Agent',
      path: 'GitHub のクラウドエージェント',
      description: 'GitHub がホストする環境内での自律的なリポジトリ作業',
      details:
        'issue、pull request、Chat、または Agents ビューから作業を委任します。Copilot は ' +
        'リポジトリを調査し、計画を立て、ブランチ上でコードを変更し、結果を検証し、人間の ' +
        'レビューのために pull request を開きます。instructions、MCP、agents、hooks、skills、' +
        'Copilot Memory（パブリックプレビュー）でセッションをカスタマイズできます。コード ' +
        'スキャン、シークレットスキャン、依存関係チェック、ファイアウォールルールは設定可能な ' +
        '保護策であり、普遍的な保証ではありません。',
      useCases: ['バグ修正', '機能実装', 'テストカバレッジ', '技術的負債', 'セキュリティキャンペーン'],
    },
    'review-agent': {
      name: 'Copilot Code Review',
      path: 'Pull request レビュー',
      description: 'プロジェクト全体のコンテキストと修正提案を持つ AI コードレビュアー',
      details:
        'Copilot コードレビューは変更を分析し、関連するリポジトリコンテキストを収集し、修正 ' +
        '提案付きのフィードバックを提供します。チームは手動でレビューをリクエストするか、' +
        '自動レビューを設定できます。リポジトリの instructions、エージェントの skill、MCP ' +
        'サーバーがサポートされます。Copilot Memory はパブリックプレビュー中です。可用性は ' +
        'GitHub と対応 IDE で異なります。',
      useCases: ['コード品質', 'セキュリティレビュー', 'ベストプラクティス', 'PR ワークフロー', 'チームガバナンス'],
    },
    'third-party-agents-cloud': {
      name: 'サードパーティのコーディングエージェント',
      path: 'GitHub のサードパーティエージェント',
      description: 'GitHub 上で Copilot と並行して動作するパートナーのコーディングエージェント',
      details:
        'Anthropic Claude や OpenAI Codex のようなサードパーティのコーディングエージェントは、' +
        'GitHub 上で Copilot のクラウドエージェントと並行して作業できます。GitHub のサーフェス ' +
        'から対応セッションを開始し、pull request を通じてその変更をレビューします。この機能は ' +
        'パブリックプレビュー中で、クラウドエージェントのセキュリティ境界を使用し、機能と課金 ' +
        'は最新の製品ドキュメントで定義されます。',
      useCases: ['マルチエージェントワークフロー', 'エージェントの比較', '専門タスク', '並行開発'],
    },
    'slack-teams': {
      name: 'Slack & Teams での共同作業',
      path: 'Slack\nMicrosoft Teams',
      description: 'チームの会話から起動する共有クラウドエージェントセッション',
      details:
        'パブリックプレビューでは、対応する Slack や Microsoft Teams の会話で `@GitHub` に ' +
        'メンションすると、Copilot のクラウドエージェントセッションを開始・操作できます。' +
        '統合は会話コンテキストを使用でき、クラウドサンドボックス内で非同期に継続します。' +
        'リポジトリの権限がコード変更を誰がトリガーできるかを統制し、会話コンテキストは生成 ' +
        'された成果物とともに保存される場合があります。よりスコープを限定したコンテキストが ' +
        '必要な場合はダイレクトメッセージを使用してください。',
      useCases: ['議論から PR へ', '協働計画', 'Issue 作成'],
      docLabel: 'Slack 統合',
      altDocLabel: 'Teams 統合',
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode は Copilot のクラウドエージェントではありません。</strong> Agent ' +
        'Mode はローカルの IDE セッションで動作しますが、クラウドエージェントは GitHub が ' +
        'ホストする環境で非同期に動作し、pull request を返します。',
    },
    {
      icon: '🧠',
      content:
        '<strong>サードパーティエージェントは異なるサーフェスを使用します。</strong> VS Code は ' +
        'エージェントハーネスを公開し、GitHub は Copilot のクラウドエージェントと並行して ' +
        'サードパーティのコーディングエージェントをホストします。',
    },
    {
      icon: '💬',
      content:
        '<strong>コンテキスト制御はエディタによって異なります。</strong> 自律作業に進む前に、' +
        '関連するファイル、選択範囲、リポジトリコンテキスト、対応ツールのみを添付してください。',
    },
    {
      icon: '🔒',
      content:
        '<strong>クラウド作業には設定された保護策と人間のレビューが必要です。</strong> リポジトリ ' +
        'の権限、ファイアウォールルール、スキャン制御、テスト、pull request レビューを組み合わ ' +
        'せて使用してください。',
    },
  ],

  /* ── Tips ページ ── */
  tipsSeo: {
    title: 'Copilot Panorama — 効率化のヒント',
    description: 'GitHub Copilot の使用を最適化するための実践ガイド — トークン管理、プロンプト設計、コンテキストのスコープ設定、モデル選択、ガバナンス。',
  },
  tipsUi: {
    heroTitle: '効率化のヒント',
    insightsTitle: '効率化のマインドセット',
    insightsSubtitle: 'トークンごとの価値を最大化するための主要な原則',
    footerBuiltFor: 'GitHub Copilot ユーザーのために作成',
    footerDocsLink: 'Copilot の課金に関する完全なドキュメント',
    pageTips: '効率化のヒント',
  },
  tipsViz: {
    inputTokens: '入力トークン',
    outputTokens: '出力トークン',
    cachedTokens: 'キャッシュされたトークン',
    modelCalls: 'モデル呼び出し',
    before: '変更前',
    after: '変更後',
    expensive: '高コスト',
    cheap: '低コスト',
    high: '高負荷',
    low: '低負荷',
    auto: 'Auto',
    cacheHit: 'キャッシュヒット',
    cacheMiss: 'キャッシュミス',
    narrow: '狭い',
    broad: '広い',
    verboseInstructions: '長く冗長な指示…',
    scopedContext: '正確でスコープ限定のコンテキスト',
    chat: 'Chat',
    shipToPr: 'PR に反映',
    freshThread: '新しいスレッド',
    principlesBrief: '原則のみ。簡潔に。',
    heavy: '重い',
    skills: 'Skills',
    customAgents: '異なるロール + ツール → Custom Agents',
    minimalDiff: '最小限の差分 + 3つの箇条書き',
    alwaysOn: '常時有効',
    costly: '高コスト',
    onDemand: 'オンデマンド',
    efficient: '効率的',
    enabledTools: '必要なツールセットのみ有効',
    allToolsEnabled: '全ツールセット有効',
    taskScoped: 'このタスクにスコープ限定',
    loadOnce: 'スキーマを一度だけ読み込む',
    reuseInQueries: '後続のクエリで参照',
    tokenPrefixMatch: '繰り返しプレフィックスが一致',
    prefixDiffers: 'プレフィックスが変化',
    standard: '標準',
    simpleToMini: 'シンプル → mini',
    complexToPremium: '複雑 → premium',
    usageBaseline: '使用量のベースライン',
    alertBudget: 'アラートのみの予算',
    costCenterBudget: 'コストセンター別予算',
    perStep: 'ステップごと',
    steps: 'ステップ',
    accuracy99: '99%',
    accuracy95: '95%',
    lostInMiddle: '中間で失われる',
    historyAccumulates: 'ターンごとに履歴が蓄積',
    everyTurnAdds: '各ターンでコンテキストが増加',
    reprocessedInput: '履歴全体が入力として再処理される',
    middleDecay: '中間のトークンが劣化',
    startStrong: '✓ 冒頭：強い記憶',
    middleLost: '✗ 中間：劣化',
    endStrong: '✓ 末尾：強い記憶',
    rawFiles: '生ファイルを AI に渡す',
    scriptOutput: 'スクリプトを実行し、出力を渡す',
    research: '/research',
    plan: 'プランモード',
    implement: '/fleet',
    withTests: '単体テストあり',
    withoutTests: '単体テストなし',
    buggyChange: 'バグのある変更',
    silentMerge: 'サイレントマージ',
    brokenMain: 'main が壊れる',
    failingTests: '失敗するテスト',
    correction: '修正',
    succeedingTests: '成功するテスト',
    rawOutput: '生の出力：4200行',
    trimmed: '整形後：38行',
    cleanLayers: 'ドメイン → アプリケーション → インフラストラクチャ',
    agentMiss: 'エージェントのミス',
    rootCause: '根本原因を特定',
    durableFix: '持続的な修正をコード化',
    enterpriseDefault: 'Enterprise のデフォルト',
    overridableKeys: 'オーバーライド可能なキー',
    teamSpecialization: 'チームの構成',
  },
  tipsLayers: {
    mechanics: {
      title: 'トークンの仕組み',
      subtitle: 'Copilot とのやり取りごとのコスト要因を理解する',
    },
    pitfalls: {
      title: '落とし穴',
      subtitle: '結果を静かに劣化させ、トークンを消費する失敗パターン',
    },
    prompting: {
      title: 'プロンプティング',
      subtitle: 'より少ないトークンでより良い結果を出すプロンプトを書く',
    },
    context: {
      title: 'コンテキスト',
      subtitle: 'モデルに必要なものだけを与える — 多すぎず、少なすぎず',
    },
    caching: {
      title: 'キャッシュ',
      subtitle: 'プロンプトキャッシュを活用して、より速く安価なやり取りを実現',
    },
    models: {
      title: 'モデル',
      subtitle: 'モデルの能力をタスクの複雑さに合わせる',
    },
    governance: {
      title: 'ガバナンス',
      subtitle: '消費を監視し、Organization レベルのガードレールを設定する',
    },
    'workflow-design': {
      title: 'ワークフロー設計',
      subtitle: '分割統治 — 1つの巨大プロンプトではなく、スコープ限定のステップを連鎖させる',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'AIクレジットのコスト要因',
      path: 'コスト要因',
      description: '入力・出力・キャッシュのトークンはモデルによって異なる形で貢献する',
      details:
        'AI クレジットの消費は、選択したモデルと処理されたトークンによります。入力トークンには ' +
        'プロンプト、指示、ファイルコンテキスト、ツール出力が含まれます。出力トークンはモデル ' +
        'が生成するものです。キャッシュされた読み取りは、繰り返しコンテキストが再利用される ' +
        '際にコストが低くなることがあります。料金はモデルによって異なるため、固定の比率を ' +
        '仮定せず、最新の価格表を使用してください。',
      useCases: ['すべてのやり取り', '予算計画', 'コスト分析'],
    },
    'agentic-cost': {
      name: 'エージェント型コストの乗数',
      path: 'Agentic Workflows',
      description: 'エージェント型の作業は計画、ツール、検証、修正の間を反復する',
      details:
        'エージェント型体験（Agent Mode、クラウドエージェント、CLI）は設計上反復します：計画 ' +
        '→ 編集 → ツール／テストの実行 → 修正 → 繰り返し。消費量はタスクのスコープ、モデル ' +
        '選択、ツール出力、リトライ、停止条件によって変わります。明確な要件と決定論的な検証 ' +
        'が不要なループを減らします。',
      useCases: ['Agent Mode', 'クラウドエージェント', 'CLI エージェント'],
    },
    'context-discipline': {
      name: 'コンテキスト規律',
      path: 'ワークフロー設計',
      description: 'コスト最適化の大部分はコンテキスト規律 + ワークフロー設計にある',
      details:
        '最大のコストレバーは短いプロンプトを書くことではなく、モデル呼び出しごとにどの ' +
        'コンテキストを含めるかを管理することです。添付されるファイル、ツール出力、会話履歴の ' +
        '各項目が入力トークンを追加します。規律あるコンテキスト管理（ファイルのスコープ限定、' +
        'ログの整形、新規スレッドの開始）は、プロンプトを磨くことよりもはるかに大きな影響を ' +
        '持ちます。',
      useCases: ['すべてのワークフロー', 'コスト最適化', 'パフォーマンス'],
    },
    'quality-over-quantity': {
      name: '量より質',
      path: 'プロンプト設計',
      description: '指示の量ではなく、質の高いコンテキストに集中する',
      details:
        '指示が多いほど結果が良くなるわけではありません。タスクと期待される成果を定義し、' +
        '関連するファイル、ログ、既知の制約を提供し、結果がどう検証されるかを示し、明確な停止 ' +
        '条件を与えます。この構造は、探索、スコープの逸脱、リトライ、不要な出力を減らします。',
      useCases: ['Chat', 'Agent Mode', 'Copilot CLI'],
    },
    'fresh-threads': {
      name: '新しいスレッドを使う',
      path: 'セッション衛生',
      description: '意思決定が反映されたら新しい会話を開始する — コンテキストの劣化を防ぐ',
      details:
        'ツール出力がコンテキストに蓄積される長時間セッションを避けてください。蓄積された各 ' +
        'ツール出力は後続の呼び出しに入力トークンを追加し、関連するコンテキストを希薄化させる ' +
        '可能性があります。決定を耐久性のある成果物（issue、PR の説明、ADR、コードコミット）に ' +
        '反映したら、クリーンなコンテキストウィンドウで新しいスレッドを開始してください。' +
        'Copilot CLI では `/new`（または `/clear`）で新しい会話を開始でき、Chat では新しい ' +
        'チャットセッションを開きます。',
      useCases: ['Chat', 'Agent Mode', 'CLI セッション'],
    },
    'concise-instructions': {
      name: '指示を絞り込む',
      path: 'Instructions',
      description: 'タスク固有の詳細よりも、安定したプロジェクトガイドラインを優先する',
      details:
        'リポジトリの指示は、プロジェクトのマップ、検証済みのビルド／テスト／リント ' +
        'コマンド、安定した慣例、譲れない制約に使用します。古くなった内容やタスク固有の詳細は ' +
        '削除します。再利用可能なドメインプレイブック、例、スクリプト、リソースは skill に ' +
        '置き、関連性がある場合に Copilot が読み込めるようにします。',
      useCases: ['Instructions', 'コスト最適化', 'すべてのやり取り'],
    },
    'structure-for-reuse': {
      name: '再利用できる構造にする',
      path: '再利用可能なコンテキスト',
      description: '再利用可能な専門性には skill を、異なるロールにはエージェントを使う',
      details:
        'プレイブック、例、ドメインルール、スクリプト、runbook は Agent Skills に置き、' +
        'Copilot が関連するタスクに対して選択できるようにします。ワークフローに異なるロール、' +
        'ツールの境界、隔離されたコンテキストが必要な場合は custom agents を使います。リポジ ' +
        'トリ全体の指示は、タスク横断で適用されるガイドラインに集中させておきます。',
      useCases: ['Skills', 'Custom Agents', 'チームワークフロー'],
    },
    'concise-answers': {
      name: '要求を減らす',
      path: '出力制御',
      description: '出力トークンを最小限に抑えるため、最小限の有用な回答を求める',
      details:
        '最小限の有用な回答を求めてください：「すべてを説明して」ではなく、「最小限の差分 + ' +
        '理由の箇条書き3つをください」のように。アップデートやマイグレーションでは「破壊的 ' +
        '変更のみをリストして。コンテキストは省略して」。出力を小さくすることで、生成される ' +
        'トークンとレビューのノイズが減ります。',
      useCases: ['Chat', 'コードレビュー', 'マイグレーション'],
    },
    'scope-context': {
      name: 'コンテキストを意図的にスコープ限定する',
      path: 'コンテキスト戦略',
      description: 'タスクに必要なファイル、選択範囲、ログのみを添付する',
      details:
        '関連するファイルを開く／添付し、無関係なタブは閉じてください。ログ全体ではなく、選択 ' +
        'したコード、エラー、失敗したテストの出力を含めます。コンテキスト制御とキーワードは ' +
        'IDE によって異なりますが、原則は変わりません：スコープ限定のコンテキストは注意の散漫 ' +
        'さと AI クレジットの使用を減らします。',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: '常時ではなく条件付きにする',
      path: '条件付き読み込み',
      description: '現在のタスクに関連する場合にのみ読み込まれるコンテキストを優先する',
      details:
        '常時有効なコンテキスト（copilot-instructions.md）はすべての会話で読み込まれ、毎回 ' +
        'トークンコストがかかります。条件付きコンテキスト（Skills、パスにスコープ限定された ' +
        '指示）は関連する場合にのみ読み込まれます。専門的なガイドラインを Skills に移すと、' +
        'モデルがいつ読み込むかを判断できるようになります。または applyTo glob を使って、一致 ' +
        'するファイルにのみ指示が適用されるようにします。',
      useCases: ['Instructions', 'Skills', 'パスのスコープ限定'],
    },
    'apply-to-paths': {
      name: 'applyTo パスを使う',
      path: 'パスのスコープ限定',
      description: 'applyTo glob でカスタム指示を特定のファイルパターンにスコープ限定する',
      details:
        'パス固有の指示（.github/instructions/ 内）は applyTo glob フロントマターをサポート ' +
        'します。これは、モデルが一致するファイルで作業する場合にのみ指示が読み込まれることを ' +
        '意味します — 例えば、テストの慣例には applyTo: "**/*.test.ts" のように。これは無関係な ' +
        '場合は無料のコンテキストであり、必要な場合は正確なコンテキストです。',
      useCases: ['Instructions', 'テストルール', 'フレームワーク固有'],
    },
    'skills-mcp': {
      name: '必要なツールセットだけ有効にする',
      path: 'ツールセットのスコープ限定',
      description: 'MCP ツールをタスクが必要とする機能のみに制限する',
      details:
        '大規模な MCP ツールのコレクションはコンテキストを追加し、ツール選択を難しくします。' +
        '現在のワークフローに必要な GitHub MCP のツールセットと外部サーバーのみを構成して ' +
        'ください。発見のためにより広いカタログを利用可能にしつつ、タスクを開始する前に有効な ' +
        'ツールをスコープ限定してください。',
      useCases: ['MCP サーバー', 'GitHub MCP サーバー', 'コンテキスト管理'],
    },
    'context-command': {
      name: 'CLI の /context',
      path: 'CLI のコンテキスト',
      description: '/context でコンテキストを監視し、最初からやり直す代わりに /compact で長いセッションを圧縮する',
      details:
        'Copilot CLI では `/context` を使って、コンテキストウィンドウのどれだけが消費された ' +
        'かを確認します。セッションが大きくなったが続けたい場合は、`/compact` を実行して履歴を ' +
        '要約しウィンドウを縮小します — 必要に応じて `/compact focus on the auth module` の ' +
        'ようにフォーカスすることもできます。無関係な問題に切り替える場合は、代わりに `/new` ' +
        'または `/clear` でクリーンに始めてください。コンテキストの消費を意識することで、いつ ' +
        '圧縮するか、やり直すか、続けるかを判断できます。',
      useCases: ['CLI', '長いセッション', 'コンテキスト管理'],
    },
    'reuse-context': {
      name: 'コンテキストを保存して再利用する',
      path: 'コンテキストの再利用',
      description: '共有コンテキストを早期に読み込み、後続の質問が安価に参照できるようにする',
      details:
        'プロンプト内でコンテキストを保存・再利用してください。例えば、会話の早い段階で ' +
        'データベーススキーマを読み込み、後続の作業がそれを再利用できるようにします — 毎回 ' +
        '貼り直すのではなく、それを参照する具体的な質問をします。これは CLI で特に効果的です。' +
        'セッションが長時間にわたることがあり、共有プレフィックスがプロンプトキャッシュを ' +
        '有効にします。',
      useCases: ['CLI セッション', 'Chat', 'スキーマの多い作業'],
    },
    'prefix-matching': {
      name: 'プロンプトのプレフィックスキャッシュ',
      path: 'プロンプトキャッシュ',
      description: 'LLM のキャッシュは正確なプレフィックスの一致に依存する — それに応じてプロンプトを構成する',
      details:
        'プロンプトキャッシュは一般的に繰り返されるプレフィックスに依存します。安定した ' +
        '指示、ツール定義、関連する会話コンテキストは、絶えず変化する前置きよりも再利用される ' +
        '可能性が高くなります。これは Copilot の固定されたトークンしきい値ではなく、実装上の ' +
        'コンテキストとして捉えてください。',
      useCases: ['すべてのやり取り', 'コスト最適化', 'パフォーマンス'],
    },
    'choose-right-model': {
      name: 'モデルと推論レベルを選ぶ',
      path: 'モデル選択',
      description: 'モデルの能力と推論の労力をタスクの複雑さに合わせる',
      details:
        'モデルの選択は、コストを制御する最も速い方法の1つです — タスクが必要とするだけの ' +
        '能力を使い、必要以上には使わないでください。3つのレベルで考えます：アーキテクチャの ' +
        '判断、複雑なデバッグ、システム設計には推論モデルを。計画が明確でエージェントが実行 ' +
        'するだけの場合は中間モデルを。リファクタリング、フォーマット、ドキュメント、その他の ' +
        '日常的でよくスコープ限定された変更には軽量なモデルを使います。設定可能な推論をサポート ' +
        'するモデルでは、デフォルトで通常の労力を使い、より難しい作業に対してのみ引き上げて ' +
        'ください。労力を上げるほど AI クレジットを多く消費するためです。',
      useCases: ['すべてのやり取り', '予算計画', 'タスクのルーティング'],
    },
    'auto-mode': {
      name: '自動モードを使う',
      path: '自動選択',
      description: 'Auto は各プロンプトを効率的なモデルにルーティングし、キャッシュを保護し、10% の割引を提供する',
      details:
        '使用するモデルに迷ったら「Auto」を選択してください。小さなルーターがプロンプトを ' +
        '分析し、それを最も効率的に処理できるモデルに送ります — 高コストな推論モデルは本当に ' +
        '複雑な問題のために温存されます。Auto はキャッシュも保護します：モデルの切り替えは ' +
        '自然な境界（新しいセッション、または `/compact` の後）でのみ行われ、タスクの途中で ' +
        '切り替わることはありません。有料の Copilot プランでは、自動モデル選択を使用すると、' +
        'Chat、CLI、Copilot アプリ、クラウドエージェント全体でモデルコストが 10% 割引されます。' +
        'ほとんどのワークフローにとって良いデフォルトの選択です。',
      useCases: ['デフォルトのワークフロー', '混在タスク', '新規ユーザー'],
    },
    'monitor-usage': {
      name: '使用量を基準化してから予算を設定する',
      path: '予算管理',
      description: '観測された使用量からレポート、アラート、コストセンター、ユーザー上限を活用する',
      details:
        'モデル別の内訳（入力、出力、キャッシュの読み書き）を含む AI 使用状況レポートを使って ' +
        'ベースラインを確立してください。履歴が限られている場合は、アラートのみの予算と寛容な ' +
        '全ユーザー上限から始めます。所有権が委譲されている場所にはコストセンターごとの予算を ' +
        '追加し、しきい値アラートを監視し、観測されたパターンから上限を調整します。',
      useCases: ['管理者', '予算管理', 'チームガバナンス'],
    },
    'managed-settings-tip': {
      name: 'チームごとに管理設定を専門化する',
      path: 'managed-settings.json\nteam-mappings.json\nteams/<name>.json',
      description: 'チームが承認された設定をカスタマイズしつつ、Enterprise のガードレールを固定しておく',
      details:
        '`copilot/managed-settings.json` の Enterprise のデフォルトから始めます。チームが変更 ' +
        'できるキーのみを `overridable` としてマークし、`copilot/team-mappings.json` で設定 ' +
        'ファイルを Enterprise のチームスラグにマッピングし、承認された値を ' +
        '`copilot/teams/` 以下に配置します。未定義の値は Enterprise のデフォルトにフォール ' +
        'バックします。オーバーライドできないキーはロックされたままですが、`enabledPlugins` と ' +
        '`extraKnownMarketplaces` は加算的にマージされます。MCP の許可／拒否設定は、対応する ' +
        'クライアントでサーバーを中央集権的に統制できます。ユーザーが割り当てられた複数の ' +
        'チームに属する場合、チームの値は Enterprise ポリシーの下で最も制限の緩い値を使って ' +
        'マージされます。',
      useCases: ['プラットフォームチーム', 'AI パイオニア', 'ロールベースのツール'],
      docLabel: 'チーム固有の設定を構成',
      altDocLabel: '管理設定リファレンス',
    },
    'compound-errors': {
      name: 'エラーの複合問題',
      path: '品質の数学',
      description: 'ステップごとの仮想的なエラー率は、長いワークフローにわたって複合する',
      details:
        '説明のために、50 の独立したステップそれぞれが 99% 信頼できるとすると、エンドツー ' +
        'エンドの仮想的な確率は約 60% になり、95% では約 8% になります。これらは数学的な例 ' +
        'であり、測定された Copilot の信頼性ではありません。より小さなスコープと決定論的な ' +
        '検証は、未検証のステップ数を減らします。',
      useCases: ['Agent Mode', 'クラウドエージェント', 'オーケストレーションされたワークフロー'],
    },
    'context-rot': {
      name: 'コンテキストの劣化',
      path: 'コンテキストの劣化',
      description: '長い履歴はコストを増加させ、関連する意思決定を希薄化させる可能性がある',
      details:
        '各ツール出力、添付ファイル、会話の各ターンはコンテキストに蓄積されます。長い履歴は ' +
        '入力処理を増加させ、古い意思決定を取り出しにくくすることがあります。緩和策：冗長な ' +
        'ツール出力を整形し、中間の意思決定を耐久性のある成果物（issue、PR、ADR）に反映し、' +
        '劣化が定着する前に新しいスレッドを開始します。',
      useCases: ['長いセッション', 'Agent Mode', 'CLI セッション'],
    },
    'lost-in-middle': {
      name: '中間に埋もれる問題',
      path: '位置バイアス',
      description: '長いコンテキストの中間に位置するトークンは信頼性が低く記憶される',
      details:
        '外部の LLM 研究では、長いコンテキストの中間にある情報の取り出しがより弱いことが ' +
        '見つかっています。結果はモデルによって異なり、Copilot の信頼性の保証ではありません。' +
        '重要な指示は目立たせておき、無関係な内容はスコープ限定されたエントリに分割します。',
      useCases: ['大きなプロンプト', '長いドキュメント', 'マルチファイルレビュー'],
    },
    'think-in-code': {
      name: 'コードで考える',
      path: 'AI ではなくスクリプト',
      description: '生ファイルを与えるより、スクリプトを優先する — 分析してからモデルに要約を渡す',
      details:
        '10,000 行のログや大きな JSON ダンプを理解する必要があるとき、すべてを貼り付けないで ' +
        'ください。重要な部分（件数、エラー、関連する部分）だけを抽出する小さなスクリプトを ' +
        '書く（またはエージェントに書かせる）ようにし、代わりにそのスクリプトの出力をエージェ ' +
        'ントに渡します。これにより、モデルは実際の質問に集中し続けられます。grep、jq、awk、' +
        'または小さなスクリプトを使い、安全に一緒に実行できる独立した決定論的操作をまとめて ' +
        'ください。',
      useCases: ['ログ分析', 'データ探索', '大きなファイル'],
    },
    'research-plan-implement': {
      name: '調査 → 計画 → 実装',
      path: '分割統治',
      description: '発見、合意、実行を分離する。独立した作業は並列化する',
      details:
        '`/research` を使って文書化された深い調査を行い、プランモードを使って変更前にスコープと ' +
        '順序について合意し、計画が明確になってから初めて実装します。リクエストが並行して実行 ' +
        'できる独立したタスクに分解できる場合は `/fleet` を使います。各段階をスコープ限定に ' +
        '保ち、探索履歴全体ではなく、耐久性のある発見事項を引き継ぎます。',
      useCases: ['複雑なリファクタリング', 'クロスカッティングな変更', 'マルチファイル編集'],
    },
    'deterministic-guardrails': {
      name: 'Copilot の出力を検証する',
      path: 'テスト駆動ループ',
      description: '人間のレビューと決定論的なチェックは依然として必要である',
      details:
        '本番環境で使用する前に、生成されたコードをレビューしてください。対象を絞ったテスト、' +
        'リンター、型チェック、コードスキャン、シークレットスキャン、該当する場合は IP ' +
        'スキャンを実行します。これらのチェックはエージェントのループ内で決定論的なフィード ' +
        'バックを提供し、人間のレビューは意図、設計、セキュリティ、可読性、保守性を検証します。',
      useCases: ['Agent Mode', 'TDD', 'CI パイプライン'],
    },
    'trim-shell-outputs': {
      name: 'シェル出力を(慎重に)削る',
      path: 'シェルの衛生',
      description: '冗長なコマンドの既知のノイズを削除する — ただし一般的な圧縮はしばしば逆効果になる',
      details:
        'CLI ツールは冗長さを好みます。単純な `npm install` や `terraform plan` は数千行を ' +
        'エージェントのコンテキストにダンプすることがあり、そのほとんどがノイズです。ノイズの ' +
        '多いコマンドをラップして、エージェントが最後の関連部分（エラー、警告、最終サマリー）' +
        'だけを見るようにすることは有効です。コミュニティの2つのプロジェクトが異なる圧縮方法を ' +
        '示しています：**Snip**（github.com/edouard-claude/snip）はシェルコマンドの前に置き ' +
        '— `snip -- npm install` — エラーを保持しながら冗長な出力をフィルタリングします。' +
        '**Caveman**（github.com/juliusbrussee/caveman）はモデルに圧縮されたテレグラフ ' +
        'スタイルで応答するよう指示します。失われた情報が読み直しと修正を招く可能性があるため、' +
        '積極的な圧縮には懐疑的に対応してください。「すべてを削減する」アプローチよりも、狭く ' +
        '決定論的な整形（既知のノイズ行だけを削除し、エラーとサマリーは常に保持する）を優先し、' +
        'ツールを採用する前に実際のトークン使用量を測定してください。',
      useCases: ['CLI エージェント', 'ビルド出力', 'テスト実行'],
    },
    'apply-architecture': {
      name: '良いアーキテクチャを適用する',
      path: 'エージェントフレンドリーなコード',
      description: '明確な境界と名前は不要な探索を減らす',
      details:
        '明確なモジュール境界、説明的な名前、ローカルの慣例、スコープ限定されたテストは、人間 ' +
        'とエージェントの両方が正しいコードを見つけ、隔離された変更を検証するのに役立ちます。' +
        'AI ツールのためではなく、製品とチームのためにアーキテクチャを選んでください。エージェ ' +
        'ントの効率は有用な副産物です。',
      useCases: ['新規プロジェクト', 'リファクタリング', 'チームのコードベース'],
    },
    'iterate-configs': {
      name: 'エージェントの見落としをインシデントとして扱う',
      path: 'ミス → インシデント',
      description: 'エージェントが間違えたとき、出力だけでなく設定を修正する',
      details:
        '重大なミスは小さなインシデントとして扱ってください。根本原因を特定します：欠けて ' +
        'いるプロジェクトガイドライン、誤った skill やツール、弱い検証、または環境の問題。' +
        '同じ失敗が繰り返される可能性を減らすために、持続的な修正を instructions、skills、' +
        'テスト、または設定にコード化します。chronicle コマンドはガバナンス層で別途扱われます。',
      useCases: ['チームワークフロー', 'CLI パワーユーザー', '長期的なリポジトリ'],
    },
    'project-map': {
      name: 'Copilot にプロジェクトマップを渡す',
      path: 'プロジェクトマップ',
      description: '整備された AGENTS.md / copilot-instructions.md はエージェントが数十のファイルを読むのを防ぐ',
      details:
        '構造化された概要がなければ、エージェントは方向性を把握するためだけに大量のファイルを ' +
        '読むことになり、それぞれが入力トークンとなります。`AGENTS.md` や ' +
        '`.github/copilot-instructions.md` のような整備されたマップは、最初からレイアウトを ' +
        '提供します：物事がどこにあるか、モジュールがどう関連するか、ビルド／テスト／リント ' +
        'コマンド、重要な慣例です。エージェントは探索ではなく実際の変更に予算を費やせるように ' +
        'なり、より短いセッションとより小さな差分が生まれます。',
      useCases: ['オンボーディング', '大規模リポジトリ', 'すべてのやり取り'],
    },
    'preserve-cache': {
      name: 'キャッシュを保持する',
      path: 'キャッシュの無効化',
      description: 'セッションの途中でモデル、推論レベル、ツールセットを切り替えない — キャッシュが無効になる',
      details:
        'キャッシュは、ターンをまたいで大きく繰り返されるコンテキスト（システムプロンプト、' +
        'ファイル内容、ツール定義）を再利用し、キャッシュされたトークンは通常の入力の約 10% で ' +
        '課金されます。次の3つはそれを破棄し、コンテキスト全体を新しい入力として再課金させ ' +
        'ます：セッション途中でのモデル切り替え（あるモデルは別のモデルのキャッシュを再利用 ' +
        'できません）、セッション途中での推論レベル／コンテキストサイズ／有効なツールの変更、' +
        'キャッシュが失効した後（OpenAI モデルは24時間、他のほとんどは約1時間）古いセッション ' +
        'に戻ること。開始前にモデルと設定を選び、それを固定し、古くなったセッションでは新しく ' +
        '開始するか `/compact` を使って、再構築されるものが履歴全体ではなく短い要約になる ' +
        'ようにしてください。',
      useCases: ['長いセッション', 'CLI', 'コスト最適化'],
    },
    'cheaper-subagents': {
      name: 'サブエージェントには安価なモデルを使う',
      path: 'サブエージェントのモデル',
      description: 'サブエージェントは軽量なモデルで実行する — スコープ限定されたコンテキストにプレミアムモデルが必要なことは稀',
      details:
        'サブエージェントは独自のセッションで実行され、主エージェントの会話履歴を引き継ぎ ' +
        'ません。コンテキストが単一の特定のタスクにスコープ限定されているため、軽量なモデルで ' +
        '十分に作業をこなせることがよくあります。サブエージェントに軽量モデルを割り当てても、' +
        'セッション途中でのモデル切り替えのように主エージェントのキャッシュに影響しないため、' +
        '主スレッドでのキャッシュ再構築のペナルティを支払うことなく、サブエージェントの作業を ' +
        '節約できます。',
      useCases: ['サブエージェント', 'オーケストレーションされたワークフロー', 'コスト最適化'],
    },
    'chronicle-insights': {
      name: '/chronicle でセッションから知見を得る',
      path: 'セッションから学ぶ',
      description: 'Copilot CLI のセッション履歴を要約とワークフローの知見に変える',
      details:
        '作業サマリーには `/chronicle standup` を、パーソナライズされた使用状況の指針には ' +
        '`/chronicle tips` を、トークン支出に関するフィードバックには `/chronicle cost tips` ' +
        'を、セッションの検索には `/chronicle search` を、リポジトリにスコープ限定された指示の ' +
        '提案には `/chronicle improve` を使います。知見は Copilot CLI のセッションデータに ' +
        '基づきます。セッション履歴を使用する前に、保存、同期、削除の制御を確認してください。',
      useCases: ['CLI', 'チームガバナンス', '継続的な改善'],
    },
    'session-limits': {
      name: 'AIクレジットのセッション上限を設定する',
      path: 'セッションのガードレール',
      description: 'セッション開始前に CLI と SDK の自律作業に上限を設ける',
      details:
        '非対話の Copilot CLI 実行には `--max-ai-credits` を、対話型 CLI セッションには ' +
        '`/limits set max-ai-credits` を、Copilot SDK では `sessionLimits.maxAiCredits` を ' +
        '使います。使用量はモデル呼び出しのたびに事後記録されるため、設定値は厳格な停止では ' +
        'なく、わずかに超過し得るソフトな上限です。セッションの上限は監視のない、または ' +
        '長時間実行される作業をスコープ限定し、予算、アラート、人間の承認を補完します。',
      useCases: ['Copilot CLI', 'Copilot SDK', '自律作業'],
    },
    'mcp-governance': {
      name: 'MCP アクセスを統制する',
      path: 'MCP のガバナンス',
      description: '対応サーフェスでサーバーを厳選し、設定を保護する',
      details:
        '利用可能な場合は、承認された MCP レジストリと Enterprise の許可／拒否設定を使用して ' +
        'ください。リポジトリの MCP 設定をレビュー制御で保護し、サーバーの所有者、スコープ、' +
        'データアクセスを文書化します。適用方法は IDE、CLI、Copilot アプリ、クラウドエージェント ' +
        'によって異なるため、レジストリは普遍的なセキュリティ境界としてではなく、ガバナンスと ' +
        '発見の手段として扱ってください。',
      useCases: ['Enterprise ガバナンス', '承認済みツール', 'データアクセス'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>品質は複合する。</strong> ステップごとの仮想的な信頼性は長い連鎖にわたって ' +
        '低下するため、より小さなスコープと決定論的な検証を使ってください。示されている ' +
        'パーセンテージは例であり、Copilot の測定値ではありません。',
    },
    {
      icon: '💰',
      content:
        '<strong>コンテキストは軽く関連性を保つ。</strong> ファイルとツール出力を整形し、無関係 ' +
        'な作業には新しいスレッドを開始し、スコープ限定されたコンテキストを使って AI クレジット ' +
        'の使用を減らしてください。',
    },
    {
      icon: '🎯',
      content:
        '<strong>モデルと推論の労力をタスクに合わせる。</strong> デフォルトで通常の労力を使い、' +
        '難しい問題には引き上げ、意図に基づくルーティングが欲しいときは Auto を使ってください。',
    },
    {
      icon: '🔄',
      content:
        '<strong>エージェントのループは作業を乗算する。</strong> 明確な停止条件を定義し、監視の ' +
        'ない、または長時間の作業にはセッションの上限を使ってください。',
    },
    {
      icon: '📦',
      content:
        '<strong>専門的なガイドラインを幅広い指示から切り離す。</strong> 再利用可能な専門性には ' +
        'Skills を、異なるロール、ツール、隔離されたコンテキストには custom agents を使って ' +
        'ください。',
    },
  ],
};
