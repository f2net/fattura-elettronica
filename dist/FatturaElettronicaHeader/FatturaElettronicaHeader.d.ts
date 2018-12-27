import { SoggettoEmittente } from '../Tabelle/SoggettoEmittente';
import { CedentePrestatore } from './CedentePrestatore/CedentePrestatore';
import { CessionarioCommittente } from './CessionarioCommittente/CessionarioCommittente';
import { DatiTrasmissione } from './DatiTrasmissione/DatiTrasmissione';
import { RappresentanteFiscale } from './RappresentanteFiscale/RappresentanteFiscale';
import { TerzoIntermediarioOSoggettoEmittente } from './TerzoIntermediarioOSoggettoEmittente/TerzoIntermediarioOSoggettoEmittente';
/**Intestazione della Fattura Elettronica. */
export interface FatturaElettronicaHeader {
    /**
     * Informazioni che identificano univocamente il soggetto che trasmette, il documento trasmesso,
     * il formato in cui è stato trasmesso il documento, il soggetto destinatario.
     */
    DatiTrasmissione: DatiTrasmissione;
    /**Dati relativi al cedente / prestatore. */
    CedentePrestatore: CedentePrestatore;
    /**Dati relativi al rappresentante fiscale del cedente / prestatore. */
    RappresentanteFiscale?: RappresentanteFiscale;
    /**Dati relativi al cessionario / committente */
    CessionarioCommittente: CessionarioCommittente;
    /**Dati relativi al soggetto che emette fattura per conto del cedente / prestatore. */
    TerzoIntermediarioOSoggettoEmittente?: TerzoIntermediarioOSoggettoEmittente;
    /**
     * Nei casi di documenti emessi da un soggetto diverso dal cedente / prestatore, indica se la fattura sia stata
     * emessa o da parte del cessionario / committente oppure da parte di un terzo per conto del cedente / prestatore.
     */
    SoggettoEmittente?: SoggettoEmittente;
}
