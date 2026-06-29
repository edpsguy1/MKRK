# 수랏간 김상궁 — 수제육포 랜딩페이지

호주산 홍두깨살로 정성껏 만든 프리미엄 수제육포 브랜드 **수랏간 김상궁**의 정적(Static) 랜딩페이지입니다.
별도의 빌드 과정 없이 `index.html`만으로 동작하며, GitHub에 올린 뒤 Vercel에서 바로 배포할 수 있습니다.

## 주요 구성

- 히어로 (브랜드 소개 + 구매 CTA)
- 육포 선택 시 고민 포인트
- 수랏간 김상궁의 네 가지 기준
- 상황별 추천 구성 (7종)
- 단품 구성 (5종)
- 선물세트 (360g / 900g)
- 구매 전 확인사항 / 자주 묻는 질문(FAQ)
- 구매 채널 (네이버 스마트스토어 · 쿠팡 · 카카오 채널 · 인스타그램 · 자사몰)

## 파일 구조

```
.
├── index.html      # 메인 페이지 (최상위)
├── style.css       # 전역 스타일
├── script.js       # 아이콘(Lucide) 초기화
├── assets/         # 로고·제품·채널 아이콘 이미지
│   ├── logo.png
│   ├── hero-main.png
│   ├── prod-30g.png
│   ├── prod-90g.png
│   ├── prod-jangpo.png
│   ├── gift-360.png
│   ├── gift-900.png
│   ├── naverstore.ico
│   ├── coupang.ico
│   ├── kakao.png
│   ├── instagram.ico
│   └── jasamall.png
├── vercel.json     # Vercel 정적 배포 설정
├── .gitignore
└── README.md
```

> 글꼴(Pretendard)과 아이콘(Lucide)은 CDN으로 불러오므로 인터넷 연결이 필요합니다.

## 로컬에서 확인

빌드가 필요 없습니다. 아래 중 편한 방법으로 확인하세요.

```bash
# 방법 1) 파일 더블클릭
index.html 을 브라우저로 열기

# 방법 2) 간단한 로컬 서버 (Python)
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## Vercel 배포 방법

1. 이 폴더의 내용을 GitHub 저장소에 그대로 push 합니다.
2. [Vercel](https://vercel.com) 에 로그인 → **Add New → Project** 클릭.
3. 해당 GitHub 저장소를 Import 합니다.
4. Framework Preset 은 **Other** (또는 자동 감지)로 두고, 빌드 명령 없이 그대로 **Deploy**.
   - 별도 빌드가 없는 정적 사이트라 추가 설정이 필요 없습니다.
5. 배포가 완료되면 발급된 URL로 사이트가 공개됩니다.

GitHub에 새 커밋을 push 할 때마다 Vercel이 자동으로 재배포합니다.

## 채널 링크

- 네이버 스마트스토어: https://smartstore.naver.com/j6464
- 쿠팡: https://shop.coupang.com/A01540756
- 카카오 채널: https://story.kakao.com/ch/j6464
- 인스타그램: https://www.instagram.com/____j6464/
- 자사몰: http://soorat.cafe24.com
- 고객센터: 031-996-6464
