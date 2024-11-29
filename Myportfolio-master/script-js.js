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
        // Ejemplo de video externo de Vimeo
        { 
            type: 'external-video', 
            embedCode: `
                <div class="video-container">
                    <iframe 
                        src="https://player.vimeo.com/video/1034641139?h=580b066318&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                        title="Project Video">
                    </iframe>
                </div>
            `,
            title: 'Video del Proyecto LISA'
        },
        // Puedes agregar más videos aquí
        { 
            type: 'external-video', 
            embedCode: `
                <div class="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        title="Ejemplo de Video">
                    </iframe>
                </div>
            `,
            title: 'Video de Ejemplo'
        }
    ];

    multimediaItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-4'; // Cambiado a col-md-6 para mostrar 2 videos por fila

        const card = document.createElement('div');
        card.className = 'card h-100';

        if (item.type === 'external-video') {
            const videoWrapper = document.createElement('div');
            videoWrapper.innerHTML = item.embedCode;
            card.appendChild(videoWrapper);
        }

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.innerHTML = `<h5 class="card-title">${item.title}</h5>`;
        card.appendChild(cardBody);

        col.appendChild(card);
        galleryContainer.appendChild(col);
    });
});