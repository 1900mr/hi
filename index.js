// استيراد المكتبة
const TelegramBot = require('node-telegram-bot-api');

// توكن البوت الخاص بك (استبدله بتوكنك)
const token = '7535227356:AAFLDYFdcbxFMa9RuP82ukXBZIvSUK5uDKU';

// إنشاء البوت
const bot = new TelegramBot(token, { polling: true });

// التعامل مع الرسائل الواردة
bot.on('message', (msg) => {
    const chatId = msg.chat.id; // معرف المحادثة

    // إرسال الرد "هاي"
    bot.sendMessage(chatId, 'هاي!');
});

console.log('البوت يعمل الآن...');
