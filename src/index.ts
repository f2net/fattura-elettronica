import builder from 'xmlbuilder';
import { FatturaElettronica } from './FatturaElettronica';
import { CausalePagamento } from './Tabelle/CausalePagamento';
import { CondizioniPagamento } from './Tabelle/CondizioniPagamento';
import { Divisa } from './Tabelle/Divisa';
import { EsigibilitaIVA } from './Tabelle/EsigibilitaIVA';
import { FormatoTrasmissione } from './Tabelle/FormatoTrasmissione';
import { IdPaese } from './Tabelle/IdPaese';
import { ModalitaPagamento } from './Tabelle/ModalitaPagamento';
import { Natura } from './Tabelle/Natura';
import { Provincia } from './Tabelle/Provincia';
import { RegimeFiscale } from './Tabelle/RegimeFiscale';
import { ScontoMaggiorazioneEnum } from './Tabelle/ScontoMaggiorazione';
import { SocioUnico } from './Tabelle/SocioUnico';
import { SoggettoEmittente } from './Tabelle/SoggettoEmittente';
import { StatoLiquidazione } from './Tabelle/StatoLiquidazione';
import { TipoCassa } from './Tabelle/TipoCassa';
import { TipoCessionePrestazione } from './Tabelle/TipoCessionePrestazione';
import { TipoDocumento } from './Tabelle/TipoDocumento';
import { TipoResa } from './Tabelle/TipoResa';
import { TipoRitenuta } from './Tabelle/TipoRitenuta';

export const Tabelle = {
    CausalePagamento,
    CondizioniPagamento,
    Divisa,
    EsigibilitaIVA,
    FormatoTrasmissione,
    IdPaese,
    ModalitaPagamento,
    Natura,
    Provincia,
    RegimeFiscale,
    ScontoMaggiorazioneEnum,
    SocioUnico,
    SoggettoEmittente,
    StatoLiquidazione,
    TipoCassa,
    TipoCessionePrestazione,
    TipoDocumento,
    TipoResa,
    TipoRitenuta,
};

export const WriteXml = ({ FatturaElettronicaHeader, FatturaElettronicaBody }: FatturaElettronica): any => {
    const xmlObject: any = {
        'p:FatturaElettronica': {
            '@versione': 'FPR12',
            '@xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
            '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            '@xsi:schemaLocation':
                'http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2 fatturaordinaria_v1.2.xsd',
            '@xmlns:p': 'http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2',
            FatturaElettronicaHeader,
            FatturaElettronicaBody,
        },
    };
    // const xmlString = xml(xmlObject);
    const feed = builder.create(xmlObject, { encoding: 'utf-8' });
    const xmlString = feed.end({ pretty: true });
    return xmlString;
};
