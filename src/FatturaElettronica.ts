import { FatturaElettronicaBody } from './FatturaElettronicaBody/FatturaElettronicaBody';
import { FatturaElettronicaHeader } from './FatturaElettronicaHeader/FatturaElettronicaHeader';

export interface FatturaElettronica {
    /***
     * Intestazione della comunicazione.
     */
    FatturaElettronicaHeader: FatturaElettronicaHeader;

    /**
     * Lotto di fatture incluse nella comunicazione.
     * @remarks  Il blocco ha molteciplità 1 nel caso disingola: fattura; nel caso di lotto di fatture, si ripete
     * per ogni fattura componente il lotto stesso.
     */
    FatturaElettronicaBody: FatturaElettronicaBody[];
}
