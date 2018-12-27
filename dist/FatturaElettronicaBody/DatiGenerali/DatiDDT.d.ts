/**Nei casi di fattura differita per indicare il documento con cui è stato consegnato il bene. */
export interface DatiDDT {
    /**Numero del documento di trasporto. */
    NumeroDDT: string;
    /**Data del documento di trasporto. */
    DataDDT: Date | string;
    /**Linea di dettaglio della fattura cui si riferisce il DDT (non viene valorizzato se il riferimento è all'intera fattura). */
    RiferimentoNumeroLinea?: number[];
}
