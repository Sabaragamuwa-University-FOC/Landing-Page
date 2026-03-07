document.addEventListener('DOMContentLoaded', () => {
    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const codeSnippet = this.previousElementSibling.textContent;
            
            navigator.clipboard.writeText(codeSnippet).then(() => {
                // Visual feedback
                const icon = this.querySelector('i');
                const originalIcon = icon.getAttribute('data-lucide');
                
                // Change icon to check
                icon.setAttribute('data-lucide', 'check');
                lucide.createIcons();
                this.classList.add('text-green-500');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    icon.setAttribute('data-lucide', originalIcon);
                    lucide.createIcons();
                    this.classList.remove('text-green-500');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset for fixed navbar
                const navbarHeight = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
        }
    });
});
