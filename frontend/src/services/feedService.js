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
          name: 'John Doe',
          username: '@johndoe',
          avatar: 'cat',
        },
        content: "This is a tweet",
        timestamp: '21:00 2/12/2018',
      },
      {
        id: 2,
        user: {
          name: 'Sarah James',
          username: '@sarahjames',
          avatar: 'rabbit',
        },
        content: "This is another tweet",
        timestamp: '21:00 21/3/2022'
      },
      {
        id: 3,
        user: {
          name: 'Alex Smith',
          username: '@alexsmith',
          avatar: 'elephant',
        },
        content: "This is an impressive tweet",
        timestamp: '21:00 2/12/2022',
      }
    ]
  }
}
