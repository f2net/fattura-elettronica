import { SocioUnico } from '../../Tabelle/SocioUnico';
import { StatoLiquidazione } from '../../Tabelle/StatoLiquidazione';
/**Represents a DatiAnagrafici object */
export interface IscrizioneREA {
    /**Sigla della provincia dell'Ufficio del registro delle imprese presso il quale è registata la società. */
    Ufficio: string;
    /**Numero di iscrizione al registro delle imprese. */
    NumeroREA: string;
    /**Nei soli casi di società di capitali (Spa, SApA, SRL), il campo va valorizzato per indicare il capitale sociale. */
    CapitaleSociale?: number | null;
    /**Nei soli casi di SRL, il campo va valorizzato per indicare se vi è un socio unico oppure se vi sono più soci. */
    SocioUnico?: SocioUnico;
    /**Indica se la Società si trova in stato di liquidazione oppure no. */
    StatoLiquidazione: StatoLiquidazione;
}
