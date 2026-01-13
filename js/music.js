        const audio = new Audio('/assets/musica.mp3');
        audio.loop = true;
        audio.volume = 0.5;

    
        function iniciarMusica() {
            audio.play();
            document.removeEventListener('click', iniciarMusica);
            document.removeEventListener('touchstart', iniciarMusica);
        }

        document.addEventListener('click', iniciarMusica);
        document.addEventListener('touchstart', iniciarMusica);