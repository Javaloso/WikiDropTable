export const general = {
    'debugger': 'debugger',
    'name': 'nome',
    'examine': 'examinar',
    'image': 'imagem',
    'release': 'lançamento',
    'update': 'atualização',
    'quest': 'missão',
    'file': 'Arquivo',
    'members': 'membros',

    // Months
    'january': 'Janeiro',
    'february': 'Fevereiro',
    'march': 'Março',
    'april': 'Abril',
    'may': 'Maio',
    'june': 'Junho',
    'july': 'Julho',
    'august': 'Agosto',
    'september': 'Setembro',
    'october': 'Outubro',
    'november': 'Novembro',
    'december': 'Dezembro',
}

export const dropTableHead = {
    ...general,
    'DropsTableHead': 'ObjetoLargadoCabeçalho',
    'DropsLine': 'ObjetoLargado',
    'DropsLineSpiritGems': 'ObjetoLargadoGemasEspirituais',
    'DropsLineTriskelion': 'ObjetoLargadoTríscele',
    'DropsLineGhosts': 'ObjetoLargadoFantasmas',
    'DropsLineRW': 'ObjetoLargadoRecompensas',
    'DropsLineWC': 'ObjetoLargadoCorteDeLenha',
    'Universal drops': 'ObjetoLargadoUniversal',
    'DropsLineArch': 'ObjetoLargadoArq',
    'DropsLineThiev': 'ObjetoLargadoRoubo',
    'DropsLineHunt': 'ObjetoLargadoCaça',
    'namenotes': 'nomeNotas',
    'quantity': 'quantidade',
    'quantitynotes': 'quantidadeNotas',
    'rarity': 'raridade',
    'raritynotes': 'raridadeNotas',
    'version': 'ver',
    'noted': 'notas',
    'always': 'sempre',
    'common': 'comum',
    'uncommon': 'incomum',
    'very rare': 'muito raro',
    'rare': 'raro',
    'varies': 'varia',
    'random': 'aleatório',
    'unknown': 'desconhecido',
    'raritynotes': 'raridadeNotas',
    'alch\\s*=\\s*yes': 'alq = sim',
    'alch\\s*=\\s*no': 'alq = não',
    'AltCurrency': `moedaAlt`,
    'gemw\\s*=\\s*no': `mercado = não`,
    'gemw\\s*=\\s*yes': `mercado = sim`,
    'DropsTableBottom': `ObjetoLargadoRodapé`,
    'DropsTableBottom\d+': `ObjetoLargadoRodapé`,
    'DropsLineEnd': 'ObjetoLargadoRodapé',
    'Main Drop': 'Objetos principais',
};

export const infoboxItem = {
    ...general,
    'infobox item': 'Infobox objeto',
    'yes': 'Sim',
    'no': 'Não',
    'update': 'atualização',
    'tradeable': 'negociável',
    'stackable': 'acumulável',
    'equipable': 'equipável',
    'value': 'valor',
    'disassembly': 'desmontável',
    'noteable': 'cupom',
    'actions': 'ações',
    'actions_equipped': 'ações_equipado',
    // Tenho que ver as ações pra adicionar aqui
    'destroy': 'destruir',
    'drop': 'largar',
    // Tenho que ver os itens presentes em destruir
    'kept': 'em morte',
    'reclaimable': 'recuperável',
    // Ver os itens presentes em kept
    'exchange': 'gemw',
    'weight': 'peso',
}

export const infoboxRecipe = {
    ...general,
    'Creation': 'Criação',
    'Switch infobox': 'Alterar Infobox',
    'Infobox Recipe': 'Infobox criar',
    'skill': 'habilidade',
    'skillXP': 'habilidade_exp',
    'secSkill': 'habilidade_sec',
    'secXP': 'habilidade_sec_exp',
    'secLevel': 'nível_sec',
    'geValue': 'mercado',
    'level': 'nível',
    'method': 'método',
    'mat': 'componente',
    'mat1price': 'mat1preço',
    'mat2price': 'mat2preço',
    'mat3price': 'mat3preço',
    'mat4price': 'mat4preço',
    'mat5price': 'mat5preço',
    'mat6price': 'mat6preço',
    'mat7price': 'mat7preço',
    'mat8price': 'mat8preço',
    'mat9price': 'mat9preço',
    'mat1qty': 'mat1quantidade',
    'mat2qty': 'mat2quantidade',
    'mat3qty': 'mat3quantidade',
    'mat4qty': 'mat4quantidade',
    'mat5qty': 'mat5quantidade',
    'mat6qty': 'mat6quantidade',
    'mat7qty': 'mat7quantidade',
    'mat8qty': 'mat8quantidade',
    'mat9qty': 'mat9quantidade',
    'Discover': 'Descobrir',

    // ==== Start: Facility and misc parameters ====
    'facility': 'facilidade',
    'furnace': 'fornalha',
    // 'workshop': 'bancada do inventor',
    'inventor\'s workbench': 'bancada do inventor',
    'obelisk': 'obelisco',
    'fast incubator': 'incubadora rápida',
    'fast compost bin': 'caixa de adubo rápido',

    'Blueprint': 'Projeto',
    // ==== End: Facility parameters ====

    // ==== Start: Exception parameters ====
    'Lvl-1 Enchant': 'Encantamento nível 1',
    'Lvl-2 Enchant': 'Encantamento nível 2',
    'Lvl-3 Enchant': 'Encantamento nível 3',
    'Lvl-4 Enchant': 'Encantamento nível 4',
    'Lvl-5 Enchant': 'Encantamento nível 5',
    'Lvl-6 Enchant': 'Encantamento nível 6',
    'requires a': 'Requer um(a)',
    'requires an': 'Requer um(a)',
    'Must be performed at the': 'Deve ser realizada em um(a)',
    'Enchanted using the': 'Encantado usando o',
    'spell': '',
    'ilinkp': 'plinkp'
    // ==== End: Exception parameters ====
}

