export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34')
];

export const server_loads = [];

export const dictionary = {
		"/": [16],
		"/cj": [17],
		"/cj/1fbu0a": [18,[2]],
		"/cj/2ik81g": [19,[3]],
		"/cj/3usn00": [20,[4]],
		"/code": [21],
		"/code/1fbu0a": [22,[5]],
		"/code/2ik81g": [23,[6]],
		"/code/3jt48h": [24,[7]],
		"/code/4hatjk": [25,[8]],
		"/congrats": [26,[9]],
		"/gaming": [27],
		"/gaming/1fbu0o": [28,[10]],
		"/gaming/2ik81g": [29,[11]],
		"/gaming/3usn00": [30,[12]],
		"/math": [31],
		"/math/1fbu0o": [32,[13]],
		"/math/2ik81g": [33,[14]],
		"/math/3usn00": [34,[15]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';