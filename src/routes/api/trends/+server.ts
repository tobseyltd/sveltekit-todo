import { json } from '@sveltejs/kit';
import type { PageData } from '../../$types';

export function GET() {
	const randomize = (): number => Math.floor(Math.random() * 500);

	const trends: PageData = [
		{
			category: 'Sports',
			content: 'Some team won something!',
			glideCount: randomize()
		},
		{
			category: 'Finance',
			content: 'Bitcoin down again!',
			glideCount: randomize()
		},
		{
			category: 'PC & Games',
			content: 'New Eincode game out!',
			glideCount: randomize()
		},
		{
			category: 'Economy',
			content: "It's goin well...",
			glideCount: randomize()
		},
		{
			category: 'Celebrities',
			content: 'Some useless news!',
			glideCount: randomize()
		},
		{
			category: 'Movies',
			content: 'Peter Jackson as the director of new Lotr',
			glideCount: randomize()
		}
	];

	return json(trends);
}
