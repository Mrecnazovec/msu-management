import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		imgPath: {
			type: String,
			required: false,
		},
		name: {
			type: String,
			required: true,
		},
		about: {
			type: String,
			required: true,
		},
		modificator: {
			type: String,
			required: false,
		},
		href: {
			type: String,
			required: false,
		},
		link: {
			type: String,
			required: false,
		},
		span: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
)

const PostModelsMentors = models.mentor || model('mentor', newShema)

export default PostModelsMentors
