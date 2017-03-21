module['exports'] = function cobaBot(hook) {

    var request = require('request');
    var simiUrl = 'http://sandbox.api.simsimi.com/request.p?key=c307710b-18ae-40ea-8962-01b8a814bf3a&lc=id&ft=1.0&text='+hook.params.message.text;

    request(simiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            request.post('https://api.telegram.org/bot' + hook.env.coba_bot_key + '/sendMessage')
            .form({
                "chat_id": hook.params.message.chat.id,
                "text": data.response
            });
        }
    });
};`
