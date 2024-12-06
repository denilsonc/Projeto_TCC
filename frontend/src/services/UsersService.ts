const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:8082/users/view',{
            method: 'get',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        if(!response){
            return 'Vazio'
        }
        const res = await response.json();
        return res.data;
    } catch (error) {
        return console.error('Erro: ',error)
    }
}

const postUser = async (user: any) => {
    try {
        const response = await fetch('http://127.0.0.1:8082/users/createUser', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if(!response.ok){
            const res = await response.json()
            return res.data;
        }
    } catch (error) {
           return console.error('Erro a fazer a requisição: ',error)
    }
    
}

export default { postUser, getUsers}