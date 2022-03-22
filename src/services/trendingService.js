// import Api from '@/services/Api'

// export default {
//   fetchPosts () {
//     return Api().get('trending');
//   }
// }


export const fetchTrending = () => {
    return {
        data: [
            {
                hashTag: '#PlayStation5',
                tweetsCount: '26.6k',
            },
            {
                hashTag: '#EldenRingGame',
                tweetsCount: '36.9k',
            },
            {
                hashTag: '#xkcd',
                tweetsCount: '16.5k',
            },
        ]
    }
}

export const fetchProfiles = () => {
    return {
        data: [
            {
                id: 1,
                user: {
                  name: 'John Doe',
                  username: '@johndoe',
                  avatar: 'cat',
                },
              },
              {
                id: 2,
                user: {
                  name: 'Sarah James',
                  username: '@sarahjames',
                  avatar: 'rabbit',
                },
              },
              {
                id: 3,
                user: {
                  name: 'Alex Smith',
                  username: '@alexsmith',
                  avatar: 'elephant',
                },
              }
        ]
    }
}
