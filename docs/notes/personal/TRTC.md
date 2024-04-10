# TRTC

```javascript
// trtc v4
import TRTC from "trtc-js-sdk";
// 降噪插件
import RTCAIDenoiser from "rtc-ai-denoiser";
import { getSessionModerator, getOnlineUserList } from "@/api/session";
// 降噪文件
const rtcAIDenoiser = new RTCAIDenoiser({ assetsPath: "./assets" });


export default {
  data() {
    return {
      client: null,
      localStream: null,
      remoteStreamList: [],
      remoteId: "",
      roomDis: false,
      moderator: {},
      particlesList: [],
      processor: null,
      sType: "",
    };
  },
  mounted() {
    if (!rtcAIDenoiser.isSupported()) {
      alert("Your browser is not supported RTCAIDenoiser");
    }
  },
  methods: {
    // 远程流数组里是否存在
    findRemoteIndex(id) {
      // 不听主持人声音
      if (this.sType === "OFFLINE") {
        let matchingItem = this.remoteStreamList.find(
          (item) => item.getUserId() === this.moderator.uuid
        );
        matchingItem?.muteAudio();
      }
      return this.remoteStreamList.findIndex((i) => i.getUserId() === id);
    },
    // 客户进入
    async clientIn() {
      this.client = TRTC.createClient({
        mode: "live",
        sdkAppId: this.sdkAppId,
        userId: this.userId,
        userSig: this.userSig,
        enableAutoPlayDialog: false,
      });

      this.client.on("error", (error) => {
        console.error(error);
        alert(error);
      });
      this.client.on("client-banned", async (event) => {
        console.warn(`client has been banned for ${event.reason}`);
        if (event.reason == "room-disband") {
          this.roomDis = true;
        }
        this.leave();
      });
      this.client.on("stream-added", (event) => {
        const { stream: remoteStream } = event;
        // 订阅远端流
        this.subscribe(remoteStream);
      });
      this.client.on("stream-subscribed", (event) => {
        const { stream: remoteStream } = event;
        const remoteUserId = remoteStream.getUserId();
        if (remoteUserId === this.moderator.uuid) {
          setTimeout(() => {
            // 播放远端流
            remoteStream.play(this.moderator.uuid).catch((error) => {
              // 自动播放受限导致播放失败，此时引导用户点击页面。
              // 在点击事件的回调函数中，执行 stream.resume();
              this.$warning({
                title: "Please allow video playback",
                onOk() {
                  remoteStream.resume();
                },
                onCancel() {
                  console.log("Cancel");
                },
              });
            });
          }, 1000);
        }
        let index = this.remoteStreamList.findIndex(
          (i) => i.getUserId() === remoteUserId
        );
        if (index === -1) {
          this.remoteStreamList.push(remoteStream);
          this.getParticles(this.sessionId);
        }

          // setTimeout(() => {
          //   // 播放远端流
          //   remoteStream.play(remoteUserId).catch((error) => {
          //     if (remoteUserId === this.moderator.uuid) {
          //       // 自动播放受限导致播放失败，此时引导用户点击页面。
          //       // 在点击事件的回调函数中，执行 stream.resume();
        //       this.$warning({
        //         title: "Please allow video playback",
        //         onOk() {
        //           remoteStream.resume();
        //         },
        //         onCancel() {
        //           console.log("Cancel");
        //         },
        //       });
        //     }
        //   });
        // }, 1000);
      });
      // 移除
      this.client.on("stream-removed", (event) => {
        const { stream: remoteStream } = event;
        remoteStream.stop();
        const index = this.remoteStreamList.indexOf(remoteStream);
        if (index >= 0) {
          this.remoteStreamList.splice(index, 1);
        }
      });
      this.client.on("mute-audio", (event) => {
        const { userId } = event;
        console.log(`${userId}关了话筒${this.moderator.uuid}`);
        if (userId === this.moderator.uuid) {
          this.moderator.audioStatus = false;
        } else {
          if (this.particlesList.length > 0) {
            this.particlesList.forEach((i) => {
              if (i.uuid === userId) {
                i.audioStatus = false;
              }
            });
          }
        }
        this.$forceUpdate();
      });

      this.client.on("unmute-audio", (event) => {
        const { userId } = event;
        console.log(`${userId}开了话筒${this.moderator.uuid}`);
        if (userId === this.moderator.uuid) {
          this.moderator.audioStatus = true;
        } else {
          if (this.particlesList.length > 0) {
            this.particlesList.forEach((i) => {
              if (i.uuid === userId) {
                i.audioStatus = true;
              }
            });
          }
        }

        this.$forceUpdate();
      });
      this.client.on("mute-video", (event) => {
        const { userId } = event;
        console.log(`${userId} mute video`);
      });

      this.client.on("unmute-video", (event) => {
        const { userId } = event;
        console.log(`${userId} unmute video`);
      });
    },

    // 获取主持人信息
    async getModeratorInfo(id) {
      let { result } = await getSessionModerator(id);
      if (result) {
        this.moderator = result;
        this.moderator.audioStatus = true;
      }
    },
    // 获取参会人员
    async getParticles(id) {
      let res = await getOnlineUserList(id);
      if (res.code === 200 && res.result) {
        let list = res.result.filter(
          (i) =>
            i.roleType.code === "PARTICIPANTS" &&
            i.joinStatus.code === "ALREADY_INVITED"
        );
        list.forEach((i) => {
          i.popStatus = false;
          if (i.personSetting?.muteName) {
            if (i.personSetting?.muteName === "Mute") {
              i.audioStatus = true;
            } else {
              i.audioStatus = false;
            }
          } else {
            i.audioStatus = false;
          }
          i.tabList = [
            {
              id: 1,
              name: "Profile",
            },
            {
              id: 2,
              name: i.personSetting?.cameraName || "Switch off Camera",
            },
            {
              id: 3,
              name: i.personSetting?.muteName || "Unmute",
            },
            {
              id: 4,
              name: "Kick out",
            },
          ];
          i.noRemoteTabList = [
            {
              id: 1,
              name: "Profile",
            },
            {
              id: 2,
              name: "Kick out",
            },
          ];
        });
        this.particlesList = list;
        for (let item1 of list) {
          let matchingItem = this.remoteStreamList.find(
            (item2) => item2.getUserId() === item1.uuid
          );
          if (matchingItem) {
            this.$nextTick(() => {
              matchingItem.play(matchingItem.getUserId());
            });
          }
        }
      }
    },
    // 初始化客户端
    async initClient() {
      this.client = TRTC.createClient({
        mode: "live",
        sdkAppId: this.sdkAppId,
        userId: this.userId,
        userSig: this.userSig,
        enableAutoPlayDialog: false,
      });
      this.handleClientEvents();
    },

    async initLocalStream(audio, video) {
      this.localStream = TRTC.createStream({
        audio,
        video,
        userId: this.userId,
        cameraId: this.cameraId,
        microphoneId: this.microphoneId,
      });
      this.localStream.setVideoProfile("480p");

      this.processor = await rtcAIDenoiser.createProcessor({
        sdkAppId: this.sdkAppId,
        userId: this.userId,
        userSig: this.userSig,
      });

      try {
        await this.localStream.initialize();
        await this.processor.process(this.localStream);
        console.log("当前是否开启降噪：", this.processor.enabled);
      } catch (error) {
        this.localStream = null;
        throw error;
      }
    },
    playLocalStream() {
      this.localStream.play("localStream");
    },

    destroyLocalStream() {
      this.localStream && this.localStream.stop();
      this.localStream && this.localStream.close();
      this.localStream = null;
    },
    startGetAudioLevel() {
      // 文档：https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/module-ClientEvent.html#.AUDIO_VOLUME
      this.client.on("audio-volume", (event) => {
        event.result.forEach(({ userId, audioVolume }) => {
          if (audioVolume > 2) {
            console
              .log
              // `user: ${userId} is speaking, audioVolume: ${audioVolume}`
              ();
          }
        });
      });
      this.client.enableAudioVolumeEvaluation(200);
    },
    stopGetAudioLevel() {
      this.client && this.client.enableAudioVolumeEvaluation(-1);
    },
    async join() {
      !this.client && (await this.initClient());
      try {
        await this.client.join({ roomId: this.roomId, role: this.role });
        this.startGetAudioLevel();
      } catch (error) {
        location.reload();
        throw error;
      }
    },

    handleClientEvents() {
      // this.client.on("error", (error) => {
      //   console.error(error);
      //   alert(error);
      //   if (
      //     error.code === TRTC.ERROR_CODE.OPERATION_FAILED &&
      //     error.extraCode === 5501
      //   ) {
      //     this.$message.error(
      //       "network firewall is limited, check the network firewall Settings"
      //     );
      //   }
      // });
      this.client.on("client-banned", async (event) => {
        console.warn(`client has been banned for ${event.reason}`);
        if (event.reason == "room-disband") {
          this.roomDis = true;
        }
        this.leave();
      });
      this.client.on("stream-added", (event) => {
        const { stream: remoteStream } = event;
        // 订阅远端流
        this.subscribe(remoteStream);
      });
      // 监听‘stream-updated’事件
      this.client.on("stream-updated", (event) => {
        const remoteStream = event.stream;
        console.log(
          "remoteStream ID: " +
            remoteStream.getUserId() +
            " was updated hasAudio: " +
            remoteStream.hasAudio() +
            " hasVideo: " +
            remoteStream.hasVideo()
        );
      });
      this.client.on("stream-subscribed", (event) => {
        const { stream: remoteStream } = event;
        const remoteUserId = remoteStream.getUserId();
        if (remoteUserId === this.moderator.uuid) {
          setTimeout(() => {
            // 播放远端流
            remoteStream.play(this.moderator.uuid);
          }, 1000);
        }
        let index = this.remoteStreamList.findIndex(
          (i) => i.getUserId() === remoteUserId
        );
        if (index === -1) {
          this.remoteStreamList.push(remoteStream);
          this.getParticles(this.sessionId);
        }
        // setTimeout(() => {
        //   // 播放远端流
        //   remoteStream.play(remoteUserId);
        // }, 1000);
      });

      // 移除
      this.client.on("stream-removed", (event) => {
        const { stream: remoteStream } = event;
        remoteStream.stop();
        const index = this.remoteStreamList.indexOf(remoteStream);
        if (index >= 0) {
          this.remoteStreamList.splice(index, 1);
          setTimeout(() => {
            // 人走了
            this.getParticles(this.sessionId);
          }, 500);
        }
      });
      this.client.on("mute-audio", (event) => {
        const { userId } = event;
        console.log(`${userId}关了话筒${this.moderator.uuid}`);
        if (userId === this.moderator.uuid) {
          this.moderator.audioStatus = false;
        } else {
          if (this.particlesList.length > 0) {
            this.particlesList.forEach((i) => {
              if (i.uuid === userId) {
                i.audioStatus = false;
                i.tabList[2].name = "Unmute";
              }
            });
          }
        }
        this.$forceUpdate();
      });

      this.client.on("unmute-audio", (event) => {
        const { userId } = event;
        console.log(`${userId}开了话筒${this.moderator.uuid}`);
        if (userId === this.moderator.uuid) {
          this.moderator.audioStatus = true;
        } else {
          if (this.particlesList.length > 0) {
            this.particlesList.forEach((i) => {
              if (i.uuid === userId) {
                i.audioStatus = true;
                i.tabList[2].name = "Mute";
              }
            });
          }
        }
        this.$forceUpdate();
      });

      this.client.on("mute-video", (event) => {
        const { userId } = event;
        console.log(`${userId} mute video`);
        if (userId !== this.moderator.uuid) {
          if (this.particlesList.length > 0) {
            this.particlesList.forEach((i) => {
              if (i.uuid === userId) {
                i.tabList[1].name = "Switch on Camera";
              }
            });
          }
        }
        this.$forceUpdate();
      });

      this.client.on("unmute-video", (event) => {
        const { userId } = event;
        console.log(`${userId} unmute video`);
        if (userId !== this.moderator.uuid) {
          if (this.particlesList.length > 0) {
            this.particlesList.forEach((i) => {
              if (i.uuid === userId) {
                i.tabList[1].name = "Switch off Camera";
              }
            });
          }
        }
        this.$forceUpdate();
      });
    },

    // 订阅
    async subscribe(remoteStream, config = { audio: true, video: true }) {
      await this.client.subscribe(remoteStream, config);
    },
    // 取消订阅
    async unSubscribe(remoteStream) {
      await this.client.unsubscribe(remoteStream);
    },
    // 退出房间
    async leave() {
      this.stopGetAudioLevel();
      this.localStream && this.destroyLocalStream();
      await this.client.leave();
      this.client && this.client.destroy();
    },
    // 推流
    async publish() {
      await this.client.publish(this.localStream);
    },
    // 停止推流
    async unPublish() {
      await this.client.unpublish(this.localStream);
    },

    muteVideo() {
      if (this.localStream) {
        this.localStream.muteVideo();
      }
    },

    muteAudio() {
      if (this.localStream) {
        this.localStream.muteAudio();
      }
    },

    unmuteVideo() {
      if (this.localStream) {
        this.localStream.unmuteVideo();
      }
    },
    unmuteAudio() {
      if (this.localStream) {
        this.localStream.unmuteAudio();
      }
    },
  },
};

```