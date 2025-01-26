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
        console.log("first")
    });

    // Load the Markdown file
    loadMarkdown('1_Introduction to GSAP/README.md');



});

async function loadMarkdown(file) {
    const response = await fetch(file);
    const markdownText = await response.text();
    const htmlContent = marked.parse(markdownText);
    document.getElementById('output').innerHTML = htmlContent;
    // Highlight code blocks after rendering
    Prism.highlightAll();
}
