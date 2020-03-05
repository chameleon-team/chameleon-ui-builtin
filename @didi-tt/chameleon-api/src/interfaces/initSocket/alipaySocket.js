
// 支付宝目前只支持一个socket连接

class AlipaySocket {

  constructor(url) {
    my.connectSocket({ url });
    return this;
  }

  onopen(cb) {
    my.onSocketOpen(function(res) {
      cb();
    });
  }

  onmessage(cb) {
    my.onSocketMessage(function(res) {
      cb(res && res.data);
    })
  }

  onerror(cb) {
    my.onSocketError(function(res){
      cb(res);
    });
  }

  onclose(cb) {
    my.onSocketClose((res) => {
      cb();
    });
  }

  send(data) {
    my.sendSocketMessage({
      data,
    });
  }

  close() {
    my.closeSocket();
  }

}

export default AlipaySocket;
