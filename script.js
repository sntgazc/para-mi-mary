const totalHearts = 35;
    for (let i = 0; i < totalHearts; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (5 + Math.random() * 5) + 's';
      heart.style.opacity = Math.random();
      document.body.appendChild(heart);
    }

    // Navegación entre páginas
    let currentPage = 1;
    function nextPage() {
      document.getElementById(`page${currentPage}`).classList.remove('active');
      currentPage++;
      document.getElementById(`page${currentPage}`).classList.add('active');
    }

    function restart() {
      document.getElementById(`page${currentPage}`).classList.remove('active');
      currentPage = 1;
      document.getElementById(`page${currentPage}`).classList.add('active');
    }