import { ScontoMaggiorazione } from '../../Common/ScontoMaggiorazione';
import { Natura } from '../../Tabelle/Natura';
import { TipoCessionePrestazione } from '../../Tabelle/TipoCessionePrestazione';
import { AltriDatiGestionali } from './AltriDatiGestionali';
import { CodiceArticolo } from './CodiceArticolo';
/**Linee di dettaglio del documento (i campi del blocco si ripetono per ogni riga di dettaglio). */
export interface DettaglioLinee {
    /**Numero della riga di dettaglio del documento. */
    NumeroLinea: number;
    /**Da valorizzare nei soli casi di sconto, premio, abbuono, spesa accessoria. */
    TipoCessionePrestazione?: TipoCessionePrestazione;
    /**Eventuale codifica dell'articolo (la molteplicità N del blocco consente di gestire la presenza di più codifiche). */
    CodiceArticolo?: CodiceArticolo[];
    /**
     * Natura e quantità dell'oggetto della cessione/prestazione; può fare anche riferimento ad un precedente documento emesso
     * a titolo di anticipo/acconto, nel qual caso il valore del campo PrezzoUnitario e PrezzoTotale sarà negativo.
     */
    Descrizione: string;
    /**Numero di unità cedute / prestate. */
    Quantita?: number | null;
    /**Unità di misura riferita alla quantità. */
    UnitaMisura?: string;
    /**Data iniziale del periodo di riferimento cui si riferisce l'eventuale servizio prestato. */
    DataInizioPeriodo?: Date | string | null;
    /**Data finale del periodo di riferimento cui si riferisce l'eventuale servizio prestato. */
    DataFinePeriodo?: Date | string | null;
    /**Prezzo unitario del bene/servizio; nel caso di beni ceduti a titolo di sconto, premio o abbuono, l'importo indicato rappresenta il "valore normale". */
    PrezzoUnitario: number;
    /**
     * Eventuale sconto o maggiorazione applicati (la molteciplità N del blocco consente di gestire la presenza di più sconti o
     * maggiorazioni a "cascata").
     */
    ScontoMaggiorazione?: ScontoMaggiorazione[];
    /**Importo totale del bene/servizio (che tiene conto di eventuali sconti/maggiorazioni) IVA esclusa. */
    PrezzoTotale: number;
    /**Aliquota (%) IVA applicata al bene/servizio. */
    AliquotaIVA: number;
    /**Da valorizzare solo in caso di cessione/prestazione soggetta a ritenuta di acconto. */
    Ritenuta?: string;
    /**Natura dell'operazione se non rientra tra quelle imponibili (il campo Aliquota IVA deve essere valorizzato a zero). */
    Natura?: Natura;
    /**Codice identificativo ai fini amministrativo-contabili. */
    RiferimentoAmministrazione?: string;
    /**
     * Blocco che consente di inserire, con riferimento ad una linea di dettaglio, diverse tipologie di informazioni utili ai
     * fini amministrativi, gestionali, etc.
     */
    AltriDatiGestionali?: AltriDatiGestionali[];
}
