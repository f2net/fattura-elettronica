import { IdPaese } from '../Tabelle/IdPaese';

/**
 * Numero di identificazione fiscale ai fini IVA; i primi due caratteri rappresentano il paese ed i restanti il codice
 * vero e proprio che, per i residenti in Italia, corrisponde al numero di partita IVA.
 */
export interface IdFiscaleIVA {
    /**Codice della nazione espresso secondo lo standard ISO 3166-1 alpha-2 code. */
    IdPaese: IdPaese;

    /**Codice identificativo fiscale. */
    IdCodice: string;
}
