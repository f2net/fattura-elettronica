import { Anagrafica } from './Anagrafica';
import { IdFiscaleIVA } from './IdFiscaleIva';

/**Dati anagrafici, professionali e fiscali */
export interface DatiAnagrafici {
    /**
     * Numero di identificazione fiscale ai fini IVA; i primi due caratteri rappresentano il paese ed i restanti il codice
     * vero e proprio che, per i residenti in Italia, corrisponde al numero di partita IVA.
     */
    IdFiscaleIVA?: IdFiscaleIVA;

    /**Numero di Codice Fiscale. */
    CodiceFiscale?: string;

    /**Dati anagrafici identificativi del soggetto.  */
    Anagrafica: Anagrafica;
}
