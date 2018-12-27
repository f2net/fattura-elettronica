import { Allegati } from './Allegati/Allegati';
import { DatiBeniServizi } from './DatiBeniServizi/DatiBeniServizi';
import { DatiGenerali } from './DatiGenerali/DatiGenerali';
import { DatiPagamento } from './DatiPagamento/DatiPagamento';
import { DatiVeicoli } from './DatiVeicoli/DatiVeicoli';
/**Fattura inclusa nella conunicazione. */
export interface FatturaElettronicaBody {
    /**Dati generali del documento principale. */
    DatiGenerali: DatiGenerali;
    /**Blocco semre obbligatorio contenente natura qualità e quantità dei beni/servizi oggetto dell'operazione. */
    DatiBeniServizi: DatiBeniServizi;
    /**Dati relativi ai veicoli di cui all'art. 38 del dl 331 del 1993. */
    DatiVeicoli?: DatiVeicoli;
    /**Dati relativi al pagamento. */
    DatiPagamento?: DatiPagamento[];
    /**Dati relativi ad eventuali allegati. */
    Allegati?: Allegati[];
}
