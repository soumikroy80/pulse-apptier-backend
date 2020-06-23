import { ServiceSchema } from "moleculer";
import { Context as MoleculerContext } from 'moleculer';
import JwtService = require("jsonwebtoken");

interface IAccessToken {
	access_token: string;
	token_type: string;
	expires_in: number;
	expires_at: Date;
  }

  interface Context extends MoleculerContext {
	params: any;
  }

const AuthService: ServiceSchema = {
	name: "auth",
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

		/**
		 * login with credentials and create JWT token.
		 *
		 * @returns auth toke
		 */
		login: {
			rest: {
				method: "POST",
				path: "/login"
			},
			params: {
            userid: 'string',
            name: 'string',
            mail: 'string',
            actionType: {
              type: 'string',
              optional: true,
            },
		},
		async handler(ctx: Context): Promise<IAccessToken> {
			var data =ctx.params;
			var token = JwtService.sign({data:data}, 'pulsesecretkey', {expiresIn:'3600s'});
			
			return {
				access_token: token,
				token_type: 'Bearer',
				expires_in: 3600,
				expires_at: new Date()
			  };
		},
	
	},

},

	methods: {
		
	}


};



export = AuthService;
