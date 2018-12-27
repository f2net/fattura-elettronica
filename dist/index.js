"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xmlbuilder_1 = __importDefault(require("xmlbuilder"));
const CausalePagamento_1 = require("./Tabelle/CausalePagamento");
const CondizioniPagamento_1 = require("./Tabelle/CondizioniPagamento");
const Divisa_1 = require("./Tabelle/Divisa");
const EsigibilitaIVA_1 = require("./Tabelle/EsigibilitaIVA");
const FormatoTrasmissione_1 = require("./Tabelle/FormatoTrasmissione");
const IdPaese_1 = require("./Tabelle/IdPaese");
const ModalitaPagamento_1 = require("./Tabelle/ModalitaPagamento");
const Natura_1 = require("./Tabelle/Natura");
const Provincia_1 = require("./Tabelle/Provincia");
const RegimeFiscale_1 = require("./Tabelle/RegimeFiscale");
const ScontoMaggiorazione_1 = require("./Tabelle/ScontoMaggiorazione");
const SocioUnico_1 = require("./Tabelle/SocioUnico");
const SoggettoEmittente_1 = require("./Tabelle/SoggettoEmittente");
const StatoLiquidazione_1 = require("./Tabelle/StatoLiquidazione");
const TipoCassa_1 = require("./Tabelle/TipoCassa");
const TipoCessionePrestazione_1 = require("./Tabelle/TipoCessionePrestazione");
const TipoDocumento_1 = require("./Tabelle/TipoDocumento");
const TipoResa_1 = require("./Tabelle/TipoResa");
const TipoRitenuta_1 = require("./Tabelle/TipoRitenuta");
exports.Tabelle = {
    CausalePagamento: CausalePagamento_1.CausalePagamento,
    CondizioniPagamento: CondizioniPagamento_1.CondizioniPagamento,
    Divisa: Divisa_1.Divisa,
    EsigibilitaIVA: EsigibilitaIVA_1.EsigibilitaIVA,
    FormatoTrasmissione: FormatoTrasmissione_1.FormatoTrasmissione,
    IdPaese: IdPaese_1.IdPaese,
    ModalitaPagamento: ModalitaPagamento_1.ModalitaPagamento,
    Natura: Natura_1.Natura,
    Provincia: Provincia_1.Provincia,
    RegimeFiscale: RegimeFiscale_1.RegimeFiscale,
    ScontoMaggiorazioneEnum: ScontoMaggiorazione_1.ScontoMaggiorazioneEnum,
    SocioUnico: SocioUnico_1.SocioUnico,
    SoggettoEmittente: SoggettoEmittente_1.SoggettoEmittente,
    StatoLiquidazione: StatoLiquidazione_1.StatoLiquidazione,
    TipoCassa: TipoCassa_1.TipoCassa,
    TipoCessionePrestazione: TipoCessionePrestazione_1.TipoCessionePrestazione,
    TipoDocumento: TipoDocumento_1.TipoDocumento,
    TipoResa: TipoResa_1.TipoResa,
    TipoRitenuta: TipoRitenuta_1.TipoRitenuta,
};
exports.WriteXml = ({ FatturaElettronicaHeader, FatturaElettronicaBody }) => {
    const xmlObject = {
        'p:FatturaElettronica': {
            '@versione': 'FPR12',
            '@xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
            '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            '@xsi:schemaLocation': 'http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2 fatturaordinaria_v1.2.xsd',
            '@xmlns:p': 'http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2',
            FatturaElettronicaHeader,
            FatturaElettronicaBody,
        },
    };
    // const xmlString = xml(xmlObject);
    const feed = xmlbuilder_1.default.create(xmlObject, { encoding: 'utf-8' });
    const xmlString = feed.end({ pretty: true });
    return xmlString;
};
//# sourceMappingURL=index.js.map