/*
脚本功能：哔哩哔哩解锁大会员
使用声明：⚠️此脚本仅供学习与交流，
				请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 哔哩哔哩大会员
^https?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player.*\.(v3|v2|v1).*Play(URL|View|Conf).*$ url script-request-header https://raw.githubusercontent.com/betraykk/clash/main/bilibili.js


[mitm] 
hostname =app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*
*/

function _0x4a7d(_0x3b8ec1,_0x2c80b0){var _0x17eda2=_0x17ed();return _0x4a7d=function(_0x4a7d81,_0x4dafee){_0x4a7d81=_0x4a7d81-0x15f;var _0x57c93c=_0x17eda2[_0x4a7d81];return _0x57c93c;},_0x4a7d(_0x3b8ec1,_0x2c80b0);}var _0x3d1f68=_0x4a7d;(function(_0x8a9d79,_0x543eaf){var _0x5e4022=_0x4a7d,_0x4d5091=_0x8a9d79();while(!![]){try{var _0x976c54=parseInt(_0x5e4022(0x160))/0x1+parseInt(_0x5e4022(0x178))/0x2*(parseInt(_0x5e4022(0x165))/0x3)+parseInt(_0x5e4022(0x16d))/0x4*(parseInt(_0x5e4022(0x179))/0x5)+parseInt(_0x5e4022(0x16c))/0x6*(-parseInt(_0x5e4022(0x175))/0x7)+parseInt(_0x5e4022(0x170))/0x8*(parseInt(_0x5e4022(0x169))/0x9)+parseInt(_0x5e4022(0x172))/0xa+-parseInt(_0x5e4022(0x171))/0xb*(parseInt(_0x5e4022(0x16e))/0xc);if(_0x976c54===_0x543eaf)break;else _0x4d5091['push'](_0x4d5091['shift']());}catch(_0x7ef64){_0x4d5091['push'](_0x4d5091['shift']());}}}(_0x17ed,0x64e3d));var headers=$request[_0x3d1f68(0x163)];modifiedheaders={'Cookie':_0x3d1f68(0x174),'Authorization':_0x3d1f68(0x176),'User-Agent':_0x3d1f68(0x16b),'x-bili-locale-bin':_0x3d1f68(0x168),'x-bili-device-bin':_0x3d1f68(0x162),'x-bili-metadata-bin':_0x3d1f68(0x177),'x-bili-fawkes-req-bin':_0x3d1f68(0x16a)},headers[_0x3d1f68(0x167)]=modifiedheaders[_0x3d1f68(0x167)],headers['Authorization']=modifiedheaders[_0x3d1f68(0x15f)],headers[_0x3d1f68(0x16f)]=modifiedheaders['User-Agent'],headers['x-bili-locale-bin']=modifiedheaders[_0x3d1f68(0x164)],headers[_0x3d1f68(0x166)]=modifiedheaders[_0x3d1f68(0x166)],headers[_0x3d1f68(0x161)]=modifiedheaders[_0x3d1f68(0x161)],headers[_0x3d1f68(0x173)]=modifiedheaders[_0x3d1f68(0x173)],$done({'headers':headers});function _0x17ed(){var _0x194276=['12sdGxrU','User-Agent','32hKlHDk','1053371Ohbnab','11960nNHxZM','x-bili-fawkes-req-bin','DedeUserID=54343099;\x20DedeUserID__ckMd5=492068d79771a5f4;\x20SESSDATA=30a917eb%2C1737270415%2C17ee3672CjCFJ81dLXqu3z41A1KjmOtuybhyRYOy8I65lGvM2NcSJonD_3fgEGSfcIf3kIbYrrMSVmhBd1RfYjBPR09LbXhISVhmdTZGN29WTWVMLTBEMkI3eTgtd2o2TlNWT3U5YlFKVG9rdTJ2NXl0M2U1ejduYWxGbTRyS1hCWVlINk9YRVRBOVJ0aENRIIEC;\x20bili_jct=dd97b1ccaee5f3e68cc9a8c1f648fccc;\x20sid=o1cayi9z','14TKVBsd','identify_v1\x206f880b41678485928e654ad0942fb572CjBV_15a2WeLXWWzw5uBrNRnPETop4hv9mJhd0W7r0w6i1h9DXGb4-6J6-k7ctV5YukSVmRvZnk5bTl2cXcyak40aFh4RHRTWW9EOUpiaE9SWGthemdmb2g1Zm5WUWx0VHFpZVBhbHBZT05YRVBBa2pHMDNqYWgxanRrWnVUWFg1M01WZWJvWnRBIIEC','CtwBNmY4ODBiNDE2Nzg0ODU5MjhlNjU0YWQwOTQyZmI1NzJDakJWXzE1YTJXZUxYV1d6dzV1QnJOUm5QRVRvcDRodjltSmhkMFc3cjB3NmkxaDlEWEdiNC02SjYtazdjdFY1WXVrU1ZtUnZabms1YlRsMmNYY3lhazQwYUZoNFJIUlRXVzlFT1VwaWFFOVNXR3RoZW1kbWIyZzFabTVXVVd4MFZIRnBaVkJoYkhCWlQwNVlSVkJCYTJwSE1ETnFZV2d4YW5SclduVlVXRmcxTTAxV1pXSnZXblJCSUlFQxIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGOgNpb3M=','68oRmneD','49660WYFMNe','Authorization','709478mUUHjz','x-bili-metadata-bin','CAEQqJnbIRokWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoIaVBob25lIFhSBjE1LjQuMWoFNy43LjByQDlFQjgzOTk0NzY2RUE5ODVERjRGNEM2QkEzNDc3QzBGMjAyMjA0MjQyMjQ1NDYzRkRCNEMzRjI3MjdGMTkzMUR4vfXU98sw','headers','x-bili-locale-bin','1371cGrNlv','x-bili-device-bin','Cookie','Eg4KAnpoEgRIYW5zGgJDTg==','381267FmMRRa','CgZpcGhvbmUSBHByb2QaEGZmZmZmZmZmZjJjZDk4YjQ=','bili-universal/70700200\x20os/ios\x20model/iPhone\x20X\x20mobi_app/iphone\x20osVer/15.4.1\x20network/2','2143242zCZYMZ','132IaLqkl'];_0x17ed=function(){return _0x194276;};return _0x17ed();}