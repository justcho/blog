# vue-native-websocket 使用
```javascript

//main.js
import websocket from "vue-native-websocket";

Vue.use(websocket, "", {
  connectManually: true, // 手动连接
  format: "json", // json格式
  reconnection: true, // (Boolean)是否自动重连，默认false
  reconnectionAttempts: 100, // 重连次数
  reconnectionDelay: 3000, // 再次重连等待时常(1000)
});

export default {
  data() {
    return {
      socketData: {},
      chatRoom: false,
      connectStatus: false,
      heartCheck: null,
      model: null,
      timer: null,
    };
  },
  mounted() {
    this.initWebSocket();
  },
  methods: {
    // 初始化weosocket
    initWebSocket() {
      this.$connect('xxx', { format: "json" });
      this.$socket.onopen = this.websocketonopen; //连接成功方法
      this.$socket.onerror = this.websocketonerror; //报错方法
      this.$socket.onmessage = this.websocketonmessage; // 接收端返回或推送信息的方法
      this.$socket.onclose = this.websocketclose; //关闭
    },
    websocketonopen(e) {
      //  链接ws服务器，e.target.readyState = 0/1/2/3
      //0 CONNECTING ,1 OPEN, 2 CLOSING, 3 CLOSED
      console.log("WebSocket连接成功", e.target.readyState);
      setTimeout(() => {
        this.imLogin();
        if (this.chatRoom) {
          setTimeout(() => {
            this.loginRoom();
          }, 1000);
        }
      }, 500);
    },

    websocketonmessage(e) {
      //数据接收
      let res = JSON.parse(e.data);
      console.log("type:", res?.header?.command);
      // console.log(res.body, "!!!!!!!!!");
    },

    websocketonerror(e) {
      //错误
      console.log("WebSocket连接发生错误");
    },
    websocketsend(e) {
      //数据发送
      this.$socket.send(JSON.stringify(e));
      // console.log(this.$socket.readyState); //    当前链接状态 https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket#%E5%B8%B8%E9%87%8F
    },

    websocketclose(e) {
      //关闭链接时触发
      var code = e.code; //  状态码表 https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent
      var reason = e.reason;
      var wasClean = e.wasClean;
      console.log("错误信息：", e);
      console.log(code, reason, wasClean);
      if (code === 1006) {
        setTimeout(() => {
          this.initWebSocket();
        }, 3000);
      }
    },
  },
  beforeDestroy() {
    // 手动断开连接
    this.$disconnect();
  },
};
```