export const skillNames = {
    ...general,
    'Attack': 'Ataque',
    'Strength': 'Força',
    'Defence': 'Defesa',
    'Ranged': 'Combate à Distância',
    'Prayer': 'Oração',
    'Magic': 'Magia',
    'Constitution': 'Condição física',
    'Agility': 'Agilidade',
    'Herblore': 'Herbologia',
    'Thieving': 'Roubo',
    'Crafting': 'Artesanato',
    'Fletching': 'Arco e flecha',
    'Slayer': 'Extermínio',
    'Hunter': 'Caça',
    'Mining': 'Mineração',
    'Smithing': 'Metalurgia',
    'Fishing': 'Pesca',
    'Cooking': 'Culinária',
    'Firemaking': 'Arte do fogo',
    'Woodcutting': 'Corte de Lenha',
    'Runecrafting': 'Criação de Runas',
    'Farming': 'Agricultura',
    'Construction': 'Construção',
    'Summoning': 'Evocação',
    'Dungeoneering': 'Dungeon',
    'Divination': 'Divinação',
    'Invention': 'Invenção',
    'Archaeology': 'Arqueologia',
}

export const updateHistory = {
    'eeeee': 'eeee',
    'Update history': 'Histórico de Atualizações',
    'UH': 'HA',
    'UL': 'LA',
    'type': 'tipo',
    'update': 'atualização',
    'date': 'data',

    'patch': 'correção',
    'hidden': 'oculta'

}

export const infoboxSummoning = {
    'debugger': 'debugger',
    'createxp': 'exp criar',
    'usexp': 'exp uso',
    'low': 'básica',
    'high': 'avançada',
    'returnlvl': 'nível da troca',
    'yes': 'sim',
    'no': 'não',
    
    // Familiar
    'update': 'atualização',
    'level': 'nível',
    'time': 'tempo',
    'points': 'pontos',
    'size': 'tamanho',
    'combat': 'combate',
    'lifepoints': 'pontos vitais',
    'immune to poison': 'imune veneno',
    'ability': 'habilidade',
    'style': 'estilo',
    'special': 'especial',
    'max': 'max',
    'race': 'raça',
    'attack': 'ataque',
    'defence': 'defesa',
    'ranged': 'combate à distância',
    'magic': 'magia',
    
    // Summon Pouch
    'Infobar Summon Pouch': 'Databox Algibeiras de Evocação',
    'shards': 'fragmentos',
    'charm': 'talismã',
    'tertiary': 'terciário',
    'tertiarycost': 'custoterciário',
    'cost': 'custo',
    
    // Summon scrioll
    'Infobox Summon scroll': 'Databox Pergaminhos de Evocação',
    'return': 'retorno',

    // Charms:
    'gold': 'Dourado',
    'green': 'Verde',
    'crimson': 'Carmesim',
    'blue': 'Azul',
    'elder': 'Ancião',

}

export const infoboxMonster = {
    ...general,
    'debugger': 'debugger',
    'Switch infobox': 'Alterar Infobox',
    'Infobox Monster new': 'Infobox monstro',
    'aggressive': 'agressivo',
    'poisonous': 'venenoso',
    'experience': 'experiência',
    'webxp2h': 'exparma2m',
    'wepxpmhandarmour': 'exparma',
    'wepxpoh': 'exparmasec',
    'level': 'nível',
    'lifepoints': 'vida',
    'slaylvl': 'extermínio nível',
    'slayxp': 'extermínio exp',
    'slayercat': 'extermínio categoria',
    'assigned_by': 'designado por',
    'immune_to_poison': 'imune a veneno',
    'immune_to_stun': 'imune a atordoamento',
    'immune_to_deflect': 'imune a dano de recuo',
    'immune_to_drain': 'imune a drenar estatísticas',
    'weakness': 'fraqueza',
    'susceptibility': 'suscetível a',
    'style': 'estilo',
    'primarystyle': 'estilo primário',
    'speed': 'velocidade',
    'attack': 'ataque',
    'ranged': 'combate à distância',
    'magic': 'magia',
    'defence': 'defesa',
    'max_melee': 'dano corpo',
    'max_ranged': 'dano distância',
    'max_magic': 'dano magia',
    'max_spec': 'dano especial',
    'armour': 'armadura',
    'acc_melee': 'precisão corpo',
    'acc_ranged': 'precisão distância',
    'acc_magic': 'precisão magia',
    'aff_weakness': 'afinidade fraqueza',
    'aff_melee': 'afinidade corpo',
    'aff_ranged': 'afinidade distância',
    'aff_magic': 'afinidade magia',
    'abilities': 'recursos',
    'yes': 'Sim',
    'no': 'Não',
}

export const infoboxNPC = {
    'debugger': 'debugger',
    'update': 'atualização',
    'race': 'raça',
    'location': 'localização',
    'gender': 'gênero',
    'map': 'intmap',
    'removal': 'descontinuado',
    'removalupdate': 'descontinuado notícia',
    'shop': 'vendedor',
    'actions': 'ações',
    'thievelvl': 'nívelRoubo',
    'f2pvisible': 'f2pvisível',
    'voice': 'voz',
    'objectid': 'cenarioid',
    'yes': 'Sim',
    'no': 'Não',
    'male': 'Homem',
    'female': 'Mulher'
}