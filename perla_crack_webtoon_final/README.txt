페를라 크랙 상세설명용 웹툰 템플릿

구조:
index.html
styles.css
export_bundles.js
export_panels.js
package.json
assets/

미리보기:
index.html을 브라우저로 열면 됩니다.
브라우저에서는 축소되어 보이지만, 렌더링 결과는 2432x1664 기준입니다.

기본 렌더링:
1. 이 폴더에서 터미널 열기
2. npm install
3. npx playwright install chromium
4. npm run export

결과:
exports_2x/part_01_before_goodbye.png
exports_2x/part_02_after_goodbye.png

크랙 업로드 순서:
1) part_01_before_goodbye.png
2) 10_lilia_goodbye.webp  ← assets 안의 webp를 크랙에 따로 업로드
3) part_02_after_goodbye.png

크랙 상세설명 예시:
{{img::첫번째긴이미지주소}}
{{img::webp주소}}
{{img::두번째긴이미지주소}}

긴 이미지가 업로드되지 않을 때:
npm run export:panels

결과:
exports_panels_2x/ 폴더에 컷별 PNG가 따로 생성됩니다.
그때는 컷별로 업로드하면 됩니다.

주의:
- 4번 webp는 PNG 렌더링에서 제외됩니다.
- webp 위 자막은 미리보기용 HTML 오버레이입니다. 실제 webp 파일 자체에 자막을 넣으려면 별도 편집이 필요합니다.
- 텍스트 수정은 index.html에서 문장만 바꾼 뒤 다시 npm run export 하면 됩니다.
- 이미지 교체는 assets 폴더 안의 파일을 같은 파일명으로 덮어쓰면 됩니다.
