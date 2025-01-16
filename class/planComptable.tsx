class typeCompte{
    "id": string;
    "libelle": string;
    "created_at": string;
    "updated_at": string
}

class poste{
    "id": string;
    "libelle": string;
    "created_at": string;
    "updated_at": string
}

export class planComptable {
    "id": string;
    "code": string;
    "libelle":string;
    "type_compte":typeCompte;
    "poste":poste;
    "extrait_compte":number;
    "traitement_analytique":number;
    "created_at": string;
    "updated_at": string
}