function toggleDetails(button) {
    const details = button.parentElement.querySelector('.extra-details');
    const isHidden = details.style.display === 'none' || details.style.display === '';
    
    details.style.display = isHidden ? 'block' : 'none';
    button.innerText = isHidden ? 'Show Less' : 'Learn More';
    
    // Add animation
    if(isHidden) {
        details.style.animation = 'slideDown 0.3s ease forwards';
    } else {
        details.style.animation = 'slideUp 0.3s ease forwards';
    }
}

function openFullScreen(imgElement) {
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('fullscreenImage');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
    
    // Add zoom animation
    modalImg.style.animation = 'zoomIn 0.3s ease forwards';
    document.body.style.overflow = 'hidden';
}

function closeFullScreen() {
    const modal = document.getElementById('fullscreenModal');
    const modalImg = document.getElementById('fullscreenImage');
    
    modalImg.style.animation = 'zoomOut 0.3s ease forwards';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add these contact form enhancements
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('.form-control');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-arrow-right"></i>';
            }, 2000);
        }, 1500);
    });
});
