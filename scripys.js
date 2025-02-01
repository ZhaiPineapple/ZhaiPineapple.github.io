// scripts.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表单提交处理
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    alert("感谢您的反馈！");
});
