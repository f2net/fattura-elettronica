import { DatiRiepilogo } from './DatiRiepilogo';
import { DettaglioLinee } from './DettaglioLinee';

/**Blocco sempre obbligatorio contenente natura, qualità e quantità dei beni / servizi formanti oggetto dell'operazione. */
export interface DatiBeniServizi {
    /**Dati generali del documento principale. */
    DettaglioLinee: DettaglioLinee[];

    /**Blocco sempre obbligatorio contenente i dati di riepilogo per ogni aliquota IVA o natura. */
    DatiRiepilogo: DatiRiepilogo[];
}
