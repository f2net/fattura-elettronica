import { CondizioniPagamento } from '../../Tabelle/CondizioniPagamento';
import { DettaglioPagamento } from './DettaglioPagamento';

/**Dati relativi al pagamento. */
export interface DatiPagamento {
    /**Condizioni di pagamento. */
    CondizioniPagamento: CondizioniPagamento;

    /**Dati di dettaglio del pagamento. */
    DettaglioPagamento: DettaglioPagamento[];
}
