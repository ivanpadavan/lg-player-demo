# LG player demo
Команды:

`npm run build`. Сборка. Должен быть установлен [ares-cli](https://webostv.developer.lge.com/develop/tools/cli-installation).

`npm run start`. Hot reload для разработки

Должен быть .env файл с credentials для авторизации.


На данный момент не работает widevine, DEMO app показывает лаги при проигрывании MSE плееров на моделях LG < 6. 
Для визуального отклика есть спиннер и возможность аллоцировать дополнительно в память.

Подробнее о проблеме:
https://forum.webostv.developer.lge.com/t/the-garbage-collector-runs-every-5-seconds-after-mediasource-is-attached-to-htmlvideoelement/2964

https://github.com/shaka-project/shaka-player/issues/4305

https://forum.webostv.developer.lge.com/t/stuttering-dash-drm-livestreaming-video-on-webos-3-x/6847

Для оперативной связи: telegram @ifrolkin
