import { GoogleGenAI } from '@google/genai';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MovieAssistant({
  defaultModel = 'gemini-2.5-flash',
}) {
  const [model, setModel] = useState(defaultModel);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [rememberKey, setRememberKey] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showGenreButtons, setShowGenreButtons] = useState(false);
  const listRef = useRef(null);

  const genres = ['科幻', '懸疑', '動作', '愛情', '動畫', '動漫'];

  // Load key from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('gemini_api_key');
    if (saved) setApiKey(saved);
  }, []);

  // 初始訊息
  useEffect(() => {
    setHistory([{ role: 'model', parts: [{ text: '這裡是電影小高手，有任何關於電影的問題都可以問喔~' }] }]);
  }, []);

  // 自動捲到底部
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [history, loading]);

  const ai = useMemo(() => {
    try {
      return apiKey ? new GoogleGenAI({ apiKey }) : null;
    } catch {
      return null;
    }
  }, [apiKey]);

  async function sendMessage(message) {
    const content = (message ?? input).trim();
    if (!content || loading) return;
    if (!ai) {
      setError('請先輸入有效的 Gemini API Key');
      return;
    }

    setError('');
    setLoading(true);

    const newHistory = [...history, { role: 'user', parts: [{ text: content }] }];
    setHistory(newHistory);
    setInput('');

    try {
      const resp = await ai.models.generateContent({
        model,
        contents: newHistory,
      });

      const reply = resp.text || '[No content]';
      setHistory((h) => [...h, { role: 'model', parts: [{ text: reply }] }]);
    } catch (err) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  async function fetchGenreMovies(genre) {
    if (!ai) {
      setError('請先輸入有效的 Gemini API Key');
      return;
    }
    setError('');
    setLoading(true);
    const prompt = `請列出近期熱門的${genre}電影，包含片名、上映日期和簡短描述。`;
    try {
      const resp = await ai.models.generateContent({
        model,
        contents: [
          ...history,
          { role: 'user', parts: [{ text: prompt }] }
        ],
      });
      const reply = resp.text || '[No content]';
      setHistory((h) => [...h, { role: 'model', parts: [{ text: reply }] }]);
    } catch (err) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  function renderMarkdownLike(text) {
    return (
      <div style={{ fontSize: 14, lineHeight: 1.6 }}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    );
  }

  function handleHotMoviesClick() {
    setShowGenreButtons(prev => !prev); // 顯示/消失類型篩選按鈕
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.header}>電影小高手</div>
        {/* 熱門電影按鈕 */}
        <button
        style={{ ...styles.headerBtn, background: '#ffb74d', color: '#1e1e2f' }}
        onClick={handleHotMoviesClick}
        >
        🔥 熱門電影
        </button>

        {/* 類型篩選按鈕 */}
        {showGenreButtons &&
        genres.map((g) => (
            <button
            key={g}
            style={{ ...styles.headerBtn, background: '#7986cb', color: '#fff' }}
            onClick={() => fetchGenreMovies(g)}
            >
            {g}
            </button>
        ))}

        {/* Controls */}
        <div style={styles.controls}>
          <label style={styles.label}>
            <span>Model</span>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="例如 gemini-2.5-flash、gemini-2.5-pro"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            <span>Gemini API Key</span>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => {
                const v = e.target.value;
                setApiKey(v);
                if (rememberKey) localStorage.setItem('gemini_api_key', v);
              }}
              placeholder="貼上你的 API Key"
              style={styles.input}
            />
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, fontSize: 12 }}>
              <input
                type="checkbox"
                checked={rememberKey}
                onChange={(e) => {
                  setRememberKey(e.target.checked);
                  if (!e.target.checked) localStorage.removeItem('gemini_api_key');
                  else if (apiKey) localStorage.setItem('gemini_api_key', apiKey);
                }}
              />
              <span>記住在本機（localStorage）</span>
            </label>
          </label>
        </div>

        {/* Messages */}
        <div ref={listRef} style={styles.messages}>
          {history.map((m, idx) => (
            <div
              key={idx}
              style={{
                ...styles.msg,
                ...(m.role === 'user' ? styles.user : styles.assistant),
              }}
            >
              <div style={styles.msgRole}>
                {m.role === 'user' ? 'You' : 'Gemini'}
              </div>
              <div style={styles.msgBody}>
                {renderMarkdownLike(m.parts.map((p) => p.text).join('\n'))}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ ...styles.msg, ...styles.assistant }}>
              <div style={styles.msgRole}>Gemini</div>
              <div style={styles.msgBody}>思考中…</div>
            </div>
          )}
        </div>

        {/* Error */}
        {error && <div style={styles.error}>⚠ {error}</div>}

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          style={styles.composer}
        >
          <input
            placeholder="想問電影小高手什麼問題呢?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.textInput}
          />
          <button
            type="submit"
            disabled={loading || !input.trim() || !apiKey}
            style={styles.sendBtn}
          >
            送出
          </button>
        </form>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
          {['分析電影《96分鐘》裡角色的心理動機', '給我《蝙蝠俠：黑暗騎士》的三點優缺評', '依照《你的名字》的色調，給我拍照或海報配色建議'].map((q) => (
            <button key={q} type="button" style={styles.suggestion} onClick={() => sendMessage(q)}>{q}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: { display: 'grid', placeItems: 'start', padding: 16, fontFamily: `'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif`, background: '#121212' },
  card: { width: 'min(900px, 100%)', background: '#1e1e2f', border: '1px solid #333', borderRadius: 16, overflow: 'hidden', color: '#e0e0e0' },
  header: { padding: '10px 12px', fontWeight: 700, borderBottom: '1px solid #333', background: '#2c2c3c', color: '#ffcc00', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  headerBtn: { padding: '6px 10px', borderRadius: 999, border: '1px solid #ffcc00', background: '#ffcc00', color: '#1e1e2f', cursor: 'pointer', fontSize: 12, fontWeight: 700 },
  controls: { display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr', padding: 12 },
  label: { display: 'grid', gap: 6, fontSize: 13, fontWeight: 600, color: '#e0e0e0' },
  input: { padding: '10px 12px', borderRadius: 10, border: '1px solid #555', fontSize: 14, background: '#2c2c3c', color: '#fff' },
  messages: { padding: 12, display: 'grid', gap: 10, maxHeight: 420, overflow: 'auto' },
  msg: { borderRadius: 12, padding: 10, border: '1px solid #555' },
  user: { background: '#3949ab', borderColor: '#5c6bc0', color: '#fff' },
  assistant: { background: '#424242', borderColor: '#616161', color: '#e0e0e0' },
  msgRole: { fontSize: 12, fontWeight: 700, opacity: 0.7, marginBottom: 6, color: '#ffcc00' },
  msgBody: { fontSize: 14, lineHeight: 1.5 },
  error: { color: '#f44336', padding: '4px 12px' },
  composer: { padding: 12, display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, borderTop: '1px solid #333' },
  textInput: { padding: '10px 12px', borderRadius: 10, border: '1px solid #555', fontSize: 14, background: '#2c2c3c', color: '#fff' },
  sendBtn: { padding: '10px 14px', borderRadius: 999, border: '1px solid #ffcc00', background: '#ffcc00', color: '#1e1e2f', fontSize: 14, cursor: 'pointer' },
  suggestion: { padding: '6px 10px', borderRadius: 999, border: '1px solid #5c6bc0', background: '#5c6bc0', color: '#fff', cursor: 'pointer', fontSize: 12 },
};