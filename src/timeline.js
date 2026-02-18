function renderTimeline() {
    const container = document.getElementById('timeline-content');
    if (!container) return;
    container.innerHTML = timelineData.map(entry => `
        <div class="timeline-entry">
            <div class="timeline-date">${entry.date}</div>
            ${entry.content ? `<div${entry.class ? ` class="${entry.class}"` : ''}>${entry.content}</div>` : ''}
        </div>
    `).join('');
}
