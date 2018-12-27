import { DatiContratto } from './DatiContratto';
import { DatiConvenzione } from './DatiConvenzione';
import { DatiDDT } from './DatiDDT';
import { DatiFattureCollegate } from './DatiFattureCollegate';
import { DatiGeneraliDocumento } from './DatiGeneraliDocumento';
import { DatiOrdineAcquisto } from './DatiOrdineAcquisto';
import { DatiRicezione } from './DatiRicezione';
import { DatiSAL } from './DatiSAL';
import { DatiTrasporto } from './DatiTrasporto';
import { FatturaPrincipale } from './FatturaPrincipale';
/**Dati generali del documento principale e dati dei documenti correlati. */
export interface DatiGenerali {
    /**Dati generali del documento principale. */
    DatiGeneraliDocumento: DatiGeneraliDocumento;
    /**Informazioni relative agli ordini di acquisto. */
    DatiOrdineAcquisto?: DatiOrdineAcquisto[];
    /**Informazioni relative ai contratti. */
    DatiContratto?: DatiContratto[];
    /**Informazioni relative alle convenzioni. */
    DatiConvenzione?: DatiConvenzione[];
    /**Informazioni relative ai dati presenti sul sistema gestionale in uso presso la PA (Agenzie Fiscali) riguardanti la fase di ricezione. */
    DatiRicezione?: DatiRicezione[];
    /**
     * Informazioni relative alle fatture precedentemente trasmesse e alle quali si collega il documento presente.
     * Riguarda i casi di invio di nota di credito e/o di fatture di conguaglio a fronte di precedenti fatture di accounto.
     */
    DatiFattureCollegate?: DatiFattureCollegate[];
    /**Blocco da valorizzare nei casi di fattura per stato di avanzamento. */
    DatiSAL?: DatiSAL[];
    /**
     * Da valorizzarei nei casi di fattura differita per indicare il documento con cui è stato consegnato il bene.
     * I campi del blocco possono essere ripetuti se la fattura fa riferimento a più consegne e quindi a più documenti di trasporto.
     */
    DatiDDT?: DatiDDT[];
    /**Blocco da valorizzare nei casi di fattura accompagnatoria per inserire informazioni relative al trasporto. */
    DatiTrasporto?: DatiTrasporto;
    /**
     * Da valorizzare nei casi di fatture per operazioni accessorie, emesse dagli autotrasportatori per usufruire delle
     * agevolazioni in materia di registrazioni e pagamento dell'IVA.
     */
    FatturaPrincipale?: FatturaPrincipale;
}
