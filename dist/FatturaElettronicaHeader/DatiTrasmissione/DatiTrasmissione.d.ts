import { ContattiTrasmittente } from './ContattiTrasmittente';
import { IdTrasmittente } from './IdTrasmittente';
import { FormatoTrasmissione } from '../../Tabelle/FormatoTrasmissione';
/**
 * Informazioni che identificano univocamente il soggetto che trasmette, il documento trasmesso,
 * il formato in cui è stato trasmesso il documento, il soggetto destinatario.
 */
export interface DatiTrasmissione {
    /**Identificativo univoco del soggetto trasmittente. */
    IdTrasmittente: IdTrasmittente;
    /**Progressivo univoco, attribuito dal soggetto che trasmette, relativo ad ogni singolo documento fattura. */
    ProgressivoInvio: string;
    /**Codice identificativo del formato/versione con cui è stato trasmesso il documento fattura. */
    FormatoTrasmissione: FormatoTrasmissione;
    /**
     * Codice dell'ufficio dell'amministrazione dello stato destinatario della fattura, definito dall'amministrazione
     * di appartenenza come riportato nella rubrica "Indice PA".
     */
    CodiceDestinatario: string;
    /**Dati relativi ai contatti del trasmittente. */
    ContattiTrasmittente?: ContattiTrasmittente;
    /**Inidirizzo PEC al quale inviare il documento. */
    PECDestinatario?: string;
}
