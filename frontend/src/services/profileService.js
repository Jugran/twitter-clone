// import Api from '@/services/Api'

// export default {
//   fetchPosts () {
//     return Api().get('profile');
//   }
// }


export const fetchProfile = () => {
    return {
        data: {
            id: 1,
            user: {
                name: 'Peter Parker',
                username: '@peterparker',
                avatar: 'panda',
            },
        }
    }
}
