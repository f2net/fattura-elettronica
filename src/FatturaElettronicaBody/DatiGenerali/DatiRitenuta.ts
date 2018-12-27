import { CausalePagamento } from '../../Tabelle/CausalePagamento';
import { TipoRitenuta } from '../../Tabelle/TipoRitenuta';

/**Dati relativi alla ritenuta. */
export interface DatiRitenuta {
    /**Tipologia della ritenuta. */
    TipoRitenuta: TipoRitenuta;

    /**Importo dellla ritenuta. */
    ImportoRitenuta: number | null;

    /**Aliquota (%) della ritenuta. */
    AliquotaRitenuta: number | null;

    /**Causale del pagamento (quella del modello 770). */
    CausalePagamento: CausalePagamento;
}
