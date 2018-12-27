import { ScontoMaggiorazioneEnum } from '../Tabelle/ScontoMaggiorazione';

/**Eventuale sconto o maggiorazione applicati sul totale documento. */
export interface ScontoMaggiorazione {
    /**Indica se trattasi di sconto o di maggiorazione. */
    Tipo: ScontoMaggiorazioneEnum;

    /**Percentuale di sconto o di maggiorazione. */
    Percentuale?: number | null;

    /**Importo dello sconto o della maggiorazione. */
    Importo?: number | null;
}
