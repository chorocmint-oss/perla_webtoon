Perla Crack Webtoon Template

목적:
- 크랙 상세설명에 {{img::주소}}로 이어붙일 1216x832 비율의 웹툰 패널 제작용 템플릿입니다.
- 실제 렌더는 2배 크기인 2432x1664 PNG로 출력됩니다.
- 누나는 assets 폴더 안의 placeholder 이미지를 같은 파일명으로 교체하면 됩니다.

폴더 구조:
index.html
styles.css
export_panels.js
package.json
assets/
  01_laguna_lake.jpg
  02_white_lily_closeup.jpg
  03_black_carriage_palace.jpg
  04_carriage_wheel_door.jpg
  05_letter_gap_texture.jpg
  06_refusal_request.jpg
  07_carmin_age20.jpg
  08_ruben_backstreet.jpg
  09_letter_sword_flower.jpg
  10_lilia_goodbye.webp
  12_lilia_poisoned_room.jpg

주의:
- 10_lilia_goodbye.webp는 움직이는 webp 패널 미리보기용입니다.
- export_panels.js는 10번 webp 패널을 PNG로 렌더하지 않습니다.
- 움직이는 webp는 크랙에 따로 업로드해서 {{img::주소}}로 끼워 넣으면 됩니다.
- 11번 패널은 별도 이미지 없이 검은 텍스트 패널로 렌더됩니다.

사용법:
1. assets 폴더의 placeholder 파일들을 누나가 만든 실제 이미지로 교체합니다.
2. 파일명은 그대로 유지하는 게 제일 편합니다.
3. 자막 문구를 바꾸고 싶으면 index.html 안의 문장을 수정합니다.
4. 브라우저로 index.html을 열어 미리 봅니다.
5. PNG 추출은 로컬 컴퓨터에서 아래 명령어를 실행합니다.

명령어:
npm install
npx playwright install chromium
npm run export

결과:
exports_2x 폴더 안에 2432x1664 PNG 패널들이 생성됩니다.
이 PNG들을 크랙에 업로드한 뒤, 크랙이 준 주소를 {{img::주소}} 형태로 상세설명에 붙이면 됩니다.

GitHub Pages:
- GitHub 저장소에는 index.html, styles.css, assets 폴더 등을 그대로 올리면 미리보기 페이지로 볼 수 있습니다.
- GitHub가 PNG 렌더를 대신 해주지는 않습니다. PNG 추출은 로컬에서 npm run export로 해야 합니다.
