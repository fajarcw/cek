module['exports'] = function cobaBot (hook) {
  var request = require('request');
  request
    .post('https://api.telegram.org/bot' + hook.env.coba_bot_key + '/sendMessage')
    .form({
      "chat_id": hook.params.message.chat.id,
      "text": "anda mengirim: " + hook.params.message.text
    });
};
