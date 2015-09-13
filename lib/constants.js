function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false
    });
}

define(
    'MSG_ERROR_ARGS',
    'Error: you must provide two valid command line arguments. \nUsage: node app.js email password'
);

define(
    'MSG_ERROR_LOGINDATA',
    'Error: loginData must have not empty email and password fields.'
);

define(
    'MSG_ERROR_NONUMBEROFPATIENTS',
    'Error: could not retrieve the number of patients.'
);

define(
    'MSG_DEBUG_NUMBEROFPATIENTS',
    'Number of patients: {0}.'
);

define(
    'URL_HOSTNAME',
    'http://www.estomatoweb.com.br'
);

define(
    'URL_LOGIN',
    '/login.asp'
);

define(
    'URL_HOME',
    '/home.asp'
);

define(
    'HTML_HOME_SEARCHFORM',
    'form[name="form_busca"]'
);

define(
    'SITE_PATIENTS_PERPAGE',
    15
);
