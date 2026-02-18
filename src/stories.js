let stories = [...storiesData];

function renderStories() {
    const container = document.getElementById('story-list');
    if (!container) return;
    const searchInput = document.getElementById('story-search');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    const filteredStories = stories.filter(story => {
        const character = story.character.toLowerCase();
        const event = story.event ? story.event.toLowerCase() : '';
        const title = story.title.toLowerCase();
        return character.includes(searchTerm) || event.includes(searchTerm) || title.includes(searchTerm);
    });
    
    container.innerHTML = filteredStories.map(story => `
        <div class="story-item">
            <div class="info-text story-title">${story.title}</div>
            <div class="story-meta">
                ${story.character}${story.event ? ` | ${story.event}` : ''}
            </div>
            <div class="story-link">
                <a href="${story.link}" target="_blank">Link</a>
            </div>
        </div>
    `).join('');
}

function filterStories() {
    renderStories();
}
