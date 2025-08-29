
document.addEventListener('DOMContentLoaded', function() {
    
    const animateTitle = () => {
        const title = document.querySelector('h1');
        if (title) {
            title.style.animation = 'colorChange 3s infinite alternate';
        }
    };

    
    const animateSubtitle = () => {
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            subtitle.style.animation = 'slideIn 2s forwards, float 4s infinite ease-in-out';
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(20px)';
        }
    };

    
    const animateSubjectItems = () => {
        const subjectItems = document.querySelectorAll('.subject-list li');
        subjectItems.forEach((item, index) => {
            item.style.animation = `fadeIn 0.5s forwards ${index * 0.2}s`;
            item.style.opacity = '0';
        });
    };

    
    const animateSocialButtons = () => {
        const socialButtons = document.querySelectorAll('.social-btn');
        socialButtons.forEach((button, index) => {
            button.style.animation = `bounceIn 1s forwards ${index * 0.3 + 1}s`;
            button.style.opacity = '0';
        });
    };

    
    const addKeyframes = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes colorChange {
                0% { color: #ffffff; }
                50% { color: #c8e6c9; }
                100% { color: #ffffff; }
            }
            
            @keyframes slideIn {
                from { 
                    opacity: 0;
                    transform: translateY(20px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
                100% { transform: translateY(0px); }
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes bounceIn {
                0% { 
                    opacity: 0;
                    transform: scale(0.3) translateY(20px);
                }
                50% { 
                    opacity: 0.9;
                    transform: scale(1.05);
                }
                80% { 
                    opacity: 1;
                    transform: scale(0.9);
                }
                100% { 
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    };

    // Inisialisasi semua animasi
    const initAnimations = () => {
        addKeyframes();
        animateTitle();
        animateSubtitle();
        animateSubjectItems();
        animateSocialButtons();
    };

    
    initAnimations();
});