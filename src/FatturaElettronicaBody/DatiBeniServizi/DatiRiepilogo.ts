import { EsigibilitaIVA } from '../../Tabelle/EsigibilitaIVA';
import { Natura } from '../../Tabelle/Natura';

/**Blocco sempre obbligatorio contenente i dati di riepilogo per ogni aliquota IVA o natura. */
export interface DatiRiepilogo {
    /**Aliquota (%) IVA. */
    AliquotaIVA: number;

    /**Natura delle operazioni qualora non rientrino tra quelle imponibili. */
    Natura?: Natura;

    /**Corrispettivi relativi alle cessioni accessorie (es. imballaggi etc.) qualora presenti. */
    SpeseAccessorie?: number | null;

    /**Arrotondamento sull'imponibili o sull'imposta. */
    Arrotondamento?: number | null;

    /**
     * Questo valore rappresenta: base imponibile per le operazioni soggette ad IVA; importo, per le operazioni che non
     * rientrano tra quelle imponibili.
     */
    ImponibileImporto: number;

    /**Imposta risultante dall'applicazione dell'aliquota IVA all'imponibile. */
    Imposta: number;

    /**Eseigibilità IVA (immediata ai sensi Art. 6 comma 5 del DPR 633 1972, oppure differita). */
    EsigibilitaIVA?: EsigibilitaIVA;

    /**Norma di riferimento (obbligatoria nei casi in cui Natura è valorizzato). */
    RiferimentoNormativo?: string;
}
