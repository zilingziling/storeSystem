// 设备信息
const devices = [
  {
    uuid: '142545',
    type: 'square',
    title: 'OPS',
    total: 5,
    highLight: 2,
    parent: [
      {
        uuid: '1',
        img: '....',
        highLight: false, // 是否点亮
        name: '全开',
      },
      {
        uuid: '1',
        img: '....', // 图片地址
        highLight: true,
        name: '全关',
      },
    ],
    sub: [
      {
        uuid: '2',
        title: '窗帘1',
        buttons: [
          {
            uuid: '1',
            highLight: false,
            name: '开',
          },
          {
            uuid: '1',
            hightlight: false,
            name: '关',
          },
        ],
      },
      {
        uuid: '2',
        title: '窗帘2',
        buttons: [
          {
            uuid: '88',
            hightlight: true,
            name: '调光1',
          },
          {
            uuid: '1',
            hightlight: false,
            name: '调光2',
          },
        ],
      },
    ],
  },
  {
    uuid: '142545',
    type: 'slide', // 是否是滑块
    title: '声音控制',
    volume: '13', // 音量值
    silence: false, // 是否静音
  },
];
// 空调信息
const aircondition = {
  title: '空调控制',
  temperature: '16°C', // 温度值
  buttons: [
    {
      uuid: 1,
      img: '...',
      name: '关机',
      highLight: false,
    },
    {
      uuid: 1,
      img: '...',
      name: '开机',
      highLight: true,
    },
    {
      uuid: 1,
      img: '...',
      name: '制热',
      highLight: true,
    },
    {
      uuid: 1,
      img: '...',
      name: '制冷',
      highLight: false,
    },
  ],
}
// 教师环境
const env = {
  name: '教师环境',
  buttons: [
    {
      uuid: 1,
      img: '...',
      name: '温度',
      value: '20', // 温度值
      status: '适宜', // 状态值
    },
    {
      uuid: 2,
      img: '...',
      name: '二氧化碳浓度',
      value: '20', // 温度值
      status: '适宜', // 状态值
    },
  ],
}
