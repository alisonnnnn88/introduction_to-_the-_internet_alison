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
- hw 3  [解說影片](https://youtube.com)  | [AItest.tsx](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/AItest.tsx)
<details>
  <summary>Demo 說明</summary>

<br>
-**這個專案是一個電影小高手，可以幫助喜歡看電影的朋友們快速搜索AI推薦的熱門電影，或是對相關電影影評、海報設計等等有興趣也可以問這個AI。**
- 這邊主要有兩個功能:
  一、畫面上方可以點選【🔥 熱門電影】，讓使用者挑選想看的類型點選由AI為您解答此類型的熱門電影
  二、畫面下方有對話框，可以自行輸入文字詢問AI關於電影的問題，也可以參考紫色按鈕的問題，幫助使用者有更好的詢問方向
- 畫面的呈現:
  我這次主要以暗色系呈現背景，黃色或白色顯示文字，展現一種科技感。
- 程式碼與功能說明:
- ✅ **1. 熱門電影可以篩選類型**  
<img width="1848" height="597" alt="image" src="https://github.com/user-attachments/assets/30b81683-d0b8-4481-a93b-81d1bb65ee77" />
<img width="1891" height="615" alt="image" src="https://github.com/user-attachments/assets/d219bc55-ba52-410d-8dff-41575fd4a3ce" />
- ✅ **2. 安裝 ReactMarkdown**  
  支援 AI 回應以粗體或表情符號標示重點。
<img width="1856" height="689" alt="image" src="https://github.com/user-attachments/assets/e93d1eec-e686-4199-9b39-1ac7f61a8a00" />
-✅ **3. 對話框以灰字顯示，等待使用者輸入文字**
  以 placeholder 呈現灰字的部分(灰色為預設)
<img width="1847" height="123" alt="image" src="https://github.com/user-attachments/assets/f255c03f-1a48-4ef2-b831-af860cb0d52f" />
-✅ **4. 以紫色按鈕提示使用者怎麼問AI**
<img width="1633" height="102" alt="image" src="https://github.com/user-attachments/assets/cfe6b4ad-283e-4f3a-a557-db72cedf141f" />
-✅ **5. 有成功出現 Loading 狀態**
<img width="1847" height="330" alt="image" src="https://github.com/user-attachments/assets/cc2dc6f1-6aca-42a0-bcb9-f0aad6090c35" />

</details>
