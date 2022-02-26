import handleApiErrors from "./scripts";




const fetchCalls = {



fetchData: function (url) {
        return fetch(`http://localhost:3001/api/v1/${url}`)
          .then(response => response.json())
          .catch(err => handleApiErrors(err))
        },


postData: function (url, someData) {
        fetch (url, {
          method: 'POST',
          body: JSON.stringify(someData),
          headers:{
            'Content-Type': 'application/json'
          }
          })
          .then(response => response.json())
          .then(data => console.log(data))
          // .catch(err => console.log(err))
        },
}



// const fetchCalls = {
//   get: fetchData(url),
//   post: postData();
// }

//http://localhost:3001/api/v1/hydration
export default fetchCalls;
