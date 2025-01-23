import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		imgPath: {
			type: String,
			required: false,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		downloadPath: {
			type: Array,
			required: false,
		},
		name: {
			type: String,
			required: true,
		},
		teacherInfo: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true }
)

const PostModelsSubject = models.subject || model('subject', newShema)

export default PostModelsSubject
