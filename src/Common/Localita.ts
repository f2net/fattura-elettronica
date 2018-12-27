import { Provincia } from '../Tabelle/Provincia';

/**Represents a Anagrafica object */
export interface Localita {
    /***
     * Indirizzo (nome della via, piazza etc.)
     */
    Indirizzo: string;

    /**Numero civico riferito all'indirizzo (non indicare se già presente nel campo indirizzo). */
    NumeroCivico?: string;

    /**Codice Avviamento Postale. */
    CAP: string;

    /**Comune. */
    Comune: string;

    /**Sigla della provincia di appartenenza del comune. */
    Provincia?: Provincia;

    /**Codice della nazione espresso secondo lo standard ISO 3166-1 alpha-2 code. */
    Nazione: string;
}
