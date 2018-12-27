import { StabileOrganizzazione } from '../../Common/StabileOrganizzazione';
import { Contatti } from './Contatti';
import { DatiAnagraficiCedentePrestatore } from './DatiAnagraficiCedentePrestatore';
import { IscrizioneREA } from './IscrizioneRea';
import { SedeCedentePrestatore } from './SedeCedentePrestatore';
/**Dati relativi al cedente / prestatore. */
export interface CedentePrestatore {
    /**Dati anagrafici, professionali e fiscali del cedente / prestatore. */
    DatiAnagrafici: DatiAnagraficiCedentePrestatore;
    /**Dati della sede del cedente / prestatore. */
    Sede: SedeCedentePrestatore;
    /**Nei casi di cedente / prestatore non residente. */
    StabileOrganizzazione?: StabileOrganizzazione;
    /**Nei casi di società iscritte nel registro delle imprese ai sensi dell'art. 2250 del codice civile. */
    IscrizioneREA?: IscrizioneREA;
    /**Contatti del cedente / prestatore. */
    Contatti?: Contatti;
    /**Codice identificativo del cedente / prestatore a fini amministrativi-contabili. */
    RiferimentoAmministrazione?: string;
}
