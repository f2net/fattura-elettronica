import { DatiAnagrafici } from '../../Common/DatiAnagrafici';
export interface DatiAnagraficiVettore extends DatiAnagrafici {
    /**Numero identificativo della licenza di guida (es. numero patente). */
    NumeroLicenzaGuida?: string;
}
