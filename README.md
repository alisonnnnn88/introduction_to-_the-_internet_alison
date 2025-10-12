# 網際網路概論
- 授課老師：蔡芸琤
- hw 1  [my website](https://alisonnnnn88.github.io/introduction_to-_the-_internet_alison/)
- hw 2  [解說影片](https://youtu.be/0LIIIj9rs88)  | [AItest.tsx](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/AItest.tsx)
<details>
  <summary>AItest.tsx 變更說明</summary>

<br>

- ✅ **1. 函式名稱變更**  
  原本：`AItest` → 後來：`HealthAssistant`  
  **目的**：將聊天機器人改為有主題性的「健康助手」，功能定位更清楚。

- ✅ **2. starter 預設提示變更**  
  原本：'嗨！幫我測試一下台北旅遊的一日行程～'  
  後來：'嗨！我今天需要記得喝水和運動～'  
  **目的**：修改成與健康主題相關的開場訊息，強化角色定位。

- ✅ **3. 初始訊息（AI歡迎語）變更**  
  原本：'👋 這裡是 Gemini 小幫手，有什麼想聊的？'  
  後來：'👋 這裡是健康助手，我會幫你提醒喝水、運動等！'  
  **目的**：改成與「健康提醒」相關的歡迎語，更讓使用者知道這是一個專為健康設計的AI助手。

- ✅ **4. Markdown 支援方式變更**  
  → 修改 `renderMarkdownLike` 函式  
  原本：自行拆行渲染 div  
  後來：使用 `react-markdown` 套件處理 Markdown  
  <img width="600" height="400" alt="image" src="https://github.com/user-attachments/assets/b068bb27-0989-492e-8a24-584a6c5a458e" /><br><br>
  **目的**：讓 AI 回覆能支援 Markdown（例如粗體、標題、條列式等），改善訊息顯示效果。

- ✅ **5. 根據第 4 點，引入新套件**  
  `import ReactMarkdown from 'react-markdown';`

- ✅ **6. 提示句按鈕內容修改**  
  原本：  
  - 今天台北有什麼免費展覽？  
  - 幫我把這段英文翻成中文：Hello from Taipei!  
  - 寫一首關於捷運的短詩  
  
  後來：  
  - 今天需要喝水提醒  
  - 請建議我一天三餐  
  - 幫我安排一個簡單的運動計劃  
  **目的**：更貼近健康主題，也更讓使用者知道怎麼問 AI 健康助手。

- ✅ **7. 樣式變更：加入 emoji 字型**  
  <img width="600" height="150" alt="image" src="https://github.com/user-attachments/assets/c49e30b6-a691-4b00-a5e4-e96a476f8402" />  
  **目的**：使用表情符號清楚標示重點文字，讓使用者快速抓到重點建議。

- ✅ **8. 頁面標題修改**  
  原本：`Gemini Chat（直連 SDK，不經 proxy）`  
  後來：`健康助手（Gemini API）`  
  **目的**：在網頁最上面清楚標示 AI 助手名稱。

</details>
