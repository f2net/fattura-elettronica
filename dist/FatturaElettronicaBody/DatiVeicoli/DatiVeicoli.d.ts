/**Dati relativi ai veicoli di cui all'art. 38 comma 4 del ddl 331 del 1993. */
export interface DatiVeicoli {
    /**Data di prima immatricolazione o iscrizione nei pubblici registri. */
    Data: Date | string | null;
    /**Totale chilometri percorsi, oppure totale ora navigate o volate. */
    TotalePercorso: string;
}
