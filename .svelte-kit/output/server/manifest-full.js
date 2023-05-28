export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: null,
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/cj",
				pattern: /^\/cj\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/cj/1fbu0a",
				pattern: /^\/cj\/1fbu0a\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/cj/2ik81g",
				pattern: /^\/cj\/2ik81g\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/cj/3usn00",
				pattern: /^\/cj\/3usn00\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/code",
				pattern: /^\/code\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/code/1fbu0a",
				pattern: /^\/code\/1fbu0a\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/code/2ik81g",
				pattern: /^\/code\/2ik81g\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/code/3jt48h",
				pattern: /^\/code\/3jt48h\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/code/4hatjk",
				pattern: /^\/code\/4hatjk\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/congrats",
				pattern: /^\/congrats\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/gaming",
				pattern: /^\/gaming\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/gaming/1fbu0o",
				pattern: /^\/gaming\/1fbu0o\/?$/,
				params: [],
				page: { layouts: [0,10,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/gaming/2ik81g",
				pattern: /^\/gaming\/2ik81g\/?$/,
				params: [],
				page: { layouts: [0,11,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/gaming/3usn00",
				pattern: /^\/gaming\/3usn00\/?$/,
				params: [],
				page: { layouts: [0,12,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/math",
				pattern: /^\/math\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/math/1fbu0o",
				pattern: /^\/math\/1fbu0o\/?$/,
				params: [],
				page: { layouts: [0,13,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/math/2ik81g",
				pattern: /^\/math\/2ik81g\/?$/,
				params: [],
				page: { layouts: [0,14,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/math/3usn00",
				pattern: /^\/math\/3usn00\/?$/,
				params: [],
				page: { layouts: [0,15,], errors: [1,,], leaf: 34 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
