import builder from 'xmlbuilder';
import { FatturaElettronica } from './FatturaElettronica';

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
