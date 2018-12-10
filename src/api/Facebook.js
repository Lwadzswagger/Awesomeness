import { Facebook, Constants} from 'expo';


const permissions = ['email','public_profile' ];

const loginAsync = async ()=>{
    try{
const { type, token} =  await Facebook.logInWithReadPermissionsAsync(
    Constants.manifest.facebookAppId, {permissions})
      
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