import { ServiceSchema } from "moleculer";
import { Context as MoleculerContext } from 'moleculer';
import JwtService = require("jsonwebtoken");

  interface Context extends MoleculerContext {
	params: any;
  }

const PulseService: ServiceSchema = {
	name: "pulse",
	/**
	 * Settings
	 */
	settings: {
		

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

	//get Profile data method
	organization: {
		rest: {
			method: "GET",
			path: "/organization"
		},
		params: {
		mail: 'string',
	},
	async handler(ctx: Context) {
		return { 
			org: ["PULSE","GITHUB","JIRA", "GOOGLE"]
		}
	},

},


	},

	methods: {
		
	}


};



export = PulseService;
