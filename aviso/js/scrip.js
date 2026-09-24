console.log('Hello World');

const menuToggle = document.querySelector('.menuToggle');
const mainNavigation = document.querySelector('#mainNavigation');

if (menuToggle && mainNavigation) {
    const setMenuState = (isOpen) => {
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
    });

    mainNavigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            setMenuState(false);
            menuToggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        if (isOpen && !menuToggle.contains(event.target) && !mainNavigation.contains(event.target)) {
            setMenuState(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 670) {
            setMenuState(false);
        }
    });
}