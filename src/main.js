import bridge from '@vkontakte/vk-bridge';

(async () => {
    console.log('START');
    console.log(await bridge.send("VKWebAppInit", {}));
    console.log('END');
})();
