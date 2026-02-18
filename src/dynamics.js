function renderDynamics() {
    const container = document.getElementById('dynamics-content');
    if (!container || !dynamicsData.length) return;
    container.innerHTML = dynamicsData.map(section => `
        <div class="dynamics-section">
            <div class="dynamics-header" onclick="toggleDynamics(this)">
                <span class="prompt">[+]</span> ${section.title}
            </div>
            <div class="dynamics-content">${section.content}</div>
        </div>
    `).join('');
}
