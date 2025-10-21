# 網際網路概論
- 授課老師：蔡芸琤  
- hw 1  [my website](https://alisonnnnn88.github.io/introduction_to-_the-_internet_alison/)
- hw 2  [解說影片](https://youtu.be/0LIIIj9rs88) | [AItest.tsx](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/AItest.tsx)
- hw 3  [解說影片](https://youtu.be/cJjc5HpTFEM) | [AItest.js](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/AItest.js) | [index.html](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/index.html) | [index.js](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/index.js) | [新的repo](https://github.com/alisonnnnn88/app_website)
- hw4 [Render 網址](https://app-website-3.onrender.com/)
---

<details>
<summary><strong>HW2：AItest.tsx 變更說明</strong></summary>

<br>

- ✅ **1. 函式名稱變更**  
  `AItest` → `HealthAssistant`  
  目的：將聊天機器人改為「健康助手」，功能定位更明確

- ✅ **2. 預設提示變更**  
  '嗨！幫我測試一下台北旅遊的一日行程～' → '嗨！我今天需要記得喝水和運動～'  

- ✅ **3. 初始歡迎語變更**  
  '👋 這裡是 Gemini 小幫手，有什麼想聊的？' → '👋 這裡是健康助手，我會幫你提醒喝水、運動等！'

- ✅ **4. Markdown 支援改為使用 `react-markdown` 套件**  
  <img width="600" alt="image" src="https://github.com/user-attachments/assets/b068bb27-0989-492e-8a24-584a6c5a458e" />

- ✅ **5. 引入套件**  
  `import ReactMarkdown from 'react-markdown';`

- ✅ **6. 修改提示句按鈕內容為健康主題**  
 原本： 今天台北有什麼免費展覽？/幫我把這段英文翻成中文：Hello from Taipei!/寫一首關於捷運的短詩 → 後來： 今天需要喝水提醒/請建議我一天三餐/幫我安排一個簡單的運動計劃
 目的：更貼近健康主題，也更讓使用者知道怎麼問 AI 健康助手。

- ✅ **7. 加入 emoji 字型**  
  <img width="600" alt="image" src="https://github.com/user-attachments/assets/c49e30b6-a691-4b00-a5e4-e96a476f8402" />
  目的：使用表情符號清楚標示重點文字，讓使用者快速抓到重點建議。

- ✅ **8. 頁面標題修改**  
  `Gemini Chat` → `健康助手（Gemini API）`
  目的：在網頁最上面清楚標示 AI 助手名稱。

</details>

---

<details>
<summary><strong>HW3 Demo 說明</strong></summary>

<br>

這個專案是一個**電影小高手**，可以幫助喜歡看電影的朋友們快速搜索 AI 推薦的熱門電影，或是對相關電影影評、海報設計等等有興趣也可以問這個 AI。

---

### 功能介紹

1. 畫面上方可以點選【🔥 熱門電影】，讓使用者挑選想看的類型，點選後由 AI 為您解答此類型的熱門電影 
2. 畫面下方有對話框，可以自行輸入文字詢問 AI 關於電影的問題，也可以參考紫色按鈕的問題，幫助使用者有更好的詢問方向
(使用的API: gemini-2.5-flash)

---

### 畫面設計

以暗色系呈現背景，黃色或白色顯示文字，展現一種科技感。

---

### 功能實作截圖

#### ✅ 熱門電影可篩選類型  
<img width="664" src="https://github.com/user-attachments/assets/10c2f70b-bc30-4513-b35b-ba83a4138b0d" />  
<img width="646" src="https://github.com/user-attachments/assets/dd12d3a7-b507-48fb-bfaf-7a6f4120bb0c" />

#### ✅ 安裝 ReactMarkdown：支援 AI 回應以粗體或表情符號標示重點 
<img width="1856" src="https://github.com/user-attachments/assets/e93d1eec-e686-4199-9b39-1ac7f61a8a00" />

#### ✅ 對話框以灰字顯示，等待使用者輸入文字：以 placeholder 呈現灰字的部分（灰色為預設）  
<img width="1847" src="https://github.com/user-attachments/assets/f255c03f-1a48-4ef2-b831-af860cb0d52f" />

#### ✅ 以紫色按鈕提示使用者怎麼問 AI  
<img width="1633" src="https://github.com/user-attachments/assets/cfe6b4ad-283e-4f3a-a557-db72cedf141f" />

#### ✅ 有成功出現 Loading 狀態  
<img width="1847" src="https://github.com/user-attachments/assets/cc2dc6f1-6aca-42a0-bcb9-f0aad6090c35" />

</details>
