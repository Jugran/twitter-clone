// import Api from '@/services/Api'

// export default {
//   fetchPosts () {
//     return Api().get('tweets');
//   }
// }


export default {
  fetchPosts () {
    return {
      tweets: [
        {
          id: 1,
          user: {
            name: 'John Doe',
            avatar: 'image-1',
            content: "This is a tweet"
          },
          timestamp: '21:00 2/12/2018',
        },
        {
          id: 2,
          user: {
            name: 'Sarah James',
            avatar: 'image-2',
            content: "This is a tweet"
          },
          timestamp: '21:00 21/3/2022'
        }
      ]
    }
  }
}