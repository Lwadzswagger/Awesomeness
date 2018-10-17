import { Facebook, Constants} from 'expo';


const permissions = ['public_profile', 'email'];

const loginAsync = async ()=>{
    try{
const { type, token} =  await Facebook.logInWithReadPermissionsAsync(Constants.manifest.FacebookAppId, {permissions})
      
        if(type === 'success'){
        return Promise.resolve(token);
        }return Promise.reject('No success')
}
 catch(error){
console.log('error', error)

return  Promise.reject(error)
    }
}

export const FacebookApi = {
    loginAsync
} 