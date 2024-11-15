const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// استيراد التوكن من ملف .env
const token = process.env.TELEGRAM_BOT_TOKEN;

// إنشاء البوت
const bot = new TelegramBot(token, { polling: true });

// الاستجابة للرسائل النصية
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // مثال: إذا كتب المستخدم "مرحبا" يرد البوت برسالة ترحيبية
    if (text.toLowerCase() === 'مرحبا') {
        bot.sendMessage(chatId, 'أهلاً بك في البوت!');
    } else {
        bot.sendMessage(chatId, 'مرحبًا! كيف يمكنني مساعدتك؟');
    }
});
