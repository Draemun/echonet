function searchCharacters(query) {
    const cards = document.querySelectorAll('.character-card');
    query = query.toLowerCase();
    
    cards.forEach(card => {
        const name = card.querySelector('.character-name').textContent.toLowerCase();
        const faction = card.querySelector('.character-faction').textContent.toLowerCase();
        const user = card.querySelector('.character-user').textContent.toLowerCase();
        
        const factionMatch = faction.split(/[\s\-\/]+/).some(part => part === query) || faction.includes(query);
        
        if (name.includes(query) || factionMatch || user.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openCharacterSheet(characterName) {
    const modal = document.getElementById('character-modal');
    const title = document.getElementById('sheet-title');
    const content = document.getElementById('sheet-content');
    
    title.textContent = characterName.toUpperCase() + ' - PROFILE';
    
    const profile = characterProfiles[characterName];
    
    if (profile) {
        content.innerHTML = generateProfileHTML(profile);
    } else {
        content.innerHTML = `
            <div class="prompt">BIOMETRIC_SCAN > Loading character data...</div>
            <div class="error-text">[ERROR] Character profile not found</div><br>
            <div class="warning-text">Profile for ${characterName} is not available in the database.</div>
            <br><div class="prompt">PROFILE_SYSTEM > <span class="cursor"></span></div>
        `;
    }
    
    modal.style.display = 'flex';
}

function closeCharacterSheet() {
    document.getElementById('character-modal').style.display = 'none';
}
