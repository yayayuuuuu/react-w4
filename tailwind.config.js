module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // 設定你的內容檔案
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // 加入 DaisyUI 插件
  }