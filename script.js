document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.slide-container');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.slide');

    // Sticky Navbar style on scroll within the main container
    mainContainer.addEventListener('scroll', () => {
        if (mainContainer.scrollTop > 50) {
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }

        // Active link highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (mainContainer.scrollTop >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll intervention for anchor links inside a custom scrolling container
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            mainContainer.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
