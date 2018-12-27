/**
 * Blocco che consente di inserire, con riferimento ad una linea di dettaglio, diverse tipologie di informazioni utili ai fini
 * amministrativi, gestionali, etc.
 */
export interface AltriDatiGestionali {
    /**Codice che identifica la tipologia di informazione */
    TipoDato: string;

    /**Campo in cui inserire un valore alfanumerico riferito alla tipologia di informazione. */
    RiferimentoTesto?: string;

    /**Campo in cui inserire un valore numerico riferito alla tipologia di informazione. */
    RiferimentoNumero?: number | null;

    /**Campo in cui inserire una data riferita alla tiplogia di informazione. */
    RiferimentoData?: Date | string | null;
}
