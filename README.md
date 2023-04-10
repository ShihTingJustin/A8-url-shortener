# URL Shortener 短網址產生器

## 介紹

將長長的網址縮成短短的「短網址產生器」

## 功能

- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址轉址到原本網址

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start
   ```

5. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

6. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## E2E 測試
1. 確認 server, database 已經成功啟動

2. 開一個新的終端機
3. 使用指令啟動 Cypress
   ```bash
   npm run cy
   ```
4. 點擊 E2E Testing 圖示
5. 選擇 Chrome 瀏覽器，點擊 Start E2E Testing in Chrome 按鈕
6. 瀏覽器會開啟 Cypress 提供的 Web，點擊 test.cy.js
7. Enjoy it!

## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 5.3.3
- MongoDB
- mongoose 6.0.5
