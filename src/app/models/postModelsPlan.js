import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		first: {
			type: String,
			required: true,
		},
		second: {
			type: String,
			required: true,
		},
		result: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const PostModelsPlan = models.plan || model('plan', newShema)

export default PostModelsPlan
