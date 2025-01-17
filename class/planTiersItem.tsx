
import { PlanComptable } from "./planComptable"
import { TypeTiers } from "./typeTiers"

export class PlanTiersItem {
    "id": string;
    "code": string;
    "libelle": string;
    "created_at": string;
    "updated_at": string;
    "type_de_tier":TypeTiers;
    "plan_comptable": PlanComptable;
}