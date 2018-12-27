import { DenominazioneNomeCognome } from '../../Common/DenominazioneNomeCognome';
import { IdFiscaleIVA } from '../../Common/IdFiscaleIva';
/**Represents a CessionarioCommittente.RappresentanteFiscale object. */
export interface RappresentanteFiscaleCessionarioCommittente extends DenominazioneNomeCognome {
    /**
     * Numero di identificazione fiscale ai fini IVA; i primi due caratteri rappresentano il paese ed i restanti il codice
     * vero e proprio che, per i residenti in Italia, corrisponde al numero di partita IVA.
     */
    IdFiscaleIVA: IdFiscaleIVA;
}
