import { StabileOrganizzazione } from '../../Common/StabileOrganizzazione';
import { DatiAnagraficiCessionarioCommittente } from './DatiAnagraficiCessionarioCommittente';
import { RappresentanteFiscaleCessionarioCommittente } from './RappresentanteFiscaleCessionarioCommittente';
import { SedeCessionarioCommittente } from './SedeCessionarioCommittente';

/**Dati relativi al cessionario/ committente. */
export interface CessionarioCommittente {
    /**Dati anagrafici, professionali e fiscali del cessionario / committente. */
    DatiAnagrafici: DatiAnagraficiCessionarioCommittente;

    /**Dati della sede del cessionario / committente. */
    Sede: SedeCessionarioCommittente;

    /**Blocco da valorizzare se e solo se l'elemento informativo 1.1.3 FormatoTrasmissione = "FPR12" (fattura tra privati), nel caso di cessionario/committente non residente e con stabile organizzazione in Italia. */
    StabileOrganizzazione?: StabileOrganizzazione;

    /**
     * Blocco da valorizzare se e solo se l'elemento informativo 1.1.3 @FormatoTrasmissione   = "FPR12" (fattura tra privati), nel caso di cessionario/committente che si avvale di rappresentante fiscale in Italia.
     */
    RappresentanteFiscale?: RappresentanteFiscaleCessionarioCommittente;
}
