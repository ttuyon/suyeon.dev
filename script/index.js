// 간단한 터미널 효과
document.addEventListener('DOMContentLoaded', function() {
    const messages = [
      "Dev → Rigger 전환 중...",
      "Maya 리깅 스킬 학습 중...",
      "3D 파이프라인 연구 중...",
      "새로운 경로 탐색 중...",
      "준비 완료까지 잠시만 기다려주세요"
    ];
    
    let currentMessage = 0;
    const subtitleElement = document.querySelector('.subtitle');
    
    // 5초마다 메시지 변경
    setInterval(() => {
        currentMessage = (currentMessage + 1) % messages.length;
        subtitleElement.innerHTML = messages[currentMessage] + '<span class="cursor">_</span>';
    }, 5000);
});
