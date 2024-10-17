
        let currentImageIndex = 0;
        const images = [
            'img/Plazamundo2.jpg',
            'img/Plazamundo3.jpg',
            'img/Periplaza.jpg',
            'img/GasolineraPuma.jpg',
            'img/logoapopa.jpg',
            'img/Polideportivo.jpg',
            'img/CasadeLaJuventud.jpg',
            'img/Iglesiaparque.jpg'

        ];

        function changeImage(direction) {
            currentImageIndex += direction;
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            document.getElementById('carousel-image').src = images[currentImageIndex];
        }

        function scrollToSection(id) {
            const section = document.getElementById(id);
            section.scrollIntoView({ behavior: 'smooth' });
        }