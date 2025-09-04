

   document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-bg');
    let currentVideoIndex = 0;
    const fadeDuration = 1; // 淡入淡出時間，需與CSS的transition時間一致 (秒)
    const triggerOffset = 1; // 在影片結束前多少秒開始淡入淡出

    // 初始化：確保第一個影片播放
    videos[currentVideoIndex].play();

    videos.forEach((video, index) => {
        video.addEventListener('timeupdate', () => {
            const duration = video.duration;
            const currentTime = video.currentTime;

            // 如果影片即將結束，並且還沒有觸發淡入淡出
            if (duration && currentTime >= duration - triggerOffset && video.classList.contains('active')) {
                // 找出下一個影片
                const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
                const nextVideo = videos[nextVideoIndex];

                // 如果下一個影片還沒播放，就開始播放
                if (nextVideo.paused) {
                    nextVideo.currentTime = 0; // 確保從頭開始
                    nextVideo.play();
                }

                // 淡入下一個影片
                nextVideo.classList.add('active');

                // 淡出當前影片
                video.classList.remove('active');

                // 更新當前活躍影片的索引
                currentVideoIndex = nextVideoIndex;
            }
        });

        // 當影片完全淡出並結束時，重置它並暫停
        video.addEventListener('transitionend', () => {
            if (!video.classList.contains('active')) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
});
