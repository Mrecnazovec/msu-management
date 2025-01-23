import { getPostsForAdmin } from '@/app/_actions/postActions';
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'


export const authOptions = {

	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {},

			async authorize(credentials) {
				// const {login, password} = credentials;
				// const par = await getPostsForAdmin(login)
				// const user = {name: par.data[0]}
				// return user;

				try {
					const {login, password} = credentials;
					const par = await getPostsForAdmin(login)
					const user = {name: par.data[0]}
					
					if (!user) {
						return null
					}
					if (user.name.password !== password){
						return null
					}

					return user;
					
				} catch (error) {
					console.log('Error:', error)
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/',
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
