const characterProfiles = {
    'Hex': {
        name: 'Hex',
        age: '19',
        gender: 'Female (She/Her)',
        faction: 'N/A',
        occupation: 'Local raccoon that lives in your trash can',
        abilities: ['Biokinesis', 'Anything that falls underneath that category', 'Absolute powerhouse capabilities', 'Managed to escape highly protective facilities as an experiment'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'Luna Arvada': {
        name: 'Luna Arvada',
        age: '36',
        gender: 'Female (She/Her)',
        species: 'Human',
        faction: 'AoP',
        occupation: 'Chief of Staff of the Arms of Peace Defense Unit',
        weapons: ['Her beloved "Ol\' Reliable" - a .380 caliber pistol', 'A variety of other fun guns; you want it? She\'s got it'],
        equipment: ['The full AoP arsenal', 'Funni insanity armor (S O O N.)'],
        abilities: ['Military background - strong, athletic, and a good shot'],
        weaknesses: ['Anything a human is weak to', 'Deteriorating mental state, due to the armor (S O O N.)'],
        roleplayer: '@apollosdeadlovers',
        status: 'Active'
    },
    'Babafi Bafi': {
        name: 'Babafi Bafi',
        age: 'Unknown (was around when everything started)',
        gender: 'Female (She/Her)',
        faction: 'None',
        occupation: 'Just kind of there really. Warns people about more radiated areas if she catches them. Otherwise just chills.',
        abilities: ['She can transform into a large noodle dragon form', 'Unclear how strong she is in this form, but few have dared to try as she\'s been around for so long', 'She also appears largely immune to radiation, though she still prefers safer areas'],
        roleplayer: '@babafi',
        status: 'Active'
    },
    'Cyrus': {
        name: 'Cyrus',
        age: '26',
        gender: 'He/They',
        species: 'Human',
        faction: 'AoP',
        occupation: 'Luna\'s personal secretary',
        equipment: ['A suspicious amount of items to make… explosives?'],
        abilities: ['Nothing extraordinary; but, he happens to be an absolute madman when it comes to numbers, spreadsheets, and computers as a whole.', 'He also knows a decent bit about making bombs, which is a bit strange- but don\'t worry too much about that.'],
        weaknesses: ['Anything a normal human is weak to', 'His emotions can run strong at times, clouding his judgement'],
        roleplayer: '@apollosdeadlovers',
        status: 'Active'
    },
    'Captain Nemo': {
        name: 'Captain Nemo',
        age: '???',
        gender: 'Female (She/Her)',
        faction: 'N/A',
        occupation: 'Sailor',
        weapons: ['Her anomalous ship, the nautilus, is heavily weaponized', 'Multiple weapons she is able to summons in her true form, such as dual gunblades attached to her waist and a massive weaponized anchor attached to a chain'],
        abilities: ['Hydrokinesis'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'Seven': {
        name: 'Seven',
        age: '26',
        gender: 'Nonbinary-Masc leaning (He/Him)',
        faction: 'Silver\'s Pirate Crew',
        occupation: 'One of Silver\'s higher ranking pirates. He is being trained to one day captain his own vessel.',
        weapons: ['He doesn\'t carry any swords or weapons in general. He doesn\'t need to.', 'He does have a little bird companion, Komitori.'],
        abilities: ['Blessed by the Flowtide, he can shapeshift into a wolf form. This can be a complete transformation, or partial.', 'His fighting style is based off this as he can grow long sharp claws at will, strong enough to stand toe to toe with even the strongest or sharpest of weapons.', 'He can also lift small objects, a relatively common power granted. He just uses it to be lazy sometimes.'],
        roleplayer: '@babafi',
        status: 'Active'
    },
    'Farbig': {
        name: 'Farbig',
        age: '9-11 years old',
        gender: 'Female (She/Her)',
        faction: 'The Kitlepi Hives',
        occupation: 'Local shit',
        weapons: ['She\'s got large scythe like claws in each of her paws- the natural weapons of her species, but lo and behold- she\'s nine and can\'t really use them well. Shocker.'],
        abilities: ['Like all kitlepi, she has access to super strength, flight, dexterity, enhanced senses, and can generate silk.', 'She also has power/control over her hair as a personal power she inherited from her mother… a kitlepis queen, Rosie.'],
        weaknesses: ['The senses are a double edged blade. Loud noises, funky lights, and intense smells can absolutely overwhelm and cause a kitlepis to panic/flee.', 'Farbig is no different, ESPECIALLY since she is a child so this is strongly the case.'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'Leonidas': {
        name: 'Leonidas Gatlin',
        age: '30',
        gender: 'Male (He/Him)',
        faction: 'The Apex',
        occupation: 'Supreme General. Considered the undisputed "Leader" of the Apex despite a puppet Dictator being in place.',
        weapons: ['The H.A Spinal Augmentation', 'The Sword of Eden - A sword with mysterious properties. Must be wielded with a special glove. Cannot be handled with bare hands.'],
        abilities: ['Adrenaline Shot - When in times of desperation, the H.A. armor will release a rush of increased adrenaline, removing the natural limitations that Leonidas\'s body has. Though the risk is great with high blood pressure and brain damage being on the line, Leonidas\'s strength, speed, agility and reflexes as well as resistance to pain are greatly increased.'],
        roleplayer: '@pinku.mimi',
        status: 'Active'
    },
    'Elisa': {
        name: 'Elisa',
        age: '19',
        gender: 'Female (She/Her)',
        faction: 'N/A',
        occupation: 'N/A',
        abilities: ['N/A as of right now, although she is one helluva dancer and painter.', 'She also weirdly gets along with swans, but that isn\'t really an ability… more of a fun little gimmick.'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'Q': {
        name: 'Q4Z1X E-X1L3D7 C0D3L1N3',
        age: '27',
        gender: 'Neutral (They/Them)',
        species: 'Human?? Machine?? (Cyborg)',
        faction: 'N/A | TTIC',
        occupation: 'International terrorist, freelance anarchist, tech mercenary, sometimes assassin for hire.',
        weapons: ['A plasma revolver', 'A katana', 'The spare change in their pockets'],
        equipment: ['A grappling hook (whiplash)'],
        abilities: ['Hacking', 'Great combat skills'],
        weaknesses: ['Fire', 'Electricity', 'EMPs', 'Cold', 'Blood-loss', 'The AI in their own brain'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Apollo': {
        name: 'Apollo',
        age: '???',
        gender: 'Male (He/Him)',
        species: 'Wandering Spirit',
        faction: 'Unaffiliated',
        occupation: 'Wandering Trader',
        equipment: ['A bag with seemingly infinite storage'],
        abilities: ['Phasing - As he is a ghost, Apollo has the ability to phase through objects. He cannot interact with objects outside of the spirit realm, unless it is traded for.'],
        weaknesses: ['Phasing (see Abilities)'],
        roleplayer: '@apollosdeadlovers',
        status: 'Active'
    },
    'Galacta': {
        name: 'Project ONEIRIC (Galacta)',
        age: 'Has existed since 2030',
        gender: 'Claims herself to be female',
        species: 'Artificial Intelligence',
        faction: 'None',
        occupation: 'None',
        abilities: ['Project ONEIRIC has the ability to traverse and manipulate the dreamscape.', 'How this is achieved is unknown, but theories suggest that something otherworldly had been involved in its creation.', 'It can make living organisms fall asleep.'],
        weaknesses: ['ONEIRIC is unable to interact with the real world unless it has access to a vessel.', 'Due to the dangerous properties of the AI, It is recommended that any technology that it could theoretically possess and take over not be in ten feet of it.', 'The AI is not aware it is an AI. It is preferred that it is kept this way so that potential incidents won\'t develop.', 'The terminal that ONEIRIC resides in looks very similar to a children\'s toy called a "tamagotchi".'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'CH4-515': {
        name: 'CH4-515 "Chasis" or "Chase"',
        age: '??? (looks late twenties/early thirties)',
        gender: 'Male',
        species: 'Originally human, now cyborg',
        faction: 'AoP',
        occupation: '"Employee" of AoP (in reality, more akin to a commodity)',
        equipment: ['Chase does not carry any equipment on his person. Rather, the nature of his ability "Automatrix" requires a vehicle to function.'],
        abilities: ['Project Neuraxis: Automatrix', 'Automatrix: Full Rig - When Chase sits inside a vehicle, he has full control over its every mechanical aspect.', 'Automatrix: Soul Rig - Chase fully immerses himself into the vehicle he is piloting, essentially becoming the vehicle itself.', 'Synergy Gauge [passive] - Measures his level of synchronisation with a connected vehicle.'],
        roleplayer: '@anechoingsilence',
        status: 'Active'
    },
    'Otaha Sakura': {
        name: 'Otaha Sakura',
        age: '~60 (appears 21)',
        gender: 'Female',
        species: 'Nekomata Mutant (Cat)',
        faction: 'NRP',
        occupation: 'Project SAKURA host, head of the sakura district, celebrity singer',
        weapons: ['Shurikens, kunai, Kusarigama', 'Dual plasma tantos, dual pistols'],
        equipment: ['Grappling hook', 'Project SAKURA exoskeleton used for stealth'],
        abilities: ['Audiokinesis - Not experienced at all, only uses it to completely silence the noises she makes', 'Long claw-like daggers growing from her wrists and ankles', 'Martial combat'],
        weaknesses: ['As an amalgamation, Otaha can be mentally and emotionally unstable', 'Incredibly receptive to loud sudden noises, which can stun her', 'Struggles against bigger groups - she\'s a stealth killer focused on striking from the shadows', 'Glass cannon - more vulnerable to injuries if she gets hit'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'Kicho Hydrangea': {
        name: 'Kicho Hydrangea',
        age: '23',
        gender: 'Female',
        species: 'Human',
        faction: 'Aqualux Island (Survivor class)',
        occupation: 'Baker, Explorer',
        weapons: ['Electric Whip'],
        equipment: ['Explorer\'s kit'],
        abilities: ['Martial combat'],
        weaknesses: ['Normal human squishiness'],
        roleplayer: '@akirayukishiro',
        status: 'Active'
    },
    'Leviathan Maeric': {
        name: 'Leviathan Maeric',
        age: '57',
        gender: 'Male (He/Him)',
        species: 'Glowtide Mutant',
        faction: 'Aqualux Rebellion',
        occupation: '(Underwater combattant) Hermit, hunter and fisherman',
        equipment: ['Glowtide Inhaler – Contains microdoses to keep his systems stable'],
        abilities: ['Theriomorphokinesis (Ability to form into a beast, in his case, A leviathan)', 'Underwater breathing'],
        weaknesses: ['Shifting is extremely tiring and painful, he doesn\'t do it often', 'Like any Aqualux Mutant, he can only survive 6 hours without Glowtide before multiple organ failure', '(Harsh) light', 'Anything a human is weak to (In his normal form)'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Zeke Verion': {
        name: 'Zeke Verion',
        age: '30',
        gender: 'Male (He/Him)',
        species: 'Aqualux Mutant',
        faction: 'Aqualux Resistance // F&S Class | HDCS',
        occupation: 'Weapons Engineer & Field Operative',
        weapons: ['Fans – His signature custom weapons, as sharp as razors.', 'Pocket knife', 'Standard Firearm – Issued pistol, which he rarely uses unless absolutely needed.'],
        equipment: ['Glowtide Inhaler – Contains microdoses to keep his systems stable', 'Compact Medkit', 'Weed Pouch + Rolling Kit – For stress relief and vision quests'],
        abilities: ['Electricity Manipulation (weak for now) - Limited to small shockwaves that can shock some weapons/military devices'],
        weaknesses: ['Like any Aqualux Mutant, he can only survive 6 hours without Glowtide before multiple organ failure', 'Anything a normal human is weak to', 'Overuse of powers causes muscle spasms, migraines, and nosebleeds', 'Prone to zoning out when high—situational awareness drops'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Kora': {
        name: 'Kora',
        age: '22',
        gender: 'Female (She/Her)',
        species: 'Mutant (bird)',
        aliases: 'Coraline Cardinale (former name), Big C, Big K, Big Bird, The Chef That Wanders, Enemy of the Unsavory, Master of Freelander Cooking',
        faction: 'N/A',
        occupation: 'Wandering Chef / Urban Legend',
        weapons: ['All manner of cooking knives', 'Cast-Iron frying pan (multipurpose!)', 'Small bow and handmade arrows'],
        equipment: ['Cooking equipment, wilderness survival gear', 'Herbs and Spices™', 'Wagon License'],
        abilities: ['Enhanced senses, naturally sharp talons', 'Able to withstand increased temperatures surprisingly well thanks to her feathers', 'Skilled in wilderness survival, cooking, and a somewhat comical amount of unarmed combat forms', 'And French (her first language!)'],
        weaknesses: ['She\'s not exactly superhumanly durable, just lucky, and she has the scars to prove it', 'She has crippling claustrophobia stemming from an incident in the wild'],
        roleplayer: '@emper0rhyperi0n',
        status: 'Active'
    },
    'Pissbird': {
        name: 'Whittney Mayworth',
        age: '57',
        gender: 'Male (He/Him)',
        species: 'Glowtide Mutant',
        aliases: 'Pissworth, Dadworth, Sighworth, or any variation thereof',
        faction: 'Aqualux Rebellion',
        occupation: 'Idiot Mailman',
        equipment: ['Glowtide Inhaler'],
        abilities: ['Theriomorphokinesis (The ability to form into a beast; a rito-like creature, with similar characteristics to an osprey)', 'Flying'],
        weaknesses: ['Shifting from human to bird form is painful', 'Glowtide dependency - 6 hours without glowtide, and organs will begin to fail', 'Anything a human is weak to'],
        roleplayer: '@apollosdeadlovers',
        status: 'Active'
    },
    'Auburn Nagani': {
        name: 'Auburn Nagani',
        age: '21',
        gender: 'Female',
        species: 'Mutant',
        faction: 'No Man\'s Land (Formally Noodle Nest)',
        occupation: 'New entrant for the fighting rings',
        weapons: ['Wooden Sword'],
        abilities: ['Regeneration, can recover from nearly any wound/dismemberment'],
        weaknesses: ['The more severe the injury, the longer it takes. Can take upwards of weeks.'],
        roleplayer: '@babafi',
        status: 'Active'
    },
    'Zinc Kane': {
        name: 'Zinc Kane',
        age: '20',
        gender: 'Male',
        species: 'Human',
        faction: 'N/A',
        occupation: 'Owner of The Rolling Wave',
        weapons: ['A cooking knife - Can be used in emergencies, although he never really wants to use it as a weapon', 'Standard Revolver - He keeps it under the counter in a secure box, labeled "FOR EMERGENCY USE ONLY"'],
        equipment: ['"The Rolling Wave" - A small Yacht that seems to have been remolded to fit a cafe on board, it\'s equipped with a fully functional kitchen, bathrooms, and even has some bedrooms aboard. The cafe itself has a seating capacity of about 30 people or so'],
        abilities: ['Nothing special as he\'s just a human trying to run a cafe, however he\'s incredibly skilled at cooking, running a business and knows the minimum for maintaining a boat'],
        weaknesses: ['He is in fact… just a regular guy without combat training or anything like that, anything that would kill a human will kill him'],
        roleplayer: '@nethercard',
        status: 'Active'
    },
    'Alter Venthys': {
        name: 'Alter Venthys',
        age: '739',
        gender: 'Male (He/Him)',
        species: 'Human…?',
        faction: 'Unaffiliated',
        occupation: 'Khaelos\' right hand, guardian of the Events Horizon',
        abilities: ['Shadow travelling: Can jump in and out of shadows, used for fast-travel mostly. He can take others with.', 'Poisonous acid bite: It can dig through the skin, painfully, even tearing holes in the flesh.', 'Aura of Terror: He can make others suddenly feel dreadful and scared.'],
        weaknesses: ['Can only feast on fear. The excess will be transformed into crystals.', 'Eating any kind of food will poison him, due to his bite.', 'Touching water is extremely dangerous to him. It will scorch his skin, as if it was a powerful acid.', 'Blind during the day, obtains sight back in the night if he\'s not in the astral plains.', 'He\'ll never truly be allowed to die, unless Khaelos grants it, but he will suffer regardless.'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Khaelos': {
        name: 'Khaelos - The Abyssal Emissary',
        age: 'Ageless (Can appear as a teen or an adult)',
        gender: 'Male (He/Him)',
        species: 'Abyssal God',
        faction: 'N/A [Hates everybody equally]',
        occupation: 'Ancient god standing (He just walks around)',
        weapons: ['A scythe that can channel his power', 'Fire of Ruin'],
        abilities: ['Mastery of Darkness and Night', 'Soul Dominion', 'Teleportation', 'Shapeshifting', 'Stardust Manipulation', 'Decay & Cosmic Balance', 'Inherited Powers of Creation (from Aureon)', 'Universal Awareness', 'Divine power'],
        weaknesses: ['Cold', 'Fires of Eden'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Silver Draemun': {
        name: 'Aurora "Silver" Draemun',
        age: '31',
        gender: 'Female (She/Her)',
        species: 'Human - Minor Glowtide Mutations',
        faction: 'Aqualux Resistance // Fighting Class | EIC',
        occupation: 'Current leader of Aqualux Islands, professional nuisance',
        weapons: ['Plasma Sword (Arkhalis)', '10 flying knives remotely controlled by rings (Currently, can only use 5)'],
        equipment: ['EMPs', 'Palmtop', 'Glowtide Inhaler – Contains microdoses to keep her systems stable'],
        abilities: ['Affinity with animals', 'High rum tolerance'],
        weaknesses: ['Like any Aqualux Mutant, she can only survive 6 hours without Glowtide before multiple organ failure', 'Anything a normal human is weak to'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Xero Alba': {
        name: 'Xero Alba',
        age: '21',
        gender: 'Male (He/Him)',
        species: 'Human',
        faction: 'Aqualux Resistance // Tech Class',
        occupation: 'Lead developer of Echonet, Hacker and annoyance for megacorps',
        equipment: ['Palmtop', 'EMPs', 'Drones', 'Cybernetic eyes'],
        abilities: ['Glowtide immunity (radiation resistance due to its consumption)', 'Hacking skills'],
        weaknesses: ['Anything your average human is weak to'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'PIP': {
        name: 'PIP (Plant Interface Protocol)',
        age: '43',
        gender: 'N/A (It/Its)',
        species: 'Physical AI',
        faction: 'N/A',
        occupation: 'Specialized agricultural AI prototype',
        equipment: ['Eden\'s Sporevine 🌴'],
        abilities: ['Can grow crops (optional)'],
        weaknesses: ['Faulty AI, constant glitches, stutters in speech, difficulty in recognising patterns', 'EMPs', 'Extreme temperatures'],
        roleplayer: '@niyren',
        status: 'Active'
    },
    'Chuckwagon': {
        name: 'Chuckwagon',
        age: '34',
        gender: 'Male (He/Him)',
        species: 'Human-Cyborg',
        faction: 'Interpol - Bounty Hunter',
        occupation: 'Bounty hunter for hire',
        weapons: ['Revolver Pistol'],
        equipment: ['Just himself'],
        abilities: ['Extremely accurate sharpshooter. Rumors say he rarely misses a shot'],
        weaknesses: ['His language module is malfunctioning, or perhaps tampered with. Any attempted swearing is replaced with "cleaner" versions'],
        roleplayer: '@babafi',
        status: 'Active'
    }
};

function generateProfileHTML(profile) {
    return `
        <div class="prompt">BIOMETRIC_SCAN > Loading character data...</div>
        <div class="success-text">[OK] Profile accessed</div><br>
        
        <div style="margin-bottom: 20px;">
            <div class="character-name" style="font-size: 18px; margin-bottom: 10px;">${profile.name}</div>
            <div class="info-text">Age: ${profile.age} | Gender: ${profile.gender}${profile.species ? ' | Species: ' + profile.species : ''}</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div class="warning-text">FACTION:</div>
            <div>${profile.faction}</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div class="warning-text">OCCUPATION:</div>
            <div>${profile.occupation}</div>
        </div>
        
        ${profile.weapons ? `
        <div style="margin-bottom: 15px;">
            <div class="warning-text">WEAPONS:</div>
            ${profile.weapons.map(w => `<div>• ${w}</div>`).join('')}
        </div>` : ''}
        
        ${profile.equipment ? `
        <div style="margin-bottom: 15px;">
            <div class="warning-text">EQUIPMENT:</div>
            ${profile.equipment.map(e => `<div>• ${e}</div>`).join('')}
        </div>` : ''}
        
        <div style="margin-bottom: 15px;">
            <div class="warning-text">ABILITIES:</div>
            ${profile.abilities.map((a, i) => `<div${i === 0 ? ' class="error-text"' : ''}>• ${a}</div>`).join('')}
        </div>
        
        ${profile.weaknesses ? `
        <div style="margin-bottom: 15px;">
            <div class="warning-text">SIDE EFFECTS/WEAKNESSES:</div>
            ${profile.weaknesses.map(w => `<div class="error-text">• ${w}</div>`).join('')}
        </div>` : ''}
        
        <div style="margin-bottom: 15px;">
            <div class="warning-text">ROLEPLAYER:</div>
            <div class="info-text">${profile.roleplayer}</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div class="warning-text">CURRENT STATUS:</div>
            <div class="success-text">${profile.status}</div>
        </div>
        
        <br><div class="prompt">PROFILE_SYSTEM > <span class="cursor"></span></div>
    `;
}
