"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xmlbuilder_1 = __importDefault(require("xmlbuilder"));
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