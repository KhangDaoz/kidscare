src/
├── assets/             # Hình ảnh, SVG, Fonts (Memphis shapes, Avatars, Icons)
├── components/         # Các thành phần giao diện tái sử dụng
│   ├── common/         # Button, Card, Badge, Progress (nguyên tử - components nhỏ)
│   ├── layout/         # Navbar, Footer, Section Wrapper, Container
│   └── memphis/        # Các hình khối trang trí Memphis (Circle, Squiggle, Triangle)
├── pages/              # 3 trang chính (Mỗi trang là một thư mục riêng)
│   ├── Home/           # Landing page (index)
│   ├── Features/       # Chi tiết tính năng & Game Scenarios
│   └── Parents/        # Dashboard cho phụ huynh (Analytics, Reports)
├── constants/          # Định nghĩa màu sắc (palette), tokens thiết kế, đường dẫn API
├── context/            # Quản lý Global State (ví dụ: User XP, Level, Theme)
├── hooks/              # Custom hooks (ví dụ: useSkillAnalytics, useAuth)
├── router/             # Cấu hình routing (React Router Dom)
├── styles/             # Global CSS, CSS Variables, Tailwind config (nếu dùng)
├── utils/              # Các hàm bổ trợ (formatDate, calculations)
├── App.jsx             # File gốc cấu trúc App
└── main.jsx            # Entry point của Vite

# KidsApp Implementation Guide (PoC -> Production)

Tai lieu nay huong dan ban trien khai tung buoc thuc te de bien PoC video-decision thanh he thong day ky nang cho tre, co luu ket qua, co trang admin tao bai hoc moi ma khong can sua code.

## 1. Muc tieu cuoi cung

1. Tre xem video tinh huong, dua ra quyet dinh, di den nhanh tiep theo.
2. Moi lua chon duoc luu thanh du lieu de danh gia ky nang.
3. Ket thuc bai hoc co tong ket diem + lich su lua chon.
4. Admin tao/chinh sua/publish bai hoc moi tren giao dien.
5. Backend cung cap API on dinh, frontend chi render theo du lieu.

## 2. Kien truc tong quan

- Frontend React: giao dien cho tre + trang admin.
- Backend Node.js + Express: API lessons, nodes, attempts, media.
- Database MongoDB: luu bai hoc, node, ket qua cho AI phan tich.
- Object storage (giai doan sau): luu video upload (S3, Cloudinary, GCS...).

Flow chinh:

1. Frontend goi API lay lesson da publish.
2. Tre vao bai hoc -> backend tao attempt.
3. Moi lan tre chon 1 dap an -> frontend goi API luu answer.
4. Den node cuoi -> frontend goi API finish attempt.
5. Admin xem dashboard ket qua, AI doc du lieu attempts de phan tich.

## 3. Cau truc thu muc de xuat

```txt
KidsApp/
  frontend/                        # Ung dung React (giao dien tre em + admin)
    src/
      pages/                       # Cac trang cap route
        Children.jsx               # Trang hoc tap cho tre (video -> decision -> ket qua)
        Admin/
          LessonList.jsx           # Danh sach bai hoc, tao moi, clone, tim kiem
          LessonEditor.jsx         # Chinh sua thong tin bai hoc (title, skill, age group...)
          ResultDashboard.jsx      # Man hinh thong ke ket qua hoc tap
      components/
        player/                    # Nhom component gameplay cho tre
          VideoPlayer.jsx          # Phat video node hien tai
          DecisionPanel.jsx        # Hien cau hoi va lua chon
          MessagePanel.jsx         # Hien thong diep sau moi lua chon
          FinalResultPanel.jsx     # Hien tong ket diem va choi lai
          ScoreBar.jsx             # Hien diem hien tai trong qua trinh hoc
        admin/                     # Nhom component dung chung cho trang admin
          LessonForm.jsx           # Form tao/sua bai hoc
          NodeForm.jsx             # Form tao/sua node tinh huong
          ChoiceForm.jsx           # Form tao/sua cac lua chon trong node decision
          MediaUploader.jsx        # Upload video/asset cho bai hoc
      services/                    # Lop goi API, tach rieng khoi UI
        apiClient.js               # Cau hinh axios/fetch dung chung (baseURL, headers...)
        lessons.api.js             # API cho lesson va node
        attempts.api.js            # API tao attempt, luu answer, ket thuc bai
        media.api.js               # API upload va quan ly media
      store/                       # Quan ly state (Zustand/Redux/Context)
        playerStore.js             # State gameplay: node hien tai, diem, phase...
        adminStore.js              # State man hinh admin: form, filter, selected lesson...
      constants/
        design-token.js            # Mau sac, font, spacing dung chung cho UI
  backend/                         # Dich vu API va xu ly du lieu
    src/
      modules/                     # Chia theo domain nghiep vu (feature-based)
        lessons/
          lessons.model.js         # Schema/model lesson + node
          lessons.service.js       # Xu ly nghiep vu lesson (validate graph, publish...)
          lessons.controller.js    # Nhan request/tra response cho lesson
          lessons.routes.js        # Dinh nghia route lesson
        attempts/
          attempts.model.js        # Schema/model attempt + answer
          attempts.service.js      # Xu ly nghiep vu luu lua chon, tinh diem, finish
          attempts.controller.js   # Nhan request/tra response cho attempt
          attempts.routes.js       # Dinh nghia route attempt
        media/
          media.service.js         # Xu ly upload/luu metadata media
          media.controller.js      # Nhan request upload media
          media.routes.js          # Dinh nghia route media
      middleware/                  # Auth, validate input, error handler...
      utils/                       # Ham dung chung (logger, helper, constants...)
      app.js                       # Khoi tao express app, gan middleware va routes
      server.js                    # Diem chay server (listen port)
```

