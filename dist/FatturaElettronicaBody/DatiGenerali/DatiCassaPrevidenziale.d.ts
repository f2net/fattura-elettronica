import { Natura } from '../../Tabelle/Natura';
import { TipoCassa } from '../../Tabelle/TipoCassa';
/**Dati relativi alla cassa previdenziale di appartenenza. */
export interface DatiCassaPrevidenziale {
    /**Tipologia della cassa previdenziale di appartenenza. */
    TipoCassa: TipoCassa;
    /**Aliquota (%) del contributo, se previsto, per la cassa di appartenenza. */
    AlCassa: number;
    /**Importo del contributo per la cassa di appartenenza. */
    ImportoContributoCassa: number;
    /**Importo sul quale applicare il contributo cassa previdenziale. */
    ImponibileCassa?: number;
    /**Aliquota (%) IVA applicata. */
    AliquotaIVA: number;
    /**Indica se il contributo cassa è soggetto a ritenuta. */
    Ritenuta?: string;
    /**Nei casi di Aliquota IVA pari a zero. */
    Natura?: Natura;
    /**Codice identificativo ai fini amministrativo-contabili. */
    RiferimentoAmministrazione?: string;
}
