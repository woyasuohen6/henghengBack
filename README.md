![](https://github.com/woyasuohen6/henghengBack/blob/master/public/imgs/logo.png)

## 哼哼养殖后端

### 技术栈

- koa2
- mongodb
- mongoose
- 使用 jwt 鉴权
- 使用七牛云开发者平台进行图片存储

### 启动方法

- 安装 `node.js`
- 安装并配置 `mongodb`
- 注册并配置七牛云账号
- git clone git@github.com:trayvonRen/henghengBack.git
- npm install
- 在根目录中创建配置文件 `config.js`，并输入以下配置信息

```js
serverConfig = {
  // mongodb 数据库连接字符串
  MONGODB_CONNECT_STR: '',
  // jwt 密钥，可随机生成
  SECRET: '',
  // 服务端口
  PORT: 8083,
}

qiniuConfig = {
  // 七牛云密钥
  ACCESS_KEY: '',
  SECRET_KEY: '',
  // 七牛云空间名称
  BUCKET: '',
  // 七牛云公开域名
  PUBLIC_BUCKET_DOMAIN: '',
}

module.exports = {
  serverConfig,
  qiniuConfig,
}
```

- npm run start

## 接口文档

### 接口信息返回格式

所有信息返回都符合一下格式

```json
{
  "errCode": 0,
  "errMessage": "OK",
  "data": {}
}
```

#### errCode

表示本次请求的错误码

- 0: 请求成功
- 1: 参数校验失败
- 2: 用户未登录
- 3: 用户名不存在或密码错误
- 4: 用户名被占用
- 5：操作失败
- 6: 没有权限
- 404: not found

#### errMessage

表示本次请求的错误信息

- 'OK': 请求成功
- 其他错误信息

#### data

表示响应的数据



### 用户端

#### 用户登录

POST   /users/login

参数 requestbody

| 参数名   | 必选 | 参数类型 | 说明     |
| :------- | ---- | -------- | -------- |
| name     | 是   | string   | 用户名   |
| password | 是   | string   | 登录密码 |

返回示例

```json
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "_id": "5effdb91b63ec4019c547431",
        "name": "张三",
        "phone": "110",
        "__v": 0
    }
}
```



#### 用户注册

POST /users/register

参数 requestbody

| 参数名   | 必选 | 参数类型 | 说明     |
| :------- | ---- | -------- | -------- |
| name     | 是   | string   | 用户名   |
| password | 是   | string   | 登录密码 |
| phone    | 是   | string   | 手机号   |

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "_id": "5effdb91b63ec4019c547431",
        "name": "张三",
        "password": "123456",
        "phone": "110",
        "__v": 0
    }
}
```





#### 首页展示信息

GET /users/getHomeData



#### 按类别获取商品列表

GET /commoditys/getTypedCommodityList

参数 querystring

| 参数名 | 必选 | 说明                                     |
| :----- | ---- | ---------------------------------------- |
| typeId | 是   | 商品种类：1-农业  2-畜牧业 3-果业 4-蔬菜 |

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "goodsList": [
            {
                "img_url": "http://img.woyasuohen6.cn//upload_7c6621caeacd87ef707b250e1b7bc86d.jpg",
                "imgList": [
                    "http://img.woyasuohen6.cn//upload_2b3ab31c09e2cee7be500d8548ba22f1.jpg"
                ],
                "_id": "5eef5e30ac27f51454c95e47",
                "name": "小麦（渝麦7号）",
                "price": "500kg/亩",
                "description": "渝麦7号是重庆市作物研究所从川雅84—2/90—125杂交组合中经五年八代选育成功的早熟高产抗病广适小麦新品种，原代号94—7，2000年通过重庆市审定，2001年通过国家审定(审定编号：国审麦2001001)，是全国农技推广服务中心在2002年重点示范推广的小麦新品种之一。",
                "predictTime": 180,
                "type": 1,
                "endTime": "2020-02-19T00:00:00.000Z",
                "startTime": "2020-09-19T00:00:00.000Z",
                "address": "重庆江北农场",
                "profit": "800/亩",
                "merchantId": "5ebd6a8606733b326cc290a5",
                "__v": 0
            },
            {
                "img_url": "http://img.woyasuohen6.cn//upload_eb7e1b35cee7284c8561e38224f01715.jpg",
                "imgList": [],
                "_id": "5eef67f2f3bfb74d94b7d631",
                "name": "香菇 （食用菌）",
                "price": "1866kg/亩",
                "description": "香菇属担子菌纲(Basidaiomycetes)、伞菌目(Agaricales)、口蘑科(Tricholomatacete)、香菇属(Lentinus)，学名Lentinus edodes，起源于我国，是世界第二大菇，也是我国久负盛名的珍贵食用菌。我国最早栽培香菇，至今已有800多年历史。香菇也是我国著名的药用菌。历代医药学家对香菇的药性及功用均有著述。",
                "predictTime": 180,
                "type": 1,
                "endTime": "2020-03-09T00:00:00.000Z",
                "startTime": "2020-06-19T00:00:00.000Z",
                "address": "重庆江北农场",
                "profit": "8000/亩",
                "merchantId": "5ebd6a8606733b326cc290a5",
                "__v": 0
            }
        ]
    }
}
```





