/**Dati relativi ad eventuale allegato. */
export interface Allegati {
    /**Nome dell'allegato. */
    NomeAttachment: string;
    /**Algoritmo usato per comprimere l'attachment (ad es. ZIP, RAR, ...) */
    AlgoritmoCompressione?: string;
    /**Formato dell'attachment (ad es: TXT, XML, DOC, PDF, ...) */
    FormatoAttachment?: string;
    /**Descrizione del documento. */
    DescrizioneAttachment?: string;
    /**Contiene il documento allegato alla fattura; il contenuto è demandato agli accordi tra PA e fornitore. */
    Attachment: string;
}
