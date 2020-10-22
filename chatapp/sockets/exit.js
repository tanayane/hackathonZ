'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exitEvent', function (data) {
        socket.broadcast.emit('sendExitMessage', data + 'さんが退室しました');
    });
};
