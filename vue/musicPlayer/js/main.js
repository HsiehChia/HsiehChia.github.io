window.addEventListener('load', function() {
    var app = new Vue({
        el: "#player",
        data: {
            query: "",
            musicList: [],
            musicUrl: "",
            picUrl: "",
            hotComments: []
        },
        methods: {
            /* 
             *  歌曲搜索接口
             *  请求地址：https://autumnfish.cn/search
             *  请求方法：get
             *  请求参数：keywords(歌曲名关键字)
             *  响应内容：歌曲搜索结果
             * 
             *  歌曲地址接口
             *  请求地址：https://autumnfish.cn/song/url
             *  请求方法：get
             *  请求参数：id(歌曲id)
             *  响应内容：歌曲url地址
             * 
             *  歌曲详情（封面）接口
             *  请求地址：https://autumnfish.cn/song/detail
             *  请求方法：get
             *  请求参数：ids(歌曲id)
             *  响应内容：歌曲详情，包含封面信息
             * 
             *  热门评论接口
             *  请求地址：https://autumnfish.cn/comment/hot?type=0
             *  请求方法：get
             *  请求参数：id(歌曲id,type固定为0)
             *  响应内容：歌曲的热门评论
             */
            // 1.歌曲搜索
            searchMusic: function() {
                if (this.query != "") {
                    var that = this;
                    axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function(response) {
                        // console.log(response.data.result.songs);
                        that.musicList = response.data.result.songs;
                    }, function(error) {
                        console.log(error);
                    })
                } else {
                    alert("搜索内容不能为空");
                }

            },
            // 2.歌曲播放
            playMusic: function(musicId) {
                // console.log(musicId);
                var that = this;
                // 2.1获取歌曲地址
                axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(function(response) {
                    // console.log(response.data.songs[0].al.piclUrl);
                    that.musicUrl = response.data.data[0].url;
                }, function(error) {
                    console.log(error);
                });

                // 2.2获取歌曲详情页
                axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(function(response) {
                    // console.log(response.data.songs[0].al.picUrl);
                    that.picUrl = response.data.songs[0].al.picUrl;
                }, function(error) {
                    console.log(error);
                });

                // 2.3获取热门评论
                axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(function(response) {
                    console.log(response.data.hotComments);
                    that.hotComments = response.data.hotComments;
                }, function(error) {
                    console.log(error);
                });
            }
        }
    })
})