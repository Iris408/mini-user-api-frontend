# JWT Authentication Dashboard
## JWT認証ダッシュボード

JWT Authentication Dashboard is a React + TypeScript frontend application connected to a deployed FastAPI backend.
It supports user login, JWT token storage, protected dashboard access, admin-only user list, and role-based UI flows.

JWT認証ダッシュボードは、デプロイ済みのFastAPIバックエンドに接続されたReact + TypeScriptフロントエンドアプリケーションです。
ユーザーログイン、JWTトークンの保存、保護されたダッシュボードアクセス、管理者専用ユーザーリスト、ロールベースのUIフローをサポートしています。

---

## Getting Started / ローカル起動

Clone the repository:
```bash
git clone https://github.com/Iris408/jwt-authentication-dashboard
cd jwt-authentication-dashboard
npm install
```
Create a `.env` file in the project root:
```bash
VITE_API_URL=https://mini-user-api.onrender.com
```

Start the server:
```bash
npm run dev
```

---

# Live Demo  / ライブデモ

Frontend deployed on Vercel:
```text
https://jwt-authentication-dashboard-sepia.vercel.app
```
Backend API deployed on Render:
```text
https://mini-user-api.onrender.com/docs
```

---

# Tech Stack / 技術スタック

|---|---|
| Frontend | React, TypeScript, CSS, Vite, React Router |
| Backend | FastAPI, PostgreSQL, SQLAlchemy, JWT Authentication |
| Deployment | Vercel, Render |
| Tools | Git, GitHub, VS Code |

---

# Features / 機能 

| English | 日本語 |
|---|---|
| User login flow | ユーザーログインフロー |
| Protected dashboard route | 保護されたダッシュボードルート |
| Admin-only user lsit | 管理者専用ユーザー一覧 |
| Role-based access control | ロールベースアクセス制御 |
| API Integration with deployed backend | デプロイ済みバックエンドとのAPI統合 |
| Multi-Page frontend routing | マルチページフロントエンドルーティング |
| Responsive UI Styling | レスポンシブUIスタイリング |

---

## Pages

| Page | Route | Description |
|---|---|---|
| Login | `/` | User login page |
| Dashboard | `/dashboard` | Protected user profile page |
| Admin | `/admin` | Admin-only user list |

---

## API Routes Used

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/login` | Login and receive JWT token |
| GET | `/profile` | Get authenticated user profile |
| GET | `/users` | Admin-only user list |

---

# Future Improvements/ 今後の改善

| English | 日本語 |
|---|---|
| CI/CD pipeline | CI/CDパイプライン |
| Refresh token support | リフレッシュトークン対応 |
| Improved mobile styling | モバイル表示の改善 |
| User profile editing | ユーザープロフィール編集 |
| Admin role editing | 管理者ロールの編集 |
| Loading states and error message | 読み込み状態とエラーメッセージ |
| Frontend tests | フロントエンドのテスト |
| Dark/light mode support | ダーク・ライトモード対応 |