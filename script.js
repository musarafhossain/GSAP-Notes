document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('toggle-mode-btn');
    const toggleSidebar = document.getElementById('toggle-sidebar-btn');
    const sidebar = document.getElementById('side-bar');
    const body = document.querySelector('body');
    const themeStyle = document.getElementById('theme-style');

    // Toggle light/dark mode
    toggleMode.addEventListener('click', () => {
        body.classList.toggle('dark');
        toggleMode.classList.toggle('fa-sun');
        toggleMode.classList.toggle('fa-moon');

        if (body.classList.contains('dark')) {
            themeStyle.href = 'https://cdn.jsdelivr.net/npm/prismjs/themes/prism-okaidia.css';
        } else {
            themeStyle.href = 'https://cdn.jsdelivr.net/npm/prismjs/themes/prism.css';
        }
    });

    // Toggle sidebar
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-open');
    });

    const urlParams = new URLSearchParams(window.location.search);
    const chapter = urlParams.get('chapter');

    if (chapter) {
        // Load the Markdown file
        loadMarkdown(chapter);
    } else {
        // Load the Markdown file
        loadMarkdown('1_Introduction to GSAP');
    }


});

function setChapter(chapter) {
    const url = new URL(window.location.href);

    // Set the query parameter
    url.searchParams.set('chapter', chapter);

    // Update the browser's URL without reloading the page
    window.history.pushState({}, '', url);
}

async function loadMarkdown(file) {
    file = `${file}/README.md`
    const response = await fetch(file);
    const markdownText = await response.text();
    const htmlContent = marked.parse(markdownText);
    document.getElementById('output').innerHTML = htmlContent;
    // Highlight code blocks after rendering
    Prism.highlightAll();
}