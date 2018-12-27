import * as chai from 'chai';
import { FatturaElettronica } from '../src/FatturaElettronica';
import { WriteXml } from '../src/index';
import { FormatoTrasmissione } from '../src/Tabelle/FormatoTrasmissione';
import { IdPaese } from '../src/Tabelle/IdPaese';
import { Provincia } from '../src/Tabelle/Provincia';
import { RegimeFiscale } from '../src/Tabelle/RegimeFiscale';
import { TipoDocumento } from '../src/Tabelle/TipoDocumento';
import { Divisa } from '../src/Tabelle/Divisa';
import { EsigibilitaIVA } from '../src/Tabelle/EsigibilitaIVA';

const expect = chai.expect;

describe('Call WriteXml', () => {
    it('return a string with Js object converted in XML', async done => {
        const fattura: FatturaElettronica = createFatturaElettronica();

        const xmlString = WriteXml(fattura);
        console.log(xmlString);
        expect(xmlString).is.not.null;
        expect(xmlString).to.be.an('String');
        return done();
    });
});

// PRIVATE FUNCTIONS

const createFatturaElettronica = (): FatturaElettronica => {
    const fattura: FatturaElettronica = {
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

    return fattura;
};
