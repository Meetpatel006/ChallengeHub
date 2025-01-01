# 🚀 CodeQuest

<div align="center">
  <img src="assets/github_icon.png" alt="ChallengeHub Logo" width="128" height="128">
  <p><em>Your Daily Coding Challenge Companion</em></p>
</div>

## 📖 Overview

ChallengeHub is a powerful browser extension designed to enhance your coding practice through daily LeetCode and Codeforces challenges. Drawing inspiration from The Coding Sloth Project, we've created an engaging platform that makes consistent coding practice both fun and rewarding.

## ✨ Key Features

### 🎯 Problem Selection
- Daily challenges from LeetCode and Codeforces
- Customizable difficulty levels
- Multiple curated problem sets:
  - **LeetCode**:
    - Complete Problem Bank
    - NeetCode 150 (Comprehensive DSA Coverage)
    - Blind 75 (Top Interview Problems)
  - **Codeforces**:
    - Full Problem Archive

### 🔥 Progress Tracking
- Daily streak monitoring
- Personal best records
- HyperTorture mode for intensive practice
- Detailed progress analytics

### 🎨 User Experience
- Clean, intuitive interface with eye-comfortable color scheme
- Carefully selected colors to reduce eye strain:
  - Light gray background (#f7fafc)
  - Soft dark text (#2d3748)
  - Gentle hover effects
  - Reduced shadow intensity
- Flexible difficulty customization
- Comprehensive progress dashboard
- Achievement system

### 🎨 Color Scheme

The UI has been designed with an eye-comfortable color palette:

#### Base Colors
- Background: Light gray (#f7fafc)
- Primary Text: Soft dark blue-gray (#2d3748)
- Secondary Text: Medium gray (#4a5568)
- Borders: Light gray (#e2e8f0)

#### Interactive Elements
- Button Background: Very light gray (#edf2f7)
- Button Hover: Slightly darker gray (#e2e8f0)
- Icons: Soft dark blue-gray (#2d3748)

#### Effects
- Shadows: Reduced opacity (0.05-0.1)
- Modal Overlay: Light opacity (0.3)
- Smooth transitions for all interactive elements

This color scheme was carefully chosen to:
- Minimize eye strain during extended use
- Maintain excellent readability
- Provide clear visual hierarchy
- Ensure sufficient contrast for accessibility

## 🛠️ Installation Guide

### System Requirements
- Node.js (v16+)
- pnpm (recommended) or npm
- Git

### Windows Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/MeetPatel006/challengehub.git
   cd challengehub
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Build Extension**
   ```bash
   pnpm build
   ```

4. **Chrome Installation**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select `build/chrome-mv3-prod` directory

### Linux Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/MeetPatel006/challengehub.git
   cd challengehub
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Build Extension**
   For Chrome:
   ```bash
   pnpm build
   ```
   
   For Firefox:
   ```bash
   pnpm build-firefox
   ```

4. **Browser Installation**
   - **Chrome**:
     - Go to `chrome://extensions/`
     - Enable "Developer mode"
     - Click "Load unpacked"
     - Select `build/chrome-mv3-prod` directory
   
   - **Firefox**:
     - Visit `about:debugging#/runtime/this-firefox`
     - Click "Load Temporary Add-on"
     - Select `manifest.json` from `build/firefox-mv3-prod` directory

### Development Server

For active development with hot reload:

1. **Start Development Server**
   For Chrome:
   ```bash
   pnpm dev
   ```
   
   For Firefox:
   ```bash
   pnpm dev-firefox
   ```

2. **Load Extension**
   - For Chrome: Load `build/chrome-mv3-dev` directory
   - For Firefox: Load `manifest.json` from `build/firefox-mv3-dev` directory

The development server will automatically reload changes as you modify the code.

## 📄 Recent Modifications

### January 2024 Updates

#### UI Enhancement
- Implemented eye-comfortable color scheme with soft grays (#f7fafc, #2d3748)
- Reduced contrast and shadow intensities for better readability
- Updated icons and interactive elements for visual consistency

#### Platform Integration
- Added Codeforces problems integration
- New difficulty selection for Codeforces problems
- Synchronized progress tracking across both platforms

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact & Socials

For any questions or feedback, feel free to reach out through any of these channels:

- Email: work.meetpatel221@gmail.com
- LinkedIn: [Meet Patel](https://bit.ly/3NELCvd)

## 📄 Contributing

We welcome contributions to enhance the functionality and user experience of ChallengeHub. Please see our [CONTRIBUTING](CONTRIBUTING.md) for guidelines on how to submit improvements and bug fixes.


## 📄 Acknowledgements

- The Coding Sloth Project for the initial concept and inspiration.

---

Thank you for using ChallengeHub! We hope it helps you stay consistent and improve your coding skills. Happy coding!
