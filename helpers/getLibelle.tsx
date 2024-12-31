export function getLibelle(type: string): string {
    switch (type) {
        case 'libelle':
            return 'Libellé';
        case 'tiers':
            return 'Tiers';
        case 'source':
            return 'Source';
        case 'entree':
            return 'Entrée';
        case 'sortie':
            return 'Sorite';
        case 'solde':
            return 'Solde';
        case 'date':
            return 'Date';
        default:
            return type;
    }
}