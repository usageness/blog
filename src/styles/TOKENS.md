# Design Tokens

`src/styles/` 디렉토리의 토큰 정의 문서입니다.

---

## Color (`color.ts`)

| Token        | Value       | 용도                                                 |
| ------------ | ----------- | ---------------------------------------------------- |
| `WHITE_001`  | `#ffffff`   | 기본 흰색                                            |
| `WHITE_002`  | `#ffffffcc` | 반투명 흰색                                          |
| `BLACK_001`  | `#000000`   | 기본 텍스트, 제목                                    |
| `GREEN_001`  | `#328400`   | 강조 (hover, active, selection)                      |
| `GREEN_002`  | `#66a73e`   | 링크                                                 |
| `GREEN_003`  | `#aecf9a`   | 링크 underline, blockquote border, 카드 hover border |
| `GRAY_001`   | `#444444`   | 보조 텍스트                                          |
| `GRAY_002`   | `#888888`   | 날짜, 메타 정보                                      |
| `GRAY_003`   | `#cccccc`   | 테이블 border                                        |
| `GRAY_004`   | `#eeeeee`   | 구분선, 카드 border, 코드 블록 배경                  |
| `YELLOW_001` | `#847154`   | —                                                    |
| `YELLOW_002` | `#caaf1f`   | —                                                    |
| `YELLOW_003` | `#d3c0a4`   | Footer 링크                                          |
| `YELLOW_004` | `#b9a485`   | —                                                    |
| `BROWN_001`  | `#a44d00`   | —                                                    |

---

## Breakpoint (`breakpoint.ts`)

| Token | Value    | 용도                      |
| ----- | -------- | ------------------------- |
| `sm`  | `425px`  | 소형 모바일 분기          |
| `md`  | `768px`  | 모바일/태블릿 분기        |
| `lg`  | `1100px` | 태블릿/데스크탑 분기      |
| `xl`  | `1440px` | 헤더 네비게이터 숨김 분기 |

---

## Typography (`typography.ts`)

### Size

| Token  | Value             | 용도                                |
| ------ | ----------------- | ----------------------------------- |
| `xs`   | `0.75rem` (12px)  | 캡션, 레이블, 날짜, 네비게이션 링크 |
| `sm`   | `0.875rem` (14px) | 메타 정보, 코드, 보조 텍스트        |
| `base` | `1rem` (16px)     | 본문 기준                           |
| `lg`   | `1.125rem` (18px) | UI 헤딩 (로고, 프로필 이름)         |
| `xl`   | `1.25rem` (20px)  | h3, 목록 아이템 제목                |
| `2xl`  | `1.5rem` (24px)   | h2, 섹션 제목                       |
| `3xl`  | `1.875rem` (30px) | 포스트 본문 h1                      |
| `4xl`  | `2.25rem` (36px)  | 포스트 페이지 제목                  |

### Line Height

| Token     | Value   | 용도         |
| --------- | ------- | ------------ |
| `tight`   | `1.25`  | 큰 제목      |
| `snug`    | `1.375` | 소제목       |
| `normal`  | `1.5`   | 일반 UI      |
| `relaxed` | `1.625` | 본문, 리스트 |
| `loose`   | `1.85`  | 장문 콘텐츠  |

### Font Weight

| Token      | Value | 용도                                          |
| ---------- | ----- | --------------------------------------------- |
| `regular`  | `400` | 본문, 보조 텍스트                             |
| `semibold` | `600` | 레이블, 강조 UI                               |
| `bold`     | `700` | 제목, 헤딩                                    |
| `black`    | `900` | 최상위 제목 (폰트 패밀리 SCDreamBlack과 함께) |

### Text Style

토큰을 조합한 시맨틱 텍스트 스타일입니다. styled-components 내에서 `${TYPOGRAPHY.textStyle.xxx}` 형태로 사용합니다.

| Style            | size   | lineHeight | fontWeight | 사용처                                    |
| ---------------- | ------ | ---------- | ---------- | ----------------------------------------- |
| `postTitle`      | `4xl`  | `tight`    | `bold`     | 포스트 페이지 제목 (`<h1>`)               |
| `sectionHeading` | `3xl`  | `snug`     | `bold`     | 포스트 본문 h1                            |
| `subHeading`     | `2xl`  | `snug`     | `bold`     | 포스트 본문 h2                            |
| `itemHeading`    | `xl`   | `normal`   | `bold`     | 포스트 본문 h3, 목록 아이템 제목          |
| `uiHeading`      | `lg`   | `normal`   | `bold`     | 헤더 로고, 프로필 이름                    |
| `body`           | `base` | `loose`    | `regular`  | 포스트 장문 본문                          |
| `ui`             | `base` | `normal`   | `regular`  | 일반 UI 텍스트                            |
| `meta`           | `sm`   | `normal`   | `regular`  | 날짜, 읽기 시간, 부제목, 코드, blockquote |
| `label`          | `xs`   | `normal`   | `semibold` | 레이블, 캡션, 네비게이션 링크             |

#### 사용 예시

```ts
const Title = styled.h1`
  ${TYPOGRAPHY.textStyle.postTitle}
  padding: 1rem 0 0.5rem 0;

  @media only screen and (max-width: ${BREAKPOINTS.md}px) {
    font-size: ${TYPOGRAPHY.size['2xl']};
  }
`;
```

모바일 반응형 분기는 `TYPOGRAPHY.size` 토큰으로 개별 override합니다.
