import { ModalitaPagamento } from '../../Tabelle/ModalitaPagamento';

/**Dati di dettaglio del pagamento. */
export interface DettaglioPagamento {
    /**Beneficiario del pagamento (utilizzabile se si intende indicare un beneficiario diverso dal cedente/prestatore). */
    Beneficiario?: string;

    /**Modalità di pagamento. */
    ModalitaPagamento: ModalitaPagamento;

    /**Data dalla quale decorrono i termini di pagamento. */
    DataRiferimentoTerminiPagamento?: Date | string | null;

    /**
     * Termini di pagamento espressi in giorni a partire dalla data di riferimento di cui al campo DataRiferimentoTerminiPagamento.
     * Vale 0 per i gamenti a vista.
     */
    GiorniTerminiPagamento?: number | null;

    /**
     * Data di scadenza del pagamento da indicare nei casi in cui ha senso sulla base delle condizioni di pagamento
     * previste.
     */
    DataScadenzaPagamento?: Date | string | null;

    /**Importo relativo al pagamento. */
    ImportoPagamento: number;

    /**Nei casi di modalità di pagamento in cui ha senso l'indicazione dellìufficio postale. */
    CodUfficioPostale?: string;

    /**Cognome del quietanziante (nel caso di campo ModalitaPagamento = MP04). */
    CognomeQuietanzante?: string;

    /**Nome del quietanziante (nel caso di campo ModalitaPagamento = MP04). */
    NomeQuietanzante?: string;

    /**Codice fiscale del quietanziante (nel caso di campo ModalitaPagamento = MP04). */
    // ReSharper disable once InconsistentNaming
    CFQuietanzante?: string;

    /**Titolo del quietanziante (nel caso di campo ModalitaPagamento = MP04). */
    TitoloQuietanzante?: string;

    /**Nome dell'istituto finanziario. */
    IstitutoFinanziario?: string;

    /**
     * International Bank Account Number (coordinata bancaria internazionale che consente di identificare, in maniera standard,
     * il conto corrente del beneficiario).
     */
    // ReSharper disable once InconsistentNaming
    IBAN?: string;

    /**Codice ABI. */
    // ReSharper disable once InconsistentNaming
    ABI?: string;

    /**Codice CAB. */
    // ReSharper disable once InconsistentNaming
    CAB?: string;

    /**Bank Identifier Code (codice che identifica la banca del destinatario). */
    // ReSharper disable once InconsistentNaming
    BIC?: string;

    /**Ammontare dello sconto per pagamento anticipato. */
    ScontoPagamentoAnticipato?: number | null;

    /**Data limite stabilita per il pagamento anticipato. */
    DataLimitePagamentoAnticipato?: Date | string | null;

    /**Ammontare della penalità dovuta per pagamenti ritardati. */
    PenalitaPagamentiRitardati?: number | null;

    /**Data di decorrenza della penale. */
    DataDecorrenzaPenale?: Date | string | null;

    /**Codice per la riconciliazione degli incassi da parte del cedente/prestatore. */
    CodicePagamento?: string;
}
