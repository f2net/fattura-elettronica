import { DatiAnagrafici } from '../../Common/DatiAnagrafici';
import { Provincia } from '../../Tabelle/Provincia';
import { RegimeFiscale } from '../../Tabelle/RegimeFiscale';
/**Dati anagrafici, professionali e fiscali del cedente / prestatore. */
export interface DatiAnagraficiCedentePrestatore extends DatiAnagrafici {
    /**Nome dell'albo professionale. */
    AlboProfessionale?: string;
    /**Sigla della provincia di competenza dell'albo professionale. */
    ProvinciaAlbo?: Provincia;
    /**Numero di iscrizione all'albo professionale. */
    NumeroIscrizioneAlbo?: string;
    /**Data di iscrizione all'albo professionale.  */
    DataIscrizioneAlbo?: Date | string | null;
    /**Regime fiscale. */
    RegimeFiscale: RegimeFiscale;
}
