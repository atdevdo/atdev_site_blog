/** @format */

const origin = `https://atdev.do`

const service_list = {
	app_development: {
		en: {
			label: `Custom Software Development`,
			link: `${origin}/en/services/custom-software-development/`,
		},
		es: {
			label: `Desarrollo de Software Personalizado`,
			link: `${origin}/es/services/custom-software-development/`,
		},
	},
	nearshore: {
		en: {
			label: `Nearshore Staff Augmentation`,
			link: `${origin}/en/services/nearshore/`,
		},
		es: {
			label: `Dotación de Personal`,
			link: `${origin}/es/services/nearshore/`,
		},
	},
	recruiting: {
		en: {
			label: `Recruiting`,
			link: `${origin}/en/services/recruiting/`,
		},
		es: {
			label: `Reclutamiento`,
			link: `${origin}/es/services/recruiting/`,
		},
	},
}

const translated_links = {
	en: {
		home: `${origin}/en/`,
		services: `${origin}/en/services`,
		careers: `${origin}/en/careersus`,
		about: `${origin}/en/about`,
		contact: `${origin}/en/contact`,
	},
	es: {
		home: `${origin}/es/`,
		services: `${origin}/es/services`,
		careers: `${origin}/es/careersus`,
		about: `${origin}/es/about`,
		contact: `${origin}/es/contact`,
	},
}

module.exports = {
	home: {
		label: {
			en: `Home`,
			es: `Inicio`,
		},
		link: {
			en: `${origin}/en/`,
			es: `${origin}/es/`,
		},
		translated_link: {
			en: translated_links.en.home,
			es: translated_links.es.home,
		},
	},
	services: {
		label: {
			en: `Services`,
			es: `Servicios`,
		},
		link: {
			en: `${origin}/en/services`,
			es: `${origin}/es/services`,
		},
		translated_link: {
			en: translated_links.en.services,
			es: translated_links.es.services,
		},
		service_list,
	},
	careers: {
		label: {
			en: `Careers`,
			es: `Carreras`,
		},
		link: {
			en: `${origin}/en/careersus`,
			es: `${origin}/es/careersus`,
		},
		translated_link: {
			en: translated_links.en.careers,
			es: translated_links.es.careers,
		},
	},
	about: {
		label: {
			en: `About`,
			es: `Nosotros`,
		},
		link: {
			en: `${origin}/en/about`,
			es: `${origin}/es/about`,
		},
		translated_link: {
			en: translated_links.en.about,
			es: translated_links.es.about,
		},
	},
	contact: {
		label: {
			en: `Contact`,
			es: `Contactos`,
		},
		link: {
			en: `${origin}/en/contact`,
			es: `${origin}/es/contact`,
		},
		translated_link: {
			en: translated_links.en.contact,
			es: translated_links.es.contact,
		},
	},
}
