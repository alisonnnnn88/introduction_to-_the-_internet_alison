import React from 'react';
import { createRoot } from 'react-dom/client';
import AItest from './AItest';
import './index.css';

const el = document.getElementById('react-root');
if (el) {
  createRoot(el).render(<AItest />);
}