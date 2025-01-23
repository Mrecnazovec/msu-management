import { deletePostsAdministration, deletePostsForAdminChange, deletePostsMentors, deletePostsNews, deletePostsSoviet, deletePostsSubjects, deletePostsTeachers } from '@/app/_actions/postActions'
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request) {
	const props = await request.formData()
	const id = props.get("id");
	const action = props.get("action");


	console.log(id);

	if (action === 'deleteNews') {
    result = await deletePostsNews(id);
	}
	if (action === 'deleteAdministration') {
    result = await deletePostsAdministration(id);
	}
	if (action === 'deleteTeachers') {
    result = await deletePostsTeachers(id);

	}
	if (action === 'deleteCouncil') {
    result = await deletePostsSoviet(id);

	}
	if (action === 'deleteMentors') {
    result = await deletePostsMentors(id);

	}
	if (action === 'deleteAdmin') {
    result = await deletePostsForAdminChange(id);

	}

	return NextResponse.json({ success: true });
}
