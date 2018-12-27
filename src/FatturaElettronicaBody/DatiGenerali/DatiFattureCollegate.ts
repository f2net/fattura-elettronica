import { DatiDocumento } from '../../Common/DatiDocumento';

/**
 * Informazioni relative alle fatture precedentemente trasmesse e alle quali si collega il documento presente.
 * @remarks  Riguarda i casi di invio di nota di credito e/o fatture di conguaglio a fronte di precedenti fatture di acconto.
 */
export interface DatiFattureCollegate extends DatiDocumento {
    _none?: void;
}