## 4. Buoc 1 - Refactor frontend Children theo component

Muc tieu: thay hard-code PoC bang trang React co state ro rang.

Can lam:

1. Sua `frontend/src/pages/Children.jsx` thanh page container.
2. Tao `VideoPlayer.jsx` de phat video va phat su kien `onEnded`.
3. Tao `DecisionPanel.jsx` de hien cau hoi + choices.
4. Tao `MessagePanel.jsx` de hien thong diep chuyen canh.
5. Tao `FinalResultPanel.jsx` de hien tong ket + choi lai.
6. Tao `ScoreBar.jsx` de hien diem.

State de giu trong page:

- `currentNodeId`
- `score`
- `answers[]`
- `attemptId`
- `phase` (video, decision, message, final)

## 5. Buoc 2 - Chuan hoa du lieu bai hoc

Khong de logic trong code, chi de trong DB.

### 5.1 Lesson document

```json
{
  "_id": "lesson_001",
  "title": "Ky nang thoat hiem khi co dau hieu chay",
  "skillCode": "fire_safety",
  "ageGroup": "6-9",
  "status": "published",
  "startNodeId": "fire_scene",
  "version": 1
}
```

### 5.2 Node document

```json
{
  "lessonId": "lesson_001",
  "nodeId": "fire_scene",
  "type": "decision",
  "videoUrl": "https://.../vid1.mp4",
  "question": "Ban se lam gi?",
  "choices": [
    {
      "choiceId": "c1",
      "label": "Chay ra ngoai va goi 114",
      "nextNodeId": "fire_correct",
      "scoreDelta": 10,
      "tag": "safe_action"
    },
    {
      "choiceId": "c2",
      "label": "Mo cua kiem tra",
      "nextNodeId": "fire_wrong",
      "scoreDelta": 0,
      "tag": "risk_action"
    }
  ],
  "feedbackMessage": null
}
```

### 5.3 Attempt document

```json
{
  "_id": "attempt_abc",
  "userId": "child_001",
  "lessonId": "lesson_001",
  "startedAt": "2026-03-30T08:00:00.000Z",
  "endedAt": null,
  "totalScore": 0,
  "status": "in_progress"
}
```

### 5.4 Attempt answer document

```json
{
  "attemptId": "attempt_abc",
  "nodeId": "fire_scene",
  "selectedChoiceId": "c1",
  "scoreDelta": 10,
  "responseTimeMs": 5300,
  "createdAt": "2026-03-30T08:00:12.000Z"
}
```

## 6. Buoc 3 - Dung backend API toi thieu

### 6.1 API cho tre

1. `GET /api/lessons/:lessonId/play`
- Tra ve lesson + danh sach node phuc vu gameplay.

2. `POST /api/attempts`
- Tao mot attempt moi khi vao bai hoc.

3. `POST /api/attempts/:attemptId/answers`
- Luu moi lua chon cua tre.

4. `POST /api/attempts/:attemptId/finish`
- Chot bai hoc, tinh diem cuoi.

### 6.2 API cho admin

