'use server'

import PostModelNews from '../models/postModelsNews'
import PostModelsAdministration from '../models/postModelsAdministration'
import PostModelsTeacher from '../models/postModelsTeachers'
import PostModelsSoviet from '../models/postModelsSoviet'
import PostModelsSubject from '../models/postModelsSubject'

import connectDB from '../config/database'
import PostModelsPlan from '../models/postModelsPlan'
import PostModelsForAdmin from '../models/postModelsForAdmin'
import PostModelsMentors from '../models/PostModelsMentors'

// FIXME: GetPostsNews

export async function getPostsNews(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelNews.find()
					.sort({ _id: -1 })
					.skip(perPage * (page - 1))
					.limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelNews.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

export async function getPostsNewsSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelNews.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function deletePostsNews(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelNews.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function updatePostsNews(object) {
	try {
		await connectDB()
		const update = await PostModelNews.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					title: object.title,
					description: object.description,
					auto: object.auto,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

export async function createPostsNews(object) {
	try {
		await connectDB()
		const update = await PostModelNews.insertMany({
			imgPath: object.path,
			title: object.title,
			description: object.description,
			auto: object.auto,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: GetPostsNews

// FIXME: getPostsAdministration

export async function getPostsAdministration(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsAdministration.find()
					// .skip(perPage * (page - 1))
					// .limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsAdministration.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

export async function deletePostsAdministration(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsAdministration.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function getPostsAdministrationSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsAdministration.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function updateAdministration(object) {
	try {
		await connectDB()
		const update = await PostModelsAdministration.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					name: object.name,
					about: object.about,
					modificator: object.modificator,
					href: object.href,
					link: object.link,
					span: object.span,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}
export async function createAdministration(object) {
	try {
		await connectDB()
		const update = await PostModelsAdministration.insertMany({
			imgPath: object.path,
			name: object.name,
			about: object.about,
			modificator: object.modificator,
			href: object.href,
			link: object.link,
			span: object.span,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsAdministration

// FIXME: getPostsTeacher

export async function getPostsTeacher(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsTeacher.find()
					// .skip(perPage * (page - 1))
					// .limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsTeacher.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

export async function deletePostsTeachers(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsTeacher.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function getPostsTeachersSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsTeacher.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function updatePostsTeachers(object) {
	try {
		await connectDB()
		const update = await PostModelsTeacher.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					name: object.name,
					about: object.about,
					modificator: object.modificator,
					href: object.href,
					link: object.link,
					span: object.span,
					personId: object.personId,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

export async function createPostsTeachers(object) {
	try {
		await connectDB()
		const update = await PostModelsTeacher.insertMany({
			imgPath: object.path,
			name: object.name,
			about: object.about,
			modificator: object.modificator,
			href: object.href,
			link: object.link,
			span: object.span,
			personId: object.personId,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsTeacher

// FIXME: getPostsSoviet

export async function getPostsSoviet(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsSoviet.find()
					// .skip(perPage * (page - 1))
					// .limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsSoviet.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

export async function deletePostsSoviet(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSoviet.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function getPostsSovietSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSoviet.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function updatePostsSoviet(object) {
	try {
		await connectDB()
		const update = await PostModelsSoviet.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					name: object.name,
					about: object.about,
					modificator: object.modificator,
					href: object.href,
					link: object.link,
					span: object.span,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

export async function createPostsSoviet(object) {
	try {
		await connectDB()
		const update = await PostModelsSoviet.insertMany({
			imgPath: object.path,
			name: object.name,
			about: object.about,
			modificator: object.modificator,
			href: object.href,
			link: object.link,
			span: object.span,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsSoviet

// FIXME: getPostsMentors

export async function getPostsMentors(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsMentors.find()
					// .skip(perPage * (page - 1))
					// .limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsMentors.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}
export async function deletePostsMentors(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsMentors.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function getPostsMentorsSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsMentors.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function updatePostsMentors(object) {
	try {
		await connectDB()
		const update = await PostModelsMentors.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					name: object.name,
					about: object.about,
					modificator: object.modificator,
					href: object.href,
					link: object.link,
					span: object.span,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}
export async function createPostsMentors(object) {
	try {
		await connectDB()
		const update = await PostModelsMentors.insertMany({
			imgPath: object.path,
			name: object.name,
			about: object.about,
			modificator: object.modificator,
			href: object.href,
			link: object.link,
			span: object.span,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsMentors

// FIXME: getPostsSubjects

export async function getPostsSubjects(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsSubject.find()
					// .skip(perPage * (page - 1))
					// .limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsSubject.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}
export async function getPostsSubjectsSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSubject.find({ name: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function deletePostsSubjects(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSubject.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function updatePostsSubjects(object) {
	try {
		await connectDB()
		const update = await PostModelsSubject.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					title: object.title,
					description: object.description,
					name: object.name,
					teacherInfo: object.teacherInfo,
					downloadPath: object.downloadPath,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

export async function createPostsSubjects(object) {
	try {
		await connectDB()
		const update = await PostModelsSubject.insertMany({
			imgPath: object.path,
			title: object.title,
			description: object.description,
			name: object.name,
			teacherInfo: object.teacherInfo,
			downloadPath: object.downloadPath,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsSubjects

// FIXME: getPostsPlans

export async function getPostsPlans() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsPlan.find()))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsPlans

// FIXME: getPostsForAdmin

export async function getPostsForAdmin(login) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({ login })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function getPostsForAdminSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function updatePostsForAdmin(object) {
	try {
		await connectDB()
		const update = await PostModelsForAdmin.updateOne(
			{ _id: object.userId },
			{
				$set: {
					imgPath: object.path,
					fullName: object.fullName,
					login: object.login,
					password: object.password,
					modificator: object.modificator,
				},
			}
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({ fullName: object.fullName }).countDocuments({})))

		return { success: update.nModified > 0, dataCount: dataCount }
	} catch (error) {
		return { error: error.message }
	}
}
export async function checkPostsForAdmin(check) {
	try {
		await connectDB()
		const dataCount = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({ login: check.login }).countDocuments({})))

		return { dataCount: dataCount }
	} catch (error) {
		return { error: error.message }
	}
}

export async function getPostsForAdminChange(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsForAdmin.find()
					.skip(perPage * (page - 1))
					.limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsForAdmin.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}
export async function deletePostsForAdminChange(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}
export async function updatePostsForAdminChange(object) {
	try {
		await connectDB()
		const update = await PostModelsForAdmin.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					fullName: object.fullName,
					password: object.password,
					modificator: object.modificator,
					role: object.role,
					login: object.login,
					gender: object.gender,
					roleLevel: object.roleLevel,
					initialName: object.initialName,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

export async function createPostsForAdminChange(object) {
	try {
		await connectDB()
		const update = await PostModelsForAdmin.insertMany({
			imgPath: object.path,
			fullName: object.fullName,
			password: object.password,
			modificator: object.modificator,
			role: object.role,
			login: object.login,
			gender: object.gender,
			roleLevel: object.roleLevel,
			initialName: object.initialName,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsForAdmin
