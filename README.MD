# fattura-elettronica

Modulo per la creazione di fatture elettroniche in Javascript.

## Installazione

```
	npm install fattura-elettronica
```

## Utilizzo

```
import { WriteXml } from 'fattura-elettronica';

const fattura = {
        FatturaElettronicaHeader: {
            DatiTrasmissione: {
                IdTrasmittente: {
                    IdPaese: IdPaese.IT,
                    IdCodice: '12345678901',
                },
                ProgressivoInvio: '1',
                FormatoTrasmissione: FormatoTrasmissione.Privati,
                CodiceDestinatario: '0000000',
            },
            CedentePrestatore: {
                DatiAnagrafici: {
                    IdFiscaleIVA: {
                        IdPaese: IdPaese.IT,
                        IdCodice: '01234567890',
                    },
                    Anagrafica: {
                        Denominazione: 'Società s.r.l.',
                    },
                    RegimeFiscale: RegimeFiscale.RF01,
                },
                Sede: {
                    Indirizzo: 'Via Prova, 3',
                    CAP: '20100',
                    Comune: 'Milano',
                    Provincia: Provincia.MI,
                    Nazione: 'IT',
                },
            },
            CessionarioCommittente: {
                DatiAnagrafici: {
                    CodiceFiscale: 'werwerwerwer',
                    Anagrafica: {
                        Denominazione: '',
                        Cognome: 'Prova',
                        Nome: 'Prova',
                    },
                },
                Sede: {
                    Indirizzo: 'Via Prova, 4',
                    CAP: '20100',
                    Comune: 'Milano',
                    Provincia: Provincia.MI,
                    Nazione: 'IT',
                },
            },
        },
        FatturaElettronicaBody: [
            {
                DatiGenerali: {
                    DatiGeneraliDocumento: {
                        TipoDocumento: TipoDocumento.TD01,
                        Divisa: Divisa.EUR,
                        Data: '2018-12-12',
                        Numero: '3333',
                    },
                },
                DatiBeniServizi: {
                    DettaglioLinee: [
                        {
                            NumeroLinea: 1,
                            Descrizione: 'Prestazione',
                            Quantita: 2,
                            PrezzoUnitario: 12,
                            PrezzoTotale: 24,
                            AliquotaIVA: 22.0,
                        },
                    ],
                    DatiRiepilogo: [
                        {
                            AliquotaIVA: 22.0,
                            ImponibileImporto: 24,
                            Imposta: (24 * 22.0) / 100,
                            EsigibilitaIVA: EsigibilitaIVA.I,
                        },
                    ],
                },
            },
        ],
    };
const xmlString = WriteXml(fattura);

```

## Licenza

fattura-elettronica è un progetto open source di [F2 .net engineering s.r.l.][f2net] rilasciato sotto licenza [BSD][bsd].

Il progetto è ispirato dal progetto [Fattura Elettronica .NET][fenet]

[bsd]: http://github.com/dayux/fattura-elettronica/blob/master/LICENSE
[f2net]: http://www.f2.net/
[fenet]: https://github.com/FatturaElettronica/FatturaElettronica.NET
