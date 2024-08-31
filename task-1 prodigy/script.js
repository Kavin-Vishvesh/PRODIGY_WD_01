window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.text-section');
    const body = document.body;
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
            switch (index) {
                case 0:
                    body.style.background = 'linear-gradient(to right, #ff6b6b, #f7c59f, #4ca1af, #2c3e50)';
                    break;
                case 1:
                    body.style.background = 'linear-gradient(to right, #3498db, #8e44ad, #f39c12, #d35400)';
                    break;
                case 2:
                    body.style.background = 'linear-gradient(to right, #16a085, #27ae60, #2980b9, #8e44ad)';
                    break;
                case 3:
                    body.style.background = 'linear-gradient(to right, #2c3e50, #bdc3c7, #ecf0f1, #95a5a6)';
                    break;
                case 4:
                    body.style.background = 'linear-gradient(to right, #e74c3c, #e67e22, #f1c40f, #2ecc71)';
                    break;
                default:
                    body.style.background = 'linear-gradient(to right, #ff6b6b, #f7c59f, #4ca1af, #2c3e50)';
            }
        }
    });
});
const navItems = document.querySelectorAll('.nav-item a');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ffeb3b';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
    });
});
