document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // Multimedia Gallery Dynamic Loading
    const galleryContainer = document.getElementById('multimedaGallery');
    const multimediaItems = [
        { type: 'video', src: 'Coolstuffs/09.mp4', title: '' },
        { type: 'video', src: 'Coolstuffs/11265.mp4', title: '' },
        { type: 'video', src: 'Coolstuffs/0717.mp4', title: '' },
        { type: 'video', src: 'Coolstuffs/09(1).mp4', title: '' },
        { type: 'video', src: 'Coolstuffs/0512.mp4', title: '' },
        { type: 'video', src: 'Coolstuffs/1114.mp4', title: '' },
        { type: 'video', src: 'Coolstuffs/1118.mp4', title: 'Dumbledore Talking' },
        // Add more multimedia items from your projects
    ];

    multimediaItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card h-100';

        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;
            img.className = 'card-img-top';
            card.appendChild(img);
        } else if (item.type === 'video') {
            const video = document.createElement('video');
            video.src = item.src;
            video.className = 'card-img-top';
            video.controls = true;
            card.appendChild(video);
        }

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.innerHTML = `<h5 class="card-title">${item.title}</h5>`;
        card.appendChild(cardBody);

        col.appendChild(card);
        galleryContainer.appendChild(col);
    });
});

// Optional: Simple Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    alert('Formulario enviado. ¡Gracias por tu mensaje!');
});
