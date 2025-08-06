export const environment = {
    production: true,
    //Citizens Bank UAT
    // rootUrl: 'https://finjet.citizensbankbd.com/FinJetAPIExt',
    // reportApiUrl: 'https://finjet.citizensbankbd.com/FinJetReportAPIExt',
    // UserIPUrl: 'https://finjet.citizensbankbd.com/UserIp/api/ip'

    //In-House UAT
    rootUrl: 'http://192.168.10.38:8026/FinJetAPI',
    reportApiUrl: 'http://192.168.10.38:8026/FinJetReportAPI',
    UserIPUrl: 'http://192.168.10.102/UserIP/api/ip'
};

// ng build --base-href="/finjet/" --deploy-url="/finjet/"
// ng build --base-href="/finjetcbplc/" --deploy-url="/finjetcbplc/"
