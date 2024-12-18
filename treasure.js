// 模拟宝藏地图API
class TreasureMap {
    static getInitialClue() {
        return fetch('library.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error("无法加载图书馆资料，状态码：" + response.status);
                }
                return response.text();
            })
            .then(text => {
                return text; // 成功加载
            })
            .catch(error => {
                console.error("加载失败:", error);
                return Promise.reject("无法加载图书馆资料: " + error.message);
            });
    }
  
    static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }
  
    static searchTemple(location) {
        return fetch('temple.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error("无法加载神庙资料，状态码：" + response.status);
                }
                return response.text();
            })
            .then(text => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random();
                        if (random < 0.5) {
                            // 加载守卫资料
                            fetch('guard.txt')
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error("无法加载守卫资料，状态码：" + response.status);
                                    }
                                    return response.text();
                                })
                                .then(guardText => {
                                    reject("糟糕!遇到了神庙守卫! " + guardText);
                                })
                                .catch(error => {
                                    reject("糟糕!遇到了神庙守卫，但无法加载守卫资料: " + error);
                                });
                        }
                        resolve("找到了一个神秘的箱子...");
                    }, 2000);
                });
            })
            .catch(error => {
                console.error("加载失败:", error);
                return Promise.reject("无法加载神庙资料: " + error.message);
            });
    }
  
    static openTreasureBox() {
        return fetch('temple.txt') // 假设打开箱子需要再次确认神庙信息
            .then(response => {
                if (!response.ok) {
                    throw new Error("无法加载神庙资料，状态码：" + response.status);
                }
                return response.text();
            })
            .then(text => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("恭喜!你找到了传说中的宝藏!");
                    }, 1000);
                });
            })
            .catch(error => {
                console.error("加载失败:", error);
                return Promise.reject("无法加载神庙资料: " + error.message);
            });
    }
}
