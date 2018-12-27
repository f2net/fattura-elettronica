import { DenominazioneNomeCognome } from './DenominazioneNomeCognome';
export interface Anagrafica extends DenominazioneNomeCognome {
    Titolo?: string;
    CodEORI?: string;
}
