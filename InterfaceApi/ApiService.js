

export default {


    testApi:function(data){
        return  fetch('localhost:8080/api/Login/user', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then((response) => response.json())
    }
}



Api.testApi({username:"luu",password:"an cut"}).then((response)=>{

    console.log(response);
})

