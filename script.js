const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// dashboard //

function navigateToPage(elementId, url) {
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error(`Element with ID '${elementId}' not found.`);
        return;
    }

    element.addEventListener('click', function() {
        if (!url || typeof url !== 'string') {
            console.error(`Invalid URL provided for the ${elementId} element.`);
            return;
        }
        
        window.location.href = url;
    });
}
navigateToPage('profile-page', 'profile.html');
navigateToPage('expenses-page', 'expenses.html');
navigateToPage('income-page', 'income.html');
navigateToPage('settings-page', 'settings.html');
navigateToPage('faqs-page', 'faqs.html');