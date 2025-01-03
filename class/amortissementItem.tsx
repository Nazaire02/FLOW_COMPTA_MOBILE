class amortissementObj{
    anterieur?:string;
    exercice?:string;
    total?:string
}

export class Amortissement {
    numCompte!:string;
    desImmo?: string;
    tauxAmort?: string;
    date?: string;
    valeurAcquisition?: string;
    amortissements?: amortissementObj;
    valeurResiduelle?: string;
    prixCession?: string;
    plusValue?: string;
}