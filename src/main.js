import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

(async () => {
    console.log('START');
    console.log(await bridge.send("VKWebAppInit", {}));
    console.log('END');
})();
