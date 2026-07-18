# 우리반 그림 릴레이 (Class Relay)

학생들이 그림을 그리면서 릴레이하는 교육용 게임입니다.

## 📁 프로젝트 구조

```
class-relay/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 배포 설정
├── .gitignore                  # 깃 제외 파일 목록
├── firebase-config.template.js # Firebase 설정 템플릿 (시크릿 주입용)
├── index.html                  # 학생용 게임 페이지
└── teacher.html                # 교사용 대시보드
```

## 🔐 Firebase 설정

Firebase API 키는 공개되어도 안전합니다. 보안은 Firebase Security Rules로 관리됩니다.

### 1. Firebase 콘솔에서 정보 확인

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택 → **Project Settings** (⚙️ 아이콘)
3. **Your apps** → 웹 앱 선택
4. **firebaseConfig** 객체에서 값 복사

### 2. firebase-config.js 파일 설정

프로젝트 루트의 `firebase-config.js` 파일에 Firebase 설정 값을 입력하세요.

## 🚀 배포 방법

### GitHub Pages 배포

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**에서 배포 방법 선택 (예: Deploy from a branch)
3. 브랜치 선택 후 저장

### 로컬 테스트

```bash
# 로컬 서버 실행 (예: Python)
python -m http.server 8000

# 또는 VS Code의 Live Server 확장 사용
```

브라우저에서 `http://localhost:8000`으로 접속하여 테스트할 수 있습니다.

## 🎮 사용 방법

### 학생 페이지 (`index.html`)
- 이름을 입력하고 입장
- 선생님이 게임을 시작할 때까지 대기
- 그림 그리기 또는 정답 맞추기 참여

### 교사 대시보드 (`teacher.html`)
- 학생들의 접속 현황 모니터링
- 게임 시작 버튼으로 릴레이 시작
- 결과 확인 및 채점

## 🔒 보안

- Firebase API 키는 공개되어도 안전합니다 (클라이언트 사이드에서 사용)
- 실제 보안은 **Firebase Security Rules**로 관리됩니다
- Firestore 규칙을 설정하여 데이터 접근을 제어하세요

## 📝 Firebase Security Rules

Firestore 보안 규칙을 설정하여 데이터 무결성을 유지하세요:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 활성 사용자
    match /active_users/{userId} {
      allow read, write: if request.auth != null;
    }
    
    // 릴레이 게임 데이터
    match /relays/{relayId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

## 🛠️ 기술 스택

- HTML5 Canvas (그리기)
- Firebase Firestore (실시간 데이터베이스)
- Vanilla JavaScript (프레임워크 없음)
- GitHub Actions (CI/CD)
- GitHub Pages (호스팅)

## 📄 라이선스

MIT License