/**Eventuale codifica dell'articolo. */
export interface CodiceArticolo {
    /**Indica la tipologia di codice articolo (TARIC, CPV, EAN, SSC, ...) */
    CodiceTipo: string;
    /**Indica il valore del codice articolo corrispondente alla tipologia riportata nel campo CodiceTipo. */
    CodiceValore: string;
}
