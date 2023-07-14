/** @format */

const service_list = {
  app_development: {
    en: {
      label: 'Custom Software Development',
      link: '/pages/en/services/app-development',
    },
    es: {
      label: 'Desarrollo de Software Personalizado',
      link: '/pages/es/services/app-development',
    },
  },
  nearshore: {
    en: {
      label: 'Nearshore Staff Augmentation',
      link: '/pages/en/services/nearshore/',
    },
    es: {
      label: 'Aumento de Personal Cerca de la Costa',
      link: '/pages/es/services/nearshore/',
    },
  },
}

const translated_links = {
  en: {
    home: '/pages/en/',
    services: '/pages/en/services',
    careers: '/pages/en/careersus',
    about: '/pages/en/about',
    contact: '/pages/en/contact',
  },
  es: {
    home: '/pages/es/',
    services: '/pages/es/services',
    careers: '/pages/es/careersus',
    about: '/pages/es/about',
    contact: '/pages/es/contact',
  },
}

module.exports = {
  home: {
    label: {
      en: 'Home',
      es: 'Inicio',
    },
    link: {
      en: '/pages/en/',
      es: '/pages/es/',
    },
    translated_link: {
      en: translated_links.en.home,
      es: translated_links.es.home,
    },
  },
  services: {
    label: {
      en: 'Services',
      es: 'Servicios',
    },
    link: {
      en: '/pages/en/service',
      es: '/pages/es/service',
    },
    translated_link: {
      en: translated_links.en.services,
      es: translated_links.es.services,
    },
    service_list,
  },
  careers: {
    label: {
      en: 'Careers',
      es: 'Carreras',
    },
    link: {
      en: '/pages/en/careersus',
      es: '/pages/es/careersus',
    },
    translated_link: {
      en: translated_links.en.careers,
      es: translated_links.es.careers,
    },
  },
  about: {
    label: {
      en: 'About',
      es: 'Nosotros',
    },
    link: {
      en: '/pages/en/about',
      es: '/pages/es/about',
    },
    translated_link: {
      en: translated_links.en.about,
      es: translated_links.es.about,
    },
  },
  contact: {
    label: {
      en: 'Contact',
      es: 'Contactos',
    },
    link: {
      en: '/pages/en/contact',
      es: '/pages/es/contact',
    },
    translated_link: {
      en: translated_links.en.contact,
      es: translated_links.es.contact,
    },
  },
}