#### 按商家获取商品列表

GET /commoditys/getCommodityList

参数 querystring

| 参数名     | 必选 | 说明    |
| :--------- | ---- | ------- |
| merchantId | 是   | 商品 id |

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "goodsList": [
            {
                "img_url": "http://img.woyasuohen6.cn//upload_462d3c23db8416d458c3818ca912e3c1.jpg",
                "imgList": [],
                "_id": "5eef699ff3bfb74d94b7d632",
                "name": "苹果（红富士）",
                "price": "200kg/亩",
                "description": "富士苹果的特点是体积很大，遍体通红，形状很圆，平均大小如棒球一般。富士苹果与其他苹果相比有更长的最佳食用日期，甚至无需放入冰箱保存。室温下即可保存较长时间。如果将苹果在5%的盐水中浸泡10分钟，晾干，装入保鲜袋，密封后放入冰箱，温度控制在0～40℃，可保存5个月以上。",
                "predictTime": 180,
                "type": 3,
                "endTime": "2020-01-19T00:00:00.000Z",
                "startTime": "2020-07-19T00:00:00.000Z",
                "address": "重庆七雁林场渝中分布",
                "profit": "2000/亩",
                "merchantId": "5ebd6b6673853b369ce9735e",
                "__v": 0
            }
        ]
    }
}
```



#### 获取商品详细信息

GET /commoditys/getCommodityDetail



参数 querystring

| 参数名      | 必选 | 说明    |
| :---------- | ---- | ------- |
| commodityId | 是   | 商品 id |

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "img_url": "http://img.woyasuohen6.cn//upload_462d3c23db8416d458c3818ca912e3c1.jpg",
        "imgList": [],
        "_id": "5eef699ff3bfb74d94b7d632",
        "name": "苹果（红富士）",
        "price": "200kg/亩",
        "description": "富士苹果的特点是体积很大，遍体通红，形状很圆，平均大小如棒球一般。富士苹果与其他苹果相比有更长的最佳食用日期，甚至无需放入冰箱保存。室温下即可保存较长时间。如果将苹果在5%的盐水中浸泡10分钟，晾干，装入保鲜袋，密封后放入冰箱，温度控制在0～40℃，可保存5个月以上。",
        "predictTime": 180,
        "type": 3,
        "endTime": "2020-01-19T00:00:00.000Z",
        "startTime": "2020-07-19T00:00:00.000Z",
        "address": "重庆七雁林场渝中分布",
        "profit": "2000/亩",
        "merchantId": "5ebd6b6673853b369ce9735e",
        "__v": 0
    }
}
```







### 商家端



#### 商家登录

POST /merchants/login

参数 requestbody