1. `POST /api/admin/lessons`
2. `PUT /api/admin/lessons/:lessonId`
3. `POST /api/admin/lessons/:lessonId/nodes`
4. `PUT /api/admin/lessons/:lessonId/nodes/:nodeId`
5. `POST /api/admin/lessons/:lessonId/publish`
6. `POST /api/admin/media/upload`

## 7. Buoc 4 - Tao trang Admin de khong can dev can thiep

Trang admin can co 4 man hinh:

1. Lesson List
- Tao moi, clone, tim kiem lesson.
- Hien trang thai draft/published.

2. Lesson Editor
- Chinh title, skillCode, ageGroup, startNode.

3. Node Editor
- Them node theo type: decision/end/info.
- Upload/chon video cho node.
- Tao choices va chon `nextNodeId`.

4. Result Dashboard
- Loc theo lesson, thoi gian, nhom tuoi.
- Xem score trung binh, ty le lua chon dung/sai.

Bat buoc co validate truoc publish:

1. Start node phai ton tai.
2. Node decision phai co >= 2 choices.
3. Moi choice phai co `nextNodeId` hop le.
4. Graph phai co it nhat 1 duong dan den node end.

## 8. Buoc 5 - Mapping tu PoC sang frontend hien tai

Tu PoC cua ban (`PoC/script.js`) mapping sang React nhu sau:

1. `loadScene` -> function `goToNode(nodeId)` trong Children page.
2. `showDecision` -> `DecisionPanel` component.
3. `showEndMessage` -> `MessagePanel` component.
4. `showFinalScreen` -> `FinalResultPanel` component.
5. `gameState.score` -> `playerStore.score`.

## 9. Buoc 6 - Luu du lieu phuc vu AI

Khi luu answer, nen kem metadata:

- `attemptId`
- `lessonId`
- `nodeId`
- `selectedChoiceId`
- `isSafeChoice` (boolean)
- `responseTimeMs`
- `ageGroup`
- `skillCode`
- `createdAt`

Dieu nay giup AI tra loi cac cau hoi:

1. Tre thuong sai o node nao?
2. Tre ra quyet dinh nhanh hay cham?
3. Sau nhieu lan hoc, diem co tang khong?
4. Nhom tuoi nao can bo sung bai hoc nao?

## 10. Ke hoach trien khai 4 sprint (goi y)

### Sprint 1 (Nen tang gameplay)

1. Refactor `Children.jsx` theo component.
2. Dung du lieu local JSON (chua can backend).
3. Hoan thien flow video -> decision -> final.

### Sprint 2 (Backend + DB)

1. Tao backend Express + MongoDB.
2. Tao modules lessons, attempts.
3. Frontend goi API that thay local JSON.

### Sprint 3 (Admin CRUD)

1. Tao trang admin lesson list/editor.
2. Tao node editor + validate graph.
3. Them upload media.

### Sprint 4 (Phan tich + bao cao)

1. Dashboard ket qua.
2. Xuat du lieu cho AI pipeline.
3. Them quy trinh version/publish an toan.

## 11. Checklist nghiem thu

1. Tre hoan thanh duoc 1 lesson va ra duoc tong diem.
2. Moi lua chon deu duoc ghi vao DB (khong mat ban ghi).
3. Admin co the tao lesson moi ma khong sua code.
4. Lesson publish moi khong anh huong lesson dang choi.
5. Dashboard xem duoc ket qua theo bai hoc va thoi gian.

## 12. Lenh khoi tao nhanh (goi y)

Tu thu muc goc `KidsApp`:

```bash
# frontend
cd frontend
npm install
npm run dev

# backend (sau khi tao)
cd ../backend
npm init -y
npm install express cors mongoose zod dotenv
npm install -D nodemon
```

## 13. Nguyen tac quan trong

1. Gameplay khong hard-code scene trong source code.
2. Moi thay doi noi dung bai hoc phai di qua admin va duoc publish.
3. Frontend la renderer, backend moi la nguon su that cua du lieu.
4. Tu sprint 2 tro di, luon luu answer theo su kien (event-style), tranh chi luu diem tong.

---

Neu ban muon, buoc tiep theo nen lam ngay la:

1. Tao skeleton backend module `lessons` + `attempts`.
2. Refactor `frontend/src/pages/Children.jsx` thanh data-driven player.
3. Tao 1 lesson seed dau tien tu dung du lieu PoC hien co.