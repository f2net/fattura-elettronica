/**Nei casi di fattura differita per indicare il documento con cui è stato consegnato il bene. */
// ReSharper disable once InconsistentNaming
export interface DatiDDT {
    /**Numero del documento di trasporto. */
    // ReSharper disable once InconsistentNaming
    NumeroDDT: string;

    /**Data del documento di trasporto. */
    // ReSharper disable once InconsistentNaming
    DataDDT: Date | string;

    /**Linea di dettaglio della fattura cui si riferisce il DDT (non viene valorizzato se il riferimento è all'intera fattura). */
    RiferimentoNumeroLinea?: number[];
}
