/**Informazioni relative ad un documento a cui si fa riferimento. */
export interface DatiDocumento {
    RiferimentoNumeroLinea?: number[];
    /**Numero del documento a cui si fa riferimento. */
    IdDocumento: string;
    /**Data del documento a cui si fa riferimento. */
    Data?: Date | string | null;
    /**
     * Identificativo della singola voce all'interno del documento
     * (ad esempio, nel caso di ordine di acquisto, è il numero della linea dell'ordine di acquisto, oppure, nel caso di
     * contratto, è il numero della linea del contratto, etc.)
     */
    NumItem?: string;
    /**Codice della commessa o della convenzione. */
    CodiceCommessaConvenzione?: string;
    /**Codice gestito dal CIPE che caratterizza ogni progetto di investimento pubblico (Codice Unitario Progetto). */
    CodiceCUP?: string;
    /**Codice Identificativo della Gara. */
    CodiceCIG?: string;
}
