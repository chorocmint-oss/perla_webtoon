Perla Crack Webtoon Final

목적
- 크랙 상세설명에 {{img::주소}} 형식으로 올릴 긴 웹툰 이미지 제작용 템플릿입니다.
- HTML/CSS는 편집과 렌더링용입니다. 최종 업로드는 exports_2x 폴더의 PNG와 assets/10_lilia_goodbye.webp를 사용하세요.

기본 구성
- part_01_before_goodbye.png : 1번~3번 묶음
- 10_lilia_goodbye.webp : 4번 움직이는 컷, 별도 업로드
- part_02_after_goodbye.png : 5-A~8번 묶음

파일 구조
index.html
styles.css
export_bundles.js
export_panels.js
package.json
assets/

사용법
1. index.html을 브라우저로 열어 미리보기 확인
2. 문구를 고치고 싶으면 index.html에서 텍스트만 수정
3. 글자 크기/위치/효과를 고치고 싶으면 styles.css 수정
4. 터미널에서 아래 명령 실행

npm install
npx playwright install chromium
npm run export

5. exports_2x 폴더에 긴 이미지 2장이 생성됩니다.

크랙 업로드 순서
{{img::part_01_before_goodbye.png 업로드 주소}}
{{img::10_lilia_goodbye.webp 업로드 주소}}
{{img::part_02_after_goodbye.png 업로드 주소}}

긴 이미지가 크랙에서 안 올라가면 컷별 렌더링 사용
npm run export:panels

그러면 exports_panels_2x 폴더에 패널별 PNG가 생성됩니다.

주의
- ZIP 파일 자체를 GitHub에 올리지 말고, 압축을 푼 뒤 안의 파일들을 저장소에 업로드하세요.
- assets 폴더의 파일명은 index.html에 적힌 src와 같아야 합니다.
- 8번 마지막 이미지는 assets/13_winter_threshold.jpg 입니다.
