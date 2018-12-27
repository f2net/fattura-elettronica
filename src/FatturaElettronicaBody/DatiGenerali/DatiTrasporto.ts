import { TipoResa } from '../../Tabelle/TipoResa';
import { DatiAnagraficiVettore } from './DatiAnagraficiVettore';
import { IndirizzoResa } from './IndirizzoResa';

/**Da valorizzare nel caso di fattura accompagnatoria per inserire informazioni relative al trasporto. */
export interface DatiTrasporto {
    /**Dati fiscali e anagrafici del vettore. */
    DatiAnagraficiVettore?: DatiAnagraficiVettore;

    /**Mezzo utilizzato per il trasporto. */
    MezzoTrasporto?: string;

    /**Causale del trasporto. */
    CausaleTrasporto?: string;

    /**Numero dei colli trasportati. */
    NumeroColli?: number | null;

    /**Descrizione (natura, qualità, aspetto...) relativa ai colli trasportati. */
    Descrizione?: string;

    /**Unità di misura riferita al peso della merce. */
    UnitaMisuraPeso?: string;

    /**Peso lordo della merce. */
    PesoLordo?: number | null;

    /**Peso netto della merce. */
    PesoNetto?: number | null;

    /**Data e ora del ritiro della merce. */
    DataOraRitiro?: Date | string | null;

    /**Data e ora del trasporto. */
    DataInizioTrasporto?: Date | string | null;

    /**Codifica del termine di resa espresso secondo lo standard ICC-Camera di Commercio Internazionale (Incoterms). */
    TipoResa?: TipoResa;

    /**Indirizzo di resa. */
    IndirizzoResa?: IndirizzoResa;

    /**Data e ora della consegna della merce. */
    DataOraConsegna?: Date | string | null;
}
