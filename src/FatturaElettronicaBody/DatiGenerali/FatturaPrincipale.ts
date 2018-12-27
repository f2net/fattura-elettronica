/**
 * Da valorizzare nei casi di fatture per operazione accessorie, emesse dagli autotraportatori per usufruire delle
 * agevolazioni in mteria di registrazione e pagamento IVA.
 */
export interface FatturaPrincipale {
    /**
     * Numero della fattura relativa al trasporto di beni, da indicare sulle fatture emesse dagli autotrasportatori per
     * certificare le operazioni accessorie.
     */
    NumeroFatturaPrincipale: string;

    /**Data della fattura relativa al trasporto di beni. */
    DataFatturaPrincipale: Date | string | null;
}