| 参数名   | 必选 | 参数类型 | 说明     |
| :------- | ---- | -------- | -------- |
| name     | 是   | string   | 用户名   |
| password | 是   | string   | 登录密码 |

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "img_url": "http://img.woyasuohen6.cn//upload_86272a9ee159d0b77f985761f4b1bc03.jpg",
        "_id": "5ebd6a8606733b326cc290a5",
        "name": "重庆江北农场",
        "description": "生态园是指在城市可持续发展的思想指导下，针对城市化进程中导致的环境质量下降的问题，强调绿地对城市的渗透力和系统性，运用生物学、生态学规律建立绿色走廊,并以此引导城市的空间布局的集自然-人文于一体的园林地带。",
        "address": "重庆巴南区渝道路八仙桥附近",
        "__v": 0
    }
}
```



#### 商家注册

POST /merchants/register

参数 requestbody

| 参数名      | 必选 | 参数类型 | 说明     |
| :---------- | ---- | -------- | -------- |
| name        | 是   | string   | 商家姓名 |
| password    | 是   | string   | 登录密码 |
| description | 是   | string   | 商家地址 |
| address     | 是   | string   | 商家地址 |



返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "img_url": "http://img.woyasuohen6.cn//imgs/logo.png",
        "_id": "5effefe12ef7c12c9443907f",
        "name": "重庆市江津区焦叶群家庭",
        "description": "生态园是指在城市可持续发展的思想指导下，针对城市化进程中导致的环境质量下降的问题，强调绿地对城市的渗透力和系统性，运用生物学、生态学规律建立绿色走廊,并以此引导城市的空间布局的集自然-人文于一体的园林地带。",
        "address": "重庆巴南区渝道路八仙桥附近",
        "password": "123456",
        "__v": 0
    }
}
```



#### 获取商家详细信息

GET  /merchants/getMerchantDetail

参数 querystring

| 参数名     | 必选 | 参数类型 | 说明    |
| :--------- | ---- | -------- | ------- |
| merchantId | 是   | string   | 商家 id |

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "img_url": "http://img.woyasuohen6.cn//imgs/logo.png",
        "_id": "5effefe12ef7c12c9443907f",
        "name": "重庆市江津区焦叶群家庭",
        "description": "生态园是指在城市可持续发展的思想指导下，针对城市化进程中导致的环境质量下降的问题，强调绿地对城市的渗透力和系统性，运用生物学、生态学规律建立绿色走廊,并以此引导城市的空间布局的集自然-人文于一体的园林地带。",
        "address": "重庆巴南区渝道路八仙桥附近",
        "__v": 0
    }
}
```



#### 商家信息修改

PUT /merchants/modifyMerchant

需要先登录商家账户

参数 requestbody

| 参数名      | 必选 | 参数类型 | 说明         |
| :---------- | ---- | -------- | ------------ |
| name        | 否   | string   | 商家姓名     |
| password    | 否   | string   | 登录密码     |
| description | 否   | string   | 商家描述信息 |
| address     | 否   | string   | 商家地址     |



#### 上传商家图片

POST /merchants/addImg

需要先登录商家账户

参数 requestbody（form-data）

| 参数名 | 必选 | 参数类型 | 说明 |
| :----- | ---- | -------- | ---- |
| file   | 是   | File     | 图片 |





#### 创建商品

POST /merchants/createCommodity

需要先登录商家账户

参数 requestbody

| 参数名      | 必选 | 参数类型 | 说明                                     |
| :---------- | ---- | -------- | ---------------------------------------- |
| name        | 是   | string   | 商品名称                                 |
| price       | 是   | string   | 商品价格                                 |
| description | 是   | string   | 商品描述信息                             |
| predictTime | 是   | number   | 商品生长周期(单位：天)                   |
| type        | 是   | number   | 商品种类：1-农业  2-畜牧业 3-果业 4-蔬菜 |
| endTime     | 是   | date     | 预计结束时间                             |
| startTime   | 是   | date     | 预计开始时间                             |
| address     | 是   | string   | 养殖地址                                 |
| profit      | 是   | string   | 利润                                     |

参数实例

```
{
	"name": "SDAFASF",
	"price": "400kg/只",
	"description": "巴克夏猪为稀有品种，在新西兰估计还不足100头纯种母猪。巴克夏猪以肉质好著称，但他比美国的其它品种要肥，产仔性能也较差。近年，巴克夏猪在美国用得比世界其他地区多，但它仍应看成是一个数量有限的较不重要的品种。",
	"predictTime": 180,
	"type": 1,
	"endTime": "2020-01-19",
	"startTime": "2020-07-19",
	"address": "重庆市江津区焦叶群家庭牧场",
	"profit": "2000/只"
}
```



返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "img_url": "http://img.woyasuohen6.cn//imgs/logo.png",
        "imgList": [],
        "_id": "5efff0aa2ef7c12c94439080",
        "name": "SDAFASF",
        "price": "400kg/只",
        "description": "巴克夏猪为稀有品种，在新西兰估计还不足100头纯种母猪。巴克夏猪以肉质好著称，但他比美国的其它品种要肥，产仔性能也较差。近年，巴克夏猪在美国用得比世界其他地区多，但它仍应看成是一个数量有限的较不重要的品种。",
        "predictTime": 180,
        "type": 1,
        "endTime": "2020-01-19T00:00:00.000Z",
        "startTime": "2020-07-19T00:00:00.000Z",
        "address": "重庆市江津区焦叶群家庭牧场",
        "profit": "2000/只",
        "merchantId": "5ebd6a8606733b326cc290a5",
        "__v": 0
    }
}
```



