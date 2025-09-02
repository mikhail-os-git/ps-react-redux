export interface IMovie {
	id: number,
	favorite:boolean,
	title: string
	year: number
	imdbId: string
	rank: number
	actors: string
	aka: string
	imdbUrl: string
	imdbIv: string
	imgPoster: string
	photoWidth: number
	photoHeight: number
	[key: string]: any;
}