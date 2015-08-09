ionic1.0.1 使用方式 (建立專案, 加密程式碼, 安裝到手機)

### Step1: 建立ionic project
```
shell> cd ~/workspace 
shell> mkdir gg-app && cd gg-app
shell> yo ionic
```

注意：我們沒有要用ionic start gg-app maps 這方式建立ionic project
參考：https://www.npmjs.com/package/ionic#starting-an-ionic-app


### Step2: 把ionic 版本改成 1.0.1 ，如果yo ionic 出來的版本是1.0.0-rc3
```
shell> vi bower.json
第5行移除："ionic": "v1.0.0-rc.3",
第5行新增："ionic": "driftyco/ionic-bower#1.0.1",
shell> bower install --save
```

### Step3: 安裝ngResource 
```
shell> bower install --save angular-resource
```

### Step4: 在inject ngResource 
這邊詳細就不多說了，反正就是新增 app/scripts/services.js 然後在app.js inject ngResource然後在 index.html 新增 匯入 services.js 與 匯入 angular-resource (這部份可以由 grunt serve自動幫你加入)


### Step5: 啟動 app
```
shell> grunt serve
```

注意：若 grunt serve 出現 ERR_CONNECTION_REFUSED 的話需要把 grunt-concurrent 降版
```
shell> npm uninstall grunt-concurrent
shell> npm install grunt-concurrent@1.0.0
```

參考：https://github.com/diegonetto/generator-ionic/issues/223


### Step6: 產生android platform，因為 yo generator-ionic 提供的 grunt platform:add:android 這方式已經不能用了 (2015/08/09) ，所以一定只能改用ionic 的工具產生platform。
```
shell> ionic platform add android
```


### Step7: 把 app/ 的程式碼做 minify, uglify, obfuscate，並把結果產生到 www/
```
shell> cp ~/workspace/icamping/mobile/Gruntfile.js  .
shell> grunt build-release:android
```


### Step9: 接上手機
```
shell> adb devcies
```

### Step10: 把 www/ 打包成 apk
```
shell> ionic run android
```



### 以上實作用的套件版本與設定 ###
套件版本：
 ionic-cli 1.6.4 
 ionic 版本 driftyco/ionic-bower#1.0.1
 angularjs 版本 1.3.13
ANDROID_HOME=/usr/local/opt/android-sdk   <= 指向 /usr/local/Cellar/android-sdk/24.0.2/

設定：
Gruntfile.js 是用icamping/mobile 裡面的

