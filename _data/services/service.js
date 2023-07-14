/** @format */

const navigation = require('../navigation/navigation')
const service_app_development = require('./service_app_development')
const service_nearshore = require('./service_nearshore')

module.exports = {
  en: [
    {
      label: navigation.services.service_list.app_development.en.label,
      link: navigation.services.service_list.app_development.en.link,
      title: service_app_development.base.en.title,
      icon: service_app_development.base.en.icon,
      long_description: service_app_development.base.en.long_description,
    },
    {
      label: navigation.services.service_list.nearshore.en.label,
      link: navigation.services.service_list.nearshore.en.link,
      title: service_nearshore.base.en.title,
      icon: service_nearshore.base.en.icon,
      long_description: service_nearshore.base.en.long_description,
    },
  ],
  es: [
    {
      label: navigation.services.service_list.app_development.es.label,
      link: navigation.services.service_list.app_development.es.link,
      title: service_app_development.base.es.title,
      icon: service_app_development.base.es.icon,
      long_description: service_app_development.base.es.long_description,
    },
    {
      label: navigation.services.service_list.nearshore.es.label,
      link: navigation.services.service_list.nearshore.es.link,
      title: service_nearshore.base.es.title,
      icon: service_nearshore.base.es.icon,
      long_description: service_nearshore.base.es.long_description,
    },
  ],
}
