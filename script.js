// script.js

document.addEventListener('DOMContentLoaded', function() {
    const feelingSlider = document.getElementById('feeling-slider');
    const feelingValue = document.getElementById('feeling-value');
    const adviceText = document.getElementById('advice');
    const phraseText = document.getElementById('phrase');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const videoTitleElement = document.querySelector('.video-title');
    const mascotContainer = document.querySelector('.mascot-container');
    const mascotText = document.querySelector('#mascot-text');
    const speechBubble = document.querySelector('.speech-bubble');

    function resetAnimation(element) {
        element.style.animation = 'none';
        void element.offsetWidth;
        element.style.animation = null;
    }

    feelingSlider.addEventListener('input', function() {
        const value = parseInt(this.value);
        feelingValue.textContent = value;
        updateContentBasedOnFeeling(value);
        resetAnimation(mascotContainer);
    });

    function updateContentBasedOnFeeling(feeling) {
        let advice = "";
        let phrase = "";
        let videoId = "";
        let videoTitle = "";

        if (feeling <= 3) {
            advice = "Es normal tener días difíciles. Intenta hacer algo que disfrutes, aunque sea pequeño.";
            phrase = '"La perseverancia puede hacer que lo difícil se vuelva fácil."';
            videoId = "y60yrvRYPXo"; // WHEN YOU FEEL LIKE QUITTING
            videoTitle = "Un mensaje inspirador para cuando sientes ganas de rendirte";
        } else if (feeling <= 6) {
            advice = "Estás en un punto medio. ¿Qué tal si das un pequeño paseo o escuchas tu música favorita?";
            phrase = '"Cada pequeño paso cuenta."';
            videoId = "Hd_ptKQvZsI"; // This could be why you're depressed or anxious
            videoTitle = "Entendiendo mejor cómo te sientes";
        } else {
            advice = "¡Qué bien que te sientas así! Sigue disfrutando de este día.";
            phrase = '"La felicidad se encuentra en el camino, no solo al final."';
            videoId = "bjozEqdtB-g"; // Watch This Video When You’re Feeling Down
            videoTitle = "Un video para levantar el ánimo";
        }

        adviceText.textContent = advice;
        mascotText.textContent = phrase;
        youtubeIframe.src = `https://www.youtube.com/embed/${videoId}`;
        videoTitleElement.textContent = `"${videoTitle}"`;

        // Mostrar el mensaje flotante
        mascotText.classList.remove('hidden');
      speechBubble.classList.remove('hidden');
        // Ocultar el mensaje flotante después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
            mascotText.classList.add('hidden');
          speechBubble.classList.add('hidden');
        }, 2500);
    }

    updateContentBasedOnFeeling(parseInt(feelingSlider.value));
});