#### 修改商品信息 



PUT /merchants/modifyCommodity

需要先登录商家账户

参数 querystring

| 参数名      | 必选 | 参数类型 | 说明    |
| :---------- | ---- | -------- | ------- |
| commodityId | 是   | string   | 商品 id |

参数 requestbody

| 参数名      | 必选 | 参数类型 | 说明                                     |
| :---------- | ---- | -------- | ---------------------------------------- |
| name        | 否   | string   | 商品名称                                 |
| price       | 否   | string   | 商品价格                                 |
| description | 否   | string   | 商品描述信息                             |
| predictTime | 否   | number   | 商品生长周期(单位：天)                   |
| type        | 否   | number   | 商品种类：1-农业  2-畜牧业 3-果业 4-蔬菜 |
| endTime     | 否   | date     | 预计结束时间                             |
| startTime   | 否   | date     | 预计开始时间                             |
| address     | 否   | string   | 养殖地址                                 |
| profit      | 否   | string   | 利润                                     |

参数示例

```
{
    "name": "小麦",
    "type": 1,
    "endTime": "2020-01-19"
}
```

返回示例

```
{
    "errCode": 0,
    "errMessage": "OK",
    "data": {
        "img_url": "http://img.woyasuohen6.cn//imgs/logo.png",
        "imgList": [],
        "_id": "5efff2a0c248e149e89f39f8",
        "name": "小麦",
        "price": "400kg/只",
        "description": "巴克夏猪为稀有品种，在新西兰估计还不足100头纯种母猪。巴克夏猪以肉质好著称，但他比美国的其它品种要肥，产仔性能也较差。近年，巴克夏猪在美国用得比世界其他地区多，但它仍应看成是一个数量有限的较不重要的品种。",
        "predictTime": 180,
        "type": 1,
        "endTime": "2020-01-19T00:00:00.000Z",
        "startTime": "2020-07-19T00:00:00.000Z",
        "address": "重庆市江津区焦叶群家庭牧场",
        "profit": "2000/只",
        "merchantId": "5effefe12ef7c12c9443907f",
        "__v": 0
    }
}
```



#### 删除商品

DELETE  /merchants/deleteCommodity

需要登录商家账号

参数 querystring

| 参数名      | 必选 | 说明    |
| :---------- | ---- | ------- |
| commodityId | 是   | 商品 id |







#### 上传商品封面图片

POST  /merchants/addCommodityImg/:commodityId

参数 requestbody（form-data）

| 参数名 | 必选 | 参数类型 | 说明 |
| :----- | ---- | -------- | ---- |
| file   | 是   | File     | 图片 |



#### 上传商品介绍图片

POST /merchants/addCommodityImgList/:commodityId

参数 requestbody（form-data）

| 参数名 | 必选 | 参数类型 | 说明 |
| :----- | ---- | -------- | ---- |
| file   | 是   | File     | 图片 |



#### 

#### 订单数据统计 （todo）

#### 用户意见反馈 （todo）



