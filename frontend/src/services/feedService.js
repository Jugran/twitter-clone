// import Api from '@/services/Api'

// export default {
//   fetchPosts () {
//     return Api().get('tweets');
//   }
// }


export const fetchFeed = () => {
  return {
    data: [
      {
        id: 1,
        user: {
          id: 1,
          name: 'John Doe',
          username: '@johndoe',
          avatar: 'cat',
        },
        text: "This is a tweet",
        createdAt: '2018-02-12',
      },
      {
        id: 2,
        user: {
          id: 2,
          name: 'Sarah James',
          username: '@sarahjames',
          avatar: 'rabbit',
        },
        text: "This is another tweet",
        createdAt: '2021-01-12'
      },
      {
        id: 3,
        user: {
          id: 3,
          name: 'Alex Smith',
          username: '@alexsmith',
          avatar: 'elephant',
        },
        text: "This is an impressive tweet",
        createdAt: '2022-02-12',
      }
    ]
  }
}
