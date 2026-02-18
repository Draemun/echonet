const characterList = [
    { name: 'Hex', faction: 'N/A', user: '@akirayukishiro' },
    { name: 'Luna Arvada', faction: 'AoP', user: '@apollosdeadlovers' },
    { name: 'Babafi Bafi', faction: 'NN', user: '@babafi' },
    { name: 'Cyrus', faction: 'AoP', user: '@apollosdeadlovers' },
    { name: 'Captain Nemo', faction: 'N/A', user: '@akirayukishiro' },
    { name: 'Seven', faction: 'AR', user: '@babafi' },
    { name: 'Farbig', faction: 'KH', user: '@akirayukishiro' },
    { name: 'Leonidas', faction: 'Apex', user: '@pinku.mimi' },
    { name: 'Elisa', faction: 'N/A', user: '@akirayukishiro' },
    { name: 'Q', faction: 'N/A - TTIC', user: '@niyren' },
    { name: 'Apollo', faction: 'N/A', user: '@apollosdeadlovers' },
    { name: 'Galacta', faction: 'N/A', user: '@akirayukishiro' },
    { name: 'CH4-515', faction: 'AoP', user: '@anechoingsilence' },
    { name: 'Otaha Sakura', faction: 'NRP', user: '@akirayukishiro' },
    { name: 'Kicho Hydrangea', faction: 'AR', user: '@akirayukishiro' },
    { name: 'Leviathan Maeric', faction: 'AR', user: '@niyren' },
    { name: 'Zeke Verion', faction: 'AR - HDCS', user: '@niyren' },
    { name: 'Kora', faction: 'N/A', user: '@emper0rhyperi0n' },
    { name: 'Pissbird', faction: 'AR', user: '@apollosdeadlovers' },
    { name: 'Auburn Nagani', faction: 'NML', user: '@babafi' },
    { name: 'Zinc Kane', faction: 'N/A', user: '@nethercard' },
    { name: 'Alter Venthys', faction: 'N/A', user: '@niyren' },
    { name: 'Khaelos', faction: 'N/A', user: '@niyren' },
    { name: 'Silver Draemun', faction: 'AR - EIC', user: '@niyren' },
    { name: 'Xero Alba', faction: 'AR', user: '@niyren' },
    { name: 'PIP', faction: 'N/A', user: '@niyren' },
    { name: 'Chuckwagon', faction: 'Interpol - Bounty Hunter', user: '@babafi' }
];

function renderCharacterList() {
    const container = document.getElementById('character-list');
    if (!container) return;
    container.innerHTML = characterList.map(char => `
        <div class="character-card" onclick="openCharacterSheet('${char.name}')">
            <div class="character-name">${char.name}</div>
            <div class="character-faction">${char.faction}</div>
            <div class="character-user">${char.user}</div>
        </div>
    `).join('');
}
