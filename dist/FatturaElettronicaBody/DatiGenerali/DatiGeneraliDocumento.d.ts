import { ScontoMaggiorazione } from '../../Common/ScontoMaggiorazione';
import { Divisa } from '../../Tabelle/Divisa';
import { TipoDocumento } from '../../Tabelle/TipoDocumento';
import { DatiBollo } from './DatiBollo';
import { DatiCassaPrevidenziale } from './DatiCassaPrevidenziale';
import { DatiRitenuta } from './DatiRitenuta';
/**Dati generali del documento principale ed i dati dei documenti correlati. */
export interface DatiGeneraliDocumento {
    /**Dati generali del documento principale. */
    TipoDocumento: TipoDocumento;
    /**Codice espresso secondo lo standard ISO 4217 alpha-3:2001 della valuta utilizzata per l'indicazione degli importi. */
    Divisa: Divisa;
    /**Data del documento. */
    Data: Date | string;
    /**Numero progressivo del documento. */
    Numero: string;
    /**Dati della ritenuta. */
    DatiRitenuta?: DatiRitenuta;
    /**Dati del bollo. */
    DatiBollo?: DatiBollo;
    /**Blocco dati relativi alla cassa previdenziale di appartenenenza. */
    DatiCassaPrevidenziale?: DatiCassaPrevidenziale[];
    /**Eventuali sconti o maggiorazioni applicati sul totale documento. */
    ScontoMaggiorazione?: ScontoMaggiorazione[];
    /**Importo totale del documento al netto dell'eventuale sconto e comprensivo di imposta a debito del cessionario /committente. */
    ImportoTotaleDocumento?: number | null;
    /**Eventuale arrotondamento sul totale documento (ammette anche il segno negativo). */
    Arrotondamento?: number | null;
    /**Descrizione della causale del documento. */
    Causale?: string[];
    /**
     * Indica se il documento è stato emesso secondo modalità e termini stabiliti con decreto ministeriale ai sensi art. 73
     * DPR 633/72 (ciò consente al cedente/prestatore l'emissione nello stesso anno di più documenti aventi lo stesso numero).
     */
    Art73?: string;
